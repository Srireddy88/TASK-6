document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('confirmation').textContent = `Thank you, ${name}! I will get back to you soon.`;
  this.reset();
});
