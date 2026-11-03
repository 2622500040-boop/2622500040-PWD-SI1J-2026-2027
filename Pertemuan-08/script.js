// Mengambil elemen formulir
const form = document.getElementById("formPendaftaran");
const pesan = document.getElementById("pesan");

// Menjalankan fungsi ketika formulir dikirim
form.addEventListener("submit", function(event) {
    // Mencegah halaman dimuat ulang
    event.preventDefault();

    // Mengambil data dari formulir
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const kelompok = document.getElementById("kelompok").value.trim();
    const hobi = document.getElementById("hobiPilihan").value;

    // Memeriksa kelengkapan data
    if (!nama || !email || !kelompok || !hobi) {
        pesan.textContent = "Semua kolom wajib diisi!";
        pesan.style.color = "red";
        return;
    }

    // Menampilkan pesan berhasil
    pesan.textContent =
        "Terima kasih, " + nama +
        "! Formulir berhasil dikirim.";

    pesan.style.color = "green";

    // Mengosongkan formulir setelah dikirim
    form.reset();
});