# KAOTA Arta XL Circle - Documentation

**Created by MONTU**

---

## Table of Contents
- [Introduction](#introduction)
- [Overview of the Website](#overview-of-the-website)
- [Project Structure](#project-structure)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Functionality](#javascript-functionality)
- [How It Works](#how-it-works)
- [Customization and Future Enhancements](#customization-and-future-enhancements)

---

## Introduction

Selamat datang di dokumentasi *KAOTA Arta XL Circle*! Website ini merupakan platform interaktif untuk melakukan pengecekan kuota anggota dengan tampilan modern, menarik, dan responsif. Dokumentasi ini akan menjelaskan secara detail mengenai struktur, tampilan, dan fungsionalitas yang telah diimplementasikan dalam website, yang dibuat oleh **MONTU**.

---

## Overview of the Website

Website *KAOTA Arta XL Circle* dibuat dengan konsep yang menyerupai tampilan website hosting atau web PPOB pulsa. Desainnya profesional, bersih, dan user-friendly. Tema warna yang digunakan adalah kombinasi dari biru, putih, dan abu-abu. 

### Fitur utama website:
- **Cek Kuota Anggota:** Menampilkan tabel anggota dengan sisa kuota dan tombol untuk pengecekan kuota.
- **Pop-up Interaktif:** Saat tombol "Cek Kuota" ditekan, muncul pop-up dengan animasi lingkaran yang menunjukkan sisa kuota.
- **Pengurangan Kuota Dinamis:** Kuota anggota berkurang secara acak (500 MB - 700 MB) setiap kali pengecekan dilakukan, serta pengurangan otomatis setiap 1 jam.
- **Multi-section Page:** Website memiliki beberapa section seperti Beranda, Informasi Member, Tentang, dan Peringatan.

---

## Project Structure

Proyek ini terdiri dari tiga file utama:

1. **index.html** - Struktur HTML dasar dan konten website.
2. **styles.css** - File CSS yang menangani tampilan, layout, dan responsivitas website.
3. **script.js** - File JavaScript yang mengatur interaktivitas website.

---

## HTML Structure

File `index.html` memiliki struktur sebagai berikut:
- **Header & Navigasi**  
  - Menampilkan logo website dan menu navigasi.
- **Homepage**  
  - Berisi pesan sambutan serta tabel anggota dengan data kuota yang diperbarui secara dinamis.
- **Modal Pop-up**  
  - Muncul saat tombol "Cek Kuota" ditekan untuk menampilkan sisa kuota anggota.

---

## CSS Styling

File `styles.css` menangani tampilan website dengan gaya modern dan responsif:
- **Desain UI**  
  - Menggunakan warna biru, putih, dan abu-abu yang memberikan kesan profesional.
- **Animasi & Efek Transisi**  
  - Pop-up cek kuota menggunakan efek fade in/out.
- **Responsivitas**  
  - Media queries digunakan untuk menyesuaikan tampilan pada berbagai ukuran layar.

---

## JavaScript Functionality

File `script.js` menangani fungsionalitas utama:
- **Pengurangan Kuota Dinamis**  
  - Setiap kali tombol cek ditekan, kuota berkurang secara acak (500MB - 700MB).
- **Animasi Pop-up**  
  - Lingkaran berubah warna sesuai kondisi kuota.
- **Pengurangan Otomatis**  
  - Kuota berkurang otomatis setiap 1 jam.

---

## How It Works

1. **Saat Halaman Dimuat:**  
   - Website menampilkan tabel anggota dengan sisa kuota awal.
2. **Interaksi Pengguna:**  
   - Pengguna dapat mengklik tombol "Cek Kuota" untuk melihat sisa kuota.
3. **Pengurangan Otomatis:**  
   - Setiap 1 jam, kuota diperbarui secara otomatis.

---

## Customization and Future Enhancements

- **Ubah Skema Warna**  
  - Bisa disesuaikan di file `styles.css`.
- **Tambah Database**  
  - Untuk menyimpan data kuota secara permanen.
- **Autentikasi Pengguna**  
  - Setiap anggota bisa login dan cek kuotanya sendiri.

---

**Created by MONTU**  
Website ini dirancang agar modern, interaktif, dan mudah digunakan.
