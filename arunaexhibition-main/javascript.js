// Fungsi untuk mendeteksi perangkat
function detectDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && screen.width >= 768;

    if (isMobile || isTablet) {
        // Tampilkan alert
        document.getElementById("alert").style.display = "block";
    }
}

// Jalankan fungsi saat halaman dimuat
window.onload = detectDevice;

const image = document.getElementById('myImage');
  image.addEventListener('click', (event) => {
    event.preventDefault();
    // Tambahkan aksi lain jika diperlukan, misalnya menampilkan modal
    alert('Gambar tidak dapat dibuka.');
  });