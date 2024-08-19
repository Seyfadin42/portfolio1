const sections = document.querySelectorAll('.section');
const secBtns = document.querySelector('.controls');
const secBtn = document.querySelectorAll('.control');

// Function to handle page transitions
function pageTrans() {
  secBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
      // Remove active class from currently active button
      const currentBtn = document.querySelector('.active-btn');
      if (currentBtn) {
        currentBtn.classList.remove('active-btn');
      }
      
      // Add active class to the clicked button
      this.classList.add('active-btn');

      // Get the data-id of the clicked button
      const targetId = this.getAttribute('data-id');

      // Hide all sections and show the target section
      sections.forEach(section => {
        section.classList.remove('active'); // Remove active class to hide
        section.style.display = 'none'; // Ensure it's hidden
      });
      
      const targetSection = document.getElementById(targetId);
      targetSection.style.display = 'block'; // Show the selected section
      setTimeout(() => {
        targetSection.classList.add('active'); // Add active class after display
      }, 0); // Delay to allow display to register

    });
  });
}

// Initialize view
function initializeView() {
  sections.forEach(section => {
    section.style.display = 'none'; // Hide all sections by default
  });
  sections[0].style.display = 'block'; // Show the first section initially
  sections[0].classList.add('active'); // Add active class to the first section
}

initializeView();
pageTrans();

 // Start the filling animation
 document.querySelectorAll('.progress-fill').forEach(bar => {
  bar.style.width = bar.style.width; // Triggering the CSS transition
});








function showDescription(card) {
  // Hide all descriptions
  document.querySelectorAll('.card').forEach((item) => {
      item.classList.remove('active');
  });

  // Show the description of the clicked card
  card.classList.toggle('active');
}
/*theme*/
const themebtn = document.querySelector('.theme-btn');
const themeIcon = document.getElementById('theme-icon');
let isLightMode = true;

themebtn.addEventListener('click', () => {
    const element = document.body;
    element.classList.toggle('light-mode', !isLightMode);
    themeIcon.classList.toggle('fa-sun', !isLightMode);
    themeIcon.classList.toggle('fa-moon', isLightMode);
    isLightMode = !isLightMode;
});
