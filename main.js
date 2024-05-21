

// ==========================================Home Background Effects=================================//
// const parallax = document.querySelector('.parallax');
// const front = document.querySelector('.layer');
// const back = document.querySelector('.back-layer');

// const sFront = 150;
// const sBack  = 400;

// parallax.addEventListener('mousemove', e => {
  
//   const x = e.clientX;
//   const y = e.clientY;

//   front.style.transform = `translate(${x/ sFront}%,
//     ${y /sFront}%
//     )`;

//     back.style.transform = `translate(${x/ sBack}%,
//     ${y /sBack}%
//     )`;
// })


// ===================================Product Card==============================================//
// $('#target').click(function() {
//   $(['#output-3','#output-2','#output']).html(function(i, val) { return val*1+1 });
// });


//   // JavaScript logic
//   document.addEventListener('DOMContentLoaded', function () {
//     // Select all "Add to Cart" buttons
//     const addToCartButtons = document.querySelectorAll('.icon-btn1');

//     // Add click event listener to each button
//     addToCartButtons.forEach(function(button) {
//       button.addEventListener('click', function(event) {
//         // Get the parent card of the clicked button
//         const parentCard = event.target.closest('.card');

//         // Extract necessary information from the card
//         const itemName = parentCard.querySelector('h5').textContent;
//         const itemPrice = parentCard.querySelector('ul li:first-child').textContent;

//         // Create a new cart item element
//         const newItem = document.createElement('li');
//         newItem.textContent = itemName + ' - ' + itemPrice;

//         // Add the new item to the cart
//         document.getElementById('cart-items').appendChild(newItem);
//       });
//     });

//     // Close cart button functionality
//     document.getElementById('close-cart').addEventListener('click', function() {
//       document.getElementById('cart').style.display = 'none';
//     });

//     // Checkout button functionality
//     document.getElementById('checkout-cart').addEventListener('click', function() {
//       // Implement your checkout logic here, for example redirect to a checkout page
//       alert('Redirecting to checkout page');
//     });
//   });


  // =============================Video Gallery======================================//
 document.querySelectorAll('.video-container video').forEach(vid => {
  vid.onclick = () => {
    document.querySelector('.popup-videos').style.display = 'block';
    document.querySelector('.popup-videos video').src = vid.getAttribute('src');
  }
 });
 document.querySelector('.popup-videos span').onclick = () => {
  document.querySelector('.popup-videos').style.display = 'none';
 }
// =============================disable parallex effect======================================//
function screenSize() {
  let galleyContainer = document.querySelector('.gallery-container');
  if (window.innerWidth < 768) {
     // Disable parallax effect
    galleyContainer.style.backgroundAttachment = 'scroll';
  } else {
    // Enable parallax effect
    galleyContainer.style.backgroundAttachment = 'fixed';
  }
  }
 // Run on initial load
 screenSize();
  // Add event listener to handle screen resize
  window.addEventListener('resize', screenSize);