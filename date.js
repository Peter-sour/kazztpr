const dateInput = document.getElementById('dateInput');

// Event Listener untuk mereset placeholder saat user menghapus input
dateInput.addEventListener('input', () => {
    if (!dateInput.value) {
        dateInput.style.color = 'transparent'; // Jika kosong, sembunyikan teks
    } else {
        dateInput.style.color = '#000'; // Jika ada nilai, tampilkan teks
    }
});