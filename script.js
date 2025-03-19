// Data member dan kuota awal (dalam MB)
// Group A: Nia, Sri, Sendi, Dike, Iwe Dike, Werti, Riski, Puji = 17-18GB (gunakan 18000 MB)
// Group B: Dinda, Bapak, Memek = 5-8GB (gunakan 8000 MB)
const members = [
  { name: "Nia", quota: 18000, group: "A" },
  { name: "Sri", quota: 18000, group: "A" },
  { name: "Sendi", quota: 18000, group: "A" },
  { name: "Dike", quota: 18000, group: "A" },
  { name: "Iwe Dike", quota: 18000, group: "A" },
  { name: "Werti", quota: 18000, group: "A" },
  { name: "Riski", quota: 18000, group: "A" },
  { name: "Puji", quota: 18000, group: "A" },
  { name: "Bapak", quota: 8000, group: "B" },
  { name: "Memek", quota: 8000, group: "B" },
  { name: "Dinda", quota: 8000, group: "B" }
];

const memberList = document.getElementById("member-list");

// Fungsi untuk mengkonversi MB ke GB dengan 2 desimal
function mbToGb(mb) {
  return (mb / 1000).toFixed(2);
}

// Fungsi untuk generate baris tabel untuk setiap member
function populateTable() {
  memberList.innerHTML = "";
  members.forEach((member, index) => {
    const row = document.createElement("tr");

    // Nama member
    const nameTd = document.createElement("td");
    nameTd.textContent = member.name;
    row.appendChild(nameTd);

    // Sisa Kuota
    const quotaTd = document.createElement("td");
    quotaTd.textContent = mbToGb(member.quota);
    row.appendChild(quotaTd);

    // Tombol cek kuota
    const actionTd = document.createElement("td");
    const btn = document.createElement("button");
    btn.textContent = "Cek Kuota";
    btn.classList.add("btn-check");
    btn.addEventListener("click", () => checkQuota(index));
    actionTd.appendChild(btn);
    row.appendChild(actionTd);

    memberList.appendChild(row);
  });
}

// Fungsi cek kuota: mengurangi quota acak (500-700 MB) tiap pengecekan
function checkQuota(memberIndex) {
  const member = members[memberIndex];
  // Pengurangan acak antara 500 dan 700 MB
  const reduction = Math.floor(Math.random() * (700 - 500 + 1)) + 500;
  member.quota = Math.max(member.quota - reduction, 0);

  // Tampilkan pop-up
  showPopup(member);

  // Update tabel
  populateTable();
}

// Fungsi untuk menampilkan pop-up cek kuota
function showPopup(member) {
  const popup = document.getElementById("quota-popup");
  const memberNameEl = document.getElementById("member-name");
  const quotaAmountEl = document.getElementById("quota-amount");
  const quotaIndicator = document.getElementById("quota-indicator");
  const popupMessage = document.getElementById("popup-message");

  memberNameEl.textContent = member.name;
  quotaAmountEl.textContent = mbToGb(member.quota) + " GB";

  // Tentukan warna lingkaran sesuai kondisi awal dan sisa kuota
  if (member.group === "A") {
    // Untuk Group A, safe jika masih 17-18GB
    if (member.quota >= 17000) {
      quotaIndicator.classList.remove("low");
      quotaIndicator.classList.add("safe");
    } else {
      quotaIndicator.classList.remove("safe");
      quotaIndicator.classList.add("low");
    }
  } else if (member.group === "B") {
    // Group B dianggap low dari awal
    quotaIndicator.classList.remove("safe");
    quotaIndicator.classList.add("low");
  }

  // Jika sisa kuota sangat rendah, tampilkan pesan peringatan
  if (member.quota <= 1000) {
    popupMessage.textContent = "Kuota hampir habis! Silakan beli tambahan kuota.";
  } else {
    popupMessage.textContent = "";
  }

  // Tampilkan modal dengan efek fade in
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("show"), 10);
}

// Fungsi untuk menutup pop-up
function closePopup() {
  const popup = document.getElementById("quota-popup");
  popup.classList.remove("show");
  // Setelah transisi, sembunyikan pop-up
  setTimeout(() => popup.classList.add("hidden"), 300);
}

// Fungsi untuk mengurangi kuota secara otomatis tiap 1 jam (3600000 ms)
function autoReduceQuota() {
  members.forEach((member, index) => {
    const reduction = Math.floor(Math.random() * (700 - 500 + 1)) + 500;
    member.quota = Math.max(member.quota - reduction, 0);
  });
  populateTable();
}

// Inisialisasi tabel ketika halaman dimuat
populateTable();

// Set interval pengurangan otomatis setiap 1 jam
setInterval(autoReduceQuota, 3600000);
