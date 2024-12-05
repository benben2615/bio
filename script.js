document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default navigation for demo
      link.style.transform = 'scale(0.9)';
      setTimeout(() => {
        link.style.transform = 'scale(1)';
      }, 200);
      alert(`Navigating to ${link.textContent}`); // ใช้ backticks
    });
  });
  