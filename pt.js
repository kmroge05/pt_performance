// Image Carousel 

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("carousel-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2800); // Change image every 2.8 seconds
}

// Form Validation

// Name Validation Function
function validateName() {
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('name-error');


  if (name === '' || name == null) {
    nameError.innerText = "Please enter your name."; 
    return false;
  } else {
    return true;
  }
}

// Email Validation Function
function validateEmail() {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('email-error');
  
  // Regular expession to validate email format
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if ( email.match(pattern) && email.length > 0 ) {
    return true;
  } else {
    emailError.innerText = "Please enter a valid email." 
    return false;
  }
}

// Phone Validation Function
function validatePhone() {
  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phone-error');

  if (phone === '' || isNaN(phone) || phone.length != 10) {
    phoneError.innerText = "Please enter a 10-digit phone number."
    return false;
  } else {
    return true;
  }
}














