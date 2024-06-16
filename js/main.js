

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
  document.addEventListener('DOMContentLoaded', () => {
    // Select all videos inside .video-container
    const videos = document.querySelectorAll('.video-container .videos video');
  
    // Add click event listener to each video
    videos.forEach(video => {
      video.addEventListener('click', () => {
        const videoSource = video.getAttribute('src');
        const popupVideo = document.querySelector('.popup-videos video');
  
        if (popupVideo) {
          // Set the source of the popup video
          popupVideo.src = videoSource;
  
          // Display the popup
          const popupContainer = document.querySelector('.popup-videos');
          if (popupContainer) {
            popupContainer.style.display = 'block';
          } else {
            console.error('Popup container not found.');
          }
        } else {
          console.error('Popup video element not found.');
        }
      });
    });
  
    // Add click event listener to close button (span) inside .popup-videos
    const popupCloseButton = document.querySelector('.popup-videos span');
    if (popupCloseButton) {
      popupCloseButton.addEventListener('click', () => {
        const popupContainer = document.querySelector('.popup-videos');
        if (popupContainer) {
          popupContainer.style.display = 'none'; // Hide the popup
        } else {
          console.error('Popup container not found.');
        }
      });
    } else {
      console.error('Popup close button (span) not found.');
    }
  });
  
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

  // =============================Cart Checkout======================================//
  document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.icon-cart');
    const cart = document.querySelector('.cart');
    const close = document.querySelector('.close');
  
    if (cartIcon && cart && close) {
      // Toggle cart visibility when clicking cart icon
      cartIcon.addEventListener('click', () => {
        cart.classList.toggle('open'); // Toggle a CSS class for showing/hiding
      });
  
      // Close cart when clicking close button
      close.addEventListener('click', () => {
        cart.classList.remove('open'); // Remove the 'open' class to hide the cart
      });
    } else {
      console.error('One or more elements not found:', { cartIcon, cart, close });
    }
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    // Select all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.icon-btn1');
  
    // Loop through each button and attach click event listener
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get the parent card element
        const card = button.closest('.card');
        
        // Example: Extracting service name and price from card
        const serviceName = card.querySelector('h2').textContent.trim();
        const price = card.querySelector('ul li:first-child').textContent.trim();
  
        // Example: Replace this with your logic to add the item to cart
        console.log(`Added '${serviceName}' to cart for ${price}`);
  
        // Optionally, update the cart total or perform other actions
        updateCartTotal();
      });
    });
  
    // Function to update cart total (example)
    function updateCartTotal() {
      // Example: Update cart total quantity or display a message
      const totalQuantityElement = document.querySelector('.totalQuantity');
      let currentTotal = parseInt(totalQuantityElement.textContent);
      totalQuantityElement.textContent = currentTotal + 1;
    }
  });
  