document.addEventListener('DOMContentLoaded', function() {
  alert('Selamat datang kawan di server Minecraft kami 😆!');
});
const menuToggle = document.getElementById('menu');
const dropdownMenu = document.getElementById('dropdown');

menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// Klik di luar menu untuk menutup
document.addEventListener('click', function(event) {
  if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('active');
  }
});
