const eyeIcon = document.getElementById('icon');
const idrText = document.getElementById('text');

let isVisible = false; // Status awal

eyeIcon.addEventListener('click', () => {
    isVisible = !isVisible; // Toggle status

    // Ubah teks IDR
    text.textContent = isVisible ? 'IDR 10,000,000' : 'IDR ----.----';

    // Ubah ikon mata
    icon.className = isVisible ? 'ph-light ph-eye' : 'ph-light ph-eye-slash';
});