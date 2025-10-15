const box = document.getElementById('tooltipBox');

box.addEventListener('click', () => {
  box.classList.toggle('active');
});

// يغلق التولتيب لو ضغطت برا العنصر
document.addEventListener('click', (e) => {
  if (!box.contains(e.target)) {
    box.classList.remove('active');
  }
});
