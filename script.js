// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  // Function to change skill description and highlight the active skill
const skillItems = document.querySelectorAll('.skill-row');
skillItems.forEach(skill => {
  skill.addEventListener('click', function() {
    // Remove active class from all skills
    skillItems.forEach(item => item.classList.remove('active'));
    // Add active class to clicked skill
    this.classList.add('active');
    // Change skill description or perform other dynamic updates
    const skillTitle = this.querySelector('h3').innerText;
    document.querySelector('.intro p').innerHTML = `You clicked on: <strong>${skillTitle}</strong>. Learn more about this skill!`;
  });
});
// Typing animation effect
const text = "I'm Aditya Kumar<br>A passionate programmer!";
let index = 0;
function type() {
  if (index < text.length) {
    // Check if it's a line break
    if (text.charAt(index) === '<') {
      document.getElementById('intro-text').innerHTML += '<br>';
      index += 4; // Skip over the entire <br> tag (which has 4 characters)
    } else {
      document.getElementById('intro-text').innerHTML += text.charAt(index);
      index++;
    }
    setTimeout(type, 100); // Adjust typing speed here
  }
}
type(); // Start typing when page loads
