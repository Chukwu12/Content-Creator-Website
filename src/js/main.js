

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
  
    // Add click event listener to each video to open it in the popup
    videos.forEach(video => {
      video.addEventListener('click', () => {
        const videoSource = video.getAttribute('src');  // Get the src of clicked video
        const popupVideo = document.querySelector('.popup-videos video');  // Popup video element
  
        // Set the source of the popup video to the clicked video's src
        popupVideo.src = videoSource;
  
        // Display the popup
        const popupContainer = document.querySelector('.popup-videos');
        popupContainer.style.display = 'flex';  // Show the popup
      });
    });
  
    // Close the popup when the close button is clicked
    const closeButton = document.querySelector('.popup-videos .close-btn');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        const popupContainer = document.querySelector('.popup-videos');
        popupContainer.style.display = 'none';  // Hide the popup
      });
    }
  });
  
  
// =============================disable parallex effect======================================//
// function screenSize() {
//   let galleyContainer = document.querySelector('.gallery-container');
//   if (window.innerWidth < 768) {
//      // Disable parallax effect
//     galleyContainer.style.backgroundAttachment = 'scroll';
//   } else {
//     // Enable parallax effect
//     galleyContainer.style.backgroundAttachment = 'fixed';
//   }
//   }
//  // Run on initial load
//  screenSize();
//   // Add event listener to handle screen resize
//   window.addEventListener('resize', screenSize);

  // =============================Cart Checkout======================================//
  document.addEventListener('DOMContentLoaded', () => {
    // Toggle Cart Visibility
    const cartIcon = document.querySelector('.icon-cart');
    const cart = document.querySelector('.cartTab');
    const close = document.querySelector('.close');
  
    if (cartIcon && cart && close) {
      cartIcon.addEventListener('click', () => {
        cart.classList.toggle('open');
      });
  
      close.addEventListener('click', () => {
        cart.classList.remove('open');
      });
    } else {
      console.error('One or more elements not found:', { cartIcon, cart, close });
    }

   // Add to Cart Functionality
  const addToCartButtons = document.querySelectorAll('.icon-btn1');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const serviceName = card.querySelector('h2').textContent.trim();
      const price = card.querySelector('ul li:first-child').textContent.trim();
      const quantityInput = card.querySelector('.num-input');
      const quantity = parseInt(quantityInput.value);

      if (quantity > 0) {
        // Create a new cart item element
        const cartItem = document.createElement('div');
        cartItem.classList.add('item');
        const totalPrice = price * quantity;

        cartItem.innerHTML = `
            <div class="content">
                <div class="name">${serviceName}</div>
                <div class="price">$${totalPrice}</div>
                <div class="quantity">
                    <button class="decrement">-</button>
                    <span class="value">${quantity}</span>
                    <button class="increment">+</button>
                </div>
            </div>
        `;

      // Append the cart item to the listCart
      const listCart = document.querySelector('.listCart');
      listCart.appendChild(cartItem);

       // Clear the input
       quantityInput.value = 0;

      // Update total quantity in cart
      updateCartTotal();
    } else {
      alert('Please select a valid quantity.');
  }
    });
  });

  // Function to update cart total quantity
  function updateCartTotal() {
    const totalQuantityElement = document.querySelector('.totalQuantity');
    let currentTotal = parseInt(totalQuantityElement.textContent);
    totalQuantityElement.textContent = currentTotal + 1;
  }

  // Event delegation for increment and decrement buttons within cart items
  document.addEventListener('click', event => {
    if (event.target.classList.contains('increment')) {
      const quantityElement = event.target.parentElement.querySelector('.value');
      let currentValue = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentValue + 1;

        // Update total price in cart item
        const priceElement = event.target.closest('.item').querySelector('.price');
        const price = 125; // Fixed price per hour
        priceElement.textContent = `$${price * (currentValue + 1)}`;
    }

    if (event.target.classList.contains('decrement')) {
      const quantityElement = event.target.parentElement.querySelector('.value');
      let currentValue = parseInt(quantityElement.textContent);
      if (currentValue > 1) {
        quantityElement.textContent = currentValue - 1;

          // Update total price in cart item
          const priceElement = event.target.closest('.item').querySelector('.price');
          const price = 125; // Fixed price per hour
          priceElement.textContent = `$${price * (currentValue - 1)}`;
      }
    }
  });
});