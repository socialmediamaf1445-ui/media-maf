// Ambil semua gambar di dalam galeri
const slider = document.querySelector('.slider');
let currentScroll = 0;

// Fungsi geser otomatis
function autoSlide() {
  if (!slider) return; // kalau elemen tidak ditemukan, hentikan
  currentScroll += 270; // jarak geser tiap kali
  if (currentScroll >= slider.scrollWidth - slider.clientWidth) {
    currentScroll = 0; // kalau udah di ujung, balik ke awal
  }
  slider.scrollTo({
    left: currentScroll,
    behavior: 'smooth'
  });
}

// Jalankan otomatis setiap 3 detik
setInterval(autoSlide, 3000);
