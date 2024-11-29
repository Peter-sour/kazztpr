//untukproteksi
if(confirm("apakah anda ingin kembali ke halaman pertama. Tekan cancel jika TIDAK")){
    
    // Menghapus sessionStorage jika user mengklik tombol kembali
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = 'pribadi.html';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default
 
  // Mengambil nilai input
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
 
  const messageElement = document.getElementById('message');
          
          if (username === 'malak' && password === '5678') {
             alert("Login berhasil,tekan OK atau enter untuk melanjutkan");
             // Simpan status login di sessionStorage
            sessionStorage.setItem("isLoggedIn", "true"); 
             setTimeout(() => { 
                  window.location.href = 'admin.html';
              }, 1000);
          } else {
              alert("login gagal,username atau pasword salah. Tekan OK atau enter untuk melanjutkan");
          }
      });
  