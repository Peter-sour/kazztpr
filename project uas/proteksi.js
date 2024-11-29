  // Proteksi halaman admin
  if (sessionStorage.getItem("isLoggedIn") !== "true") {
    alert("Silakan login terlebih dahulu!");
    window.location.href = "login.html"; // Arahkan ke halaman login jika belum login
}
alert("selamat datang di halaman admin anda. Tekan Enter atau OK untuk melanjutkan");
document.getElementById("logout").addEventListener("click", function () {
    // Tampilkan alert untuk konfirmasi
    if (confirm("Apakah Anda yakin ingin log out?")) {
        // Hapus status login dari sessionStorage
        sessionStorage.removeItem("isLoggedIn");
        // Tampilkan pesan log out
        alert("Anda telah berhasil log out! Silahkan login kembali untuk masuk");
        // Arahkan ke halaman login
        window.location.href = "login.html";
    }
});