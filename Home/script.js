// NAVBAR
  function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
  }

  function toggleDropdown(element) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(d => {
      if (d !== element) d.classList.remove("open");
    });
    element.classList.toggle("open");
  }

  // Tutup dropdown saat klik di luar
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(el => el.classList.remove('open'));
    }
  });


  // SLIDER
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  function changeSlide(step) {
    showSlide(index + step);
  }

  // Auto play
  setInterval(() => {
    changeSlide(1);
  }, 4000);

  // Inisialisasi
  showSlide(0);