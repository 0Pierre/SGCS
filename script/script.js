// Scroll to specific section when button is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

     // Update active state
    updateActiveLink(sectionId);
}

// Gallery Slider Functionality
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlides(slides);
}

function updateSlides(slides) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} shortly.`);
    
    // Reset the form after submission
    document.getElementById('contact-form').reset();
});

// Function to update the active link based on the current section
function updateActiveLink(sectionId) {
    const links = document.querySelectorAll('nav ul li a');
    
    // Remove the 'active' class from all links
    links.forEach(link => link.classList.remove('active'));
    
    // Add the 'active' class to the current section's link
    const activeLink = document.querySelector(`nav ul li a[href="javascript:void(0);"][onclick="scrollToSection('${sectionId}')"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
  
  // Detect scroll to update active link
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) { // Adjust the offset as needed
        currentSectionId = section.getAttribute('id');
      }
    });
  
    if (currentSectionId) {
      updateActiveLink(currentSectionId);
    }
  });

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      question.addEventListener('click', function() {
          // Toggle the active state and answer visibility
          const isActive = question.classList.contains('active');

          // Close all other FAQ items
          faqItems.forEach(i => {
              i.querySelector('.faq-question').classList.remove('active');
              i.querySelector('.faq-answer').style.display = 'none';
          });

          // Toggle the current FAQ item
          if (!isActive) {
              question.classList.add('active');
              answer.style.display = 'block';
          } else {
              question.classList.remove('active');
              answer.style.display = 'none';
          }
      });
  });