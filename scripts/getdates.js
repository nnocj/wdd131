const navLink = document.querySelector("#a");

navLink.addEventListener('mouseenter', function() {
    navLink.style.backgroundColor = '#000000'; // Change color on hover
  });

  button.addEventListener('mouseleave', function() {
    navLink.style.backgroundColor = '#3498db'; // Revert color when not hovering
  });