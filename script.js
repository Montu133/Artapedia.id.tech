document.addEventListener('DOMContentLoaded', function() {
  // Simulasi animasi loading (2 detik), setelah itu tampilkan konten
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('hidden'));
  }, 2000);

  // Daftar anggota dengan kuota awal (dalam GB)
  const members = [
    { name: 'Nia', quota: getRandomQuota(17, 18) },
    { name: 'Sri', quota: getRandomQuota(17, 18) },
    { name: 'Sendi', quota: getRandomQuota(17, 18) },
    { name: 'Dike', quota: getRandomQuota(17, 18) },
    { name: 'Iwe Dike', quota: getRandomQuota(17, 18) },
    { name: 'Werti', quota: getRandomQuota(17, 18) },
    { name: 'Riski', quota: getRandomQuota(17, 18) },
    { name: 'Puji', quota: getRandomQuota(17, 18) },
    { name: 'Dinda', quota: getRandomQuota(5, 8)  },
    { name: 'Bapak', quota: getRandomQuota(5, 8)  },
    { name: 'Memek', quota: getRandomQuota(5, 8)  }
  ];

  // Isi tabel dengan data member
  const memberList = document.getElementById('member-list');
  members.forEach((member, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${member.name}</td>
      <td id="quota-${index}">${member.quota.toFixed(2)} GB</td>
      <td><button onclick="checkQuota(${index})">Cek Kuota</button></td>
    `;
    memberList.appendChild(tr);
  });

  // Pengurangan kuota secara otomatis setiap 1 jam (3600000 ms)
  // Untuk demo, interval diset ke 60000 ms (1 menit)
  setInterval(() => {
    members.forEach((member, index) => {
      if (member.quota > 0) {
        let reduction = getRandomReduction(0.5, 0.7); // pengurangan 500MB - 700MB (0.5 - 0.7 GB)
        member.quota = Math.max(member.quota - reduction, 0);
        document.getElementById(`quota-${index}`).textContent = member.quota.toFixed(2) + ' GB';
        // Jika kuota hampir habis (misalnya <= 1 GB), perbarui bagian peringatan
        if (member.quota <= 1) {
          document.getElementById('warning-message').textContent = 
            `Peringatan: Kuota ${member.name} hampir habis. Silakan beli tambahan kuota.`;
        }
      }
    });
  }, 60000); // ganti ke 3600000 untuk 1 jam

  // Ekspor array members agar bisa diakses oleh fungsi checkQuota
  window.members = members;
});

// Fungsi untuk mendapatkan nilai kuota acak (GB)
function getRandomQuota(min, max) {
  return Math.random() * (max - min) + min;
}

// Fungsi untuk mendapatkan nilai pengurangan acak (GB)
function getRandomReduction(min, max) {
  return Math.random() * (max - min) + min;
}

// Fungsi ketika tombol "Cek Kuota" ditekan
function checkQuota(index) {
  const member = window.members[index];
  if (member.quota <= 0) {
    alert(`${member.name} tidak memiliki kuota. Silakan beli tambahan kuota.`);
    return;
  }
  // Pengurangan kuota saat pengecekan
  let reduction = getRandomReduction(0.5, 0.7);
  member.quota = Math.max(member.quota - reduction, 0);
  document.getElementById(`quota-${index}`).textContent = member.quota.toFixed(2) + ' GB';

  // Tampilkan pop-up dengan detail kuota
  document.getElementById('popup-member-name').textContent = member.name;
  document.getElementById('popup-quota-amount').textContent = member.quota.toFixed(2) + ' GB sisa';

  // Atur warna lingkaran berdasarkan kondisi kuota:
  // Jika kuota >= 10 GB dianggap aman (hijau), jika kurang maka hampir habis (merah)
  const indicator = document.getElementById('quota-indicator');
  if (member.quota >= 10) {
    indicator.classList.remove('warning');
    indicator.classList.add('safe');
  } else {
    indicator.classList.remove('safe');
    indicator.classList.add('warning');
  }
  indicator.textContent = member.quota.toFixed(2);

  // Tampilkan pop-up dengan animasi fade in
  const popup = document.getElementById('quota-popup');
  popup.classList.remove('hidden');
  setTimeout(() => popup.classList.add('show'), 10);

  // Jika kuota mendekati 0, perbarui peringatan
  if (member.quota <= 1) {
    document.getElementById('warning-message').textContent = 
      `Peringatan: Kuota ${member.name} hampir habis. Silakan beli tambahan kuota.`;
  }
}

// Fungsi untuk menutup pop-up
function closePopup() {
  const popup = document.getElementById('quota-popup');
  popup.classList.remove('show');
  setTimeout(() => popup.classList.add('hidden'), 500);
}
