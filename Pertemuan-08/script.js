const form = document.getElementById("formPendaftaran");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const kelompok = document.getElementById("kelompok").value.trim();
    const hobi = document.getElementById("hobiPilihan").value;

    if (!nama || !email || !kelompok || !hobi) {
        pesan.textContent = "Semua kolom wajib diisi!";
        pesan.style.color = "red";
        return;
    }

    pesan.textContent =
        "Terima kasih, " + nama +
        "! Formulir berhasil dikirim.";

    pesan.style.color = "green";

    form.reset();
});