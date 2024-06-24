// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add form submission handling
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);

  // Send form data to server (replace this with your actual server-side code)
  console.log('Form data:', Object.fromEntries(formData));

  // Reset form
  this.reset();

  // Show success message
  alert('Message envoyé avec succès !');
});

