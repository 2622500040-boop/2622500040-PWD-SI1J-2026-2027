# Dokumentasi Pertemuan 6 (P6) - Pemrograman Web Dasar

Repositori ini berisi dokumentasi dan hasil pengerjaan **Pertemuan 6 (P6): PHP Dasar dan Pemrograman Sisi Peladen** pada mata kuliah Pemrograman Web Dasar (IS205), Institut Sains dan Bisnis Atma Luhur.

---

##  Identitas Mahasiswa
- **Nama**: Kintia Wijanti
- **NIM**: 2622500040
- **Kelas**: SI1J
- **Program Studi**: Sistem Informasi (SI)
- **Tahun Akademik**: 2026/2027 (Gasal)

---

##  Lingkungan Pengujian (Local Server)
- **Aplikasi Peladen**: Laragon (Apache)
- **Versi PHP**: 8.x
- **Document Root**: `C:\laragon\www\`
- **Alamat URL Akses**: `http://localhost/2622500040-PWD-SI1J-2026-2027/pertemuan-06/`

---

##  Catatan Perubahan & Pengujian Bertahap (Baseline P5 ke P6)

### 1. Verifikasi Baseline & Struktur Direktori (Bagian B)
- **Perubahan**: Menyalin artefak dari `pertemuan-05` ke `pertemuan-06`, mengubah berkas utama dari `index.html` menjadi `index.php`.
- **Hasil Pengujian**: Peladen Apache di Laragon berhasil diaktifkan dan folder proyek dapat diakses via `localhost`.

### 2. Dasar PHP & Output Dinamis (Bagian C)
- **Perubahan**: Menguji tag `<?php ... ?>`, perintah `echo`, `print`, serta komentar PHP.
- **Hasil Pengujian**: Teks dinamis berhasil dirender oleh server Apache, dan kode sumber mentah PHP tidak terlihat saat dicek via *View Page Source* (`Ctrl + U`).

### 3. Variabel, Konstanta, & Tipe Data (Bagian D)
- **Perubahan**: 
  - Deklarasi variabel: `$namaMahasiswa`, `$semester` (2), `$ipk` (3.75), `$statusAktif` (true), `$catatanTambahan` (null).
  - Deklarasi konstanta: `NAMA_MATA_KULIAH` dan `PROFIL_GITHUB`.
- **Hasil Pengujian**: Data profil berhasil dipanggil secara dinamis pada bagian *Selamat Datang* dan tautan GitHub.

### 4. Operator, Percabangan, & Perulangan (Bagian E, F, G, H)
- **Operator & Percabangan**: 
  - Menghitung sisa semester (`$max - $semester = 6`).
  - Menggunakan percabangan `if-elseif-else` untuk keterangan semester (*Semester awal*).
  - Menggunakan percabangan `switch-case-default` untuk menentukan fokus prodi.
  - Menggunakan operator ternary (`?:`) untuk validasi rentang semester (*Sesuai rentang*) dan nama prodi.
- **Perulangan**:
  - `for`: Menampilkan 5 butir daftar *Target Belajar*.
  - `while`: Menampilkan daftar nomor semester.
- **Fungsi Bawaan**:
  - `number_format($ipk, 2, ',', '.')` merender IPK menjadi `3,75`.
  - `date("Y")` merender tahun hak cipta secara dinamis di *footer*.

### 5. Penyesuaian Atribut Action Formulir (Bagian I)
- **Perubahan**: Mengubah atribut `<form action="index.html">` menjadi `<form action="index.php">`.

---

##  Log Riwayat Commit Git
1. `git commit -m "catat pemeriksaan awal PHP di pertemuan-06\README.md"`
2. `git commit -m "menambahkan deklarasi variabel PHP"`
3. `git commit -m "menambahkan konstanta PHP"`
