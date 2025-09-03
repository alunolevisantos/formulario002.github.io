const toggle = document.getElementById('themeToggle');
const body = document.body;
const saved = localStorage.getItem('theme'); 

if (saved === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'index.html'; 
});