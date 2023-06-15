// PRODUCT  SECTION
let box = document.querySelectorAll('.slider-wrapper .box');
let preBtn = document.querySelector('.fa-angle-left');
let nextBtn = document.querySelector('.fa-angle-right');

let indexNo = 0;

let interval = setInterval(run, 3000);

function run(){
    indexNo++;
    changeSlide();
}

const changeSlide = () => {
    if (indexNo < 0) {
        indexNo = box.length - 1;
    } else if (indexNo > box.length - 1) {
        indexNo = 0;
    }

    box.forEach((slide) => {
        slide.style.transform = `translateX(-${indexNo * 100}%)`;

    });
};

preBtn.onclick = () => {
    indexNo--;
    changeSlide();
    resetInterval();
};

nextBtn.onclick = () => {
    indexNo++;
    changeSlide();
    resetInterval();
};

const resetInterval = ()=>{
    clearInterval(interval);
    interval = setInterval(run, 3000);
}





//============= NEWSLETTER=================//
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("newsletter-container").style.display = "block";
  });
  
  document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("newsletter-container").style.display = "none";
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-button');
    const productBoxes = document.querySelectorAll('.product-box');
  
    categoryButtons.forEach(button => {
      button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
  
        productBoxes.forEach(box => {
          if (category === 'featured' || box.classList.contains(category)) {
            box.style.display = 'block';
          } else {
            box.style.display = 'none';
          }
        });
  
        categoryButtons.forEach(btn => {
          btn.classList.remove('active');
        });
  
        this.classList.add('active');
      });
    });
  });



// MENU BUTTON
// Get the menu button element
const menuBtn = document.getElementById('menu-btn');

// Get the navigation menu element
const navMenu = document.querySelector('.nav-menu');

// Get the navigation links
const navLinks = document.querySelectorAll('.menu-list li a');

// Add a click event listener to the menu button
menuBtn.addEventListener('click', function() {
  // Toggle the "open" class on the navigation menu
  navMenu.classList.toggle('open');

  // Toggle the "fa-xmark" class on the menu button
  menuBtn.classList.toggle('fa-xmark');
});

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Check if the menu button is visible
    if (getComputedStyle(menuBtn).display !== 'none') {
      // Hide the navigation menu with a slight delay
      setTimeout(function() {
        navMenu.classList.remove('open');
        // Remove the "fa-xmark" class from the menu button with a slight delay
        setTimeout(function() {
          menuBtn.classList.remove('fa-xmark');
        }, 300); // Adjust the delay time (in milliseconds) as needed
      }, 300); // Adjust the delay time (in milliseconds) as needed
    }
  });
});


document.querySelector('#login-btn').onclick = () => {
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
  document.querySelector('.login-form-container').classList.remove('active');
}



// REVIEW SECTION
