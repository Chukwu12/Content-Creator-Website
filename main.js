/*Get the timer element from the DOM, 
which will be our output for the countdown*/
const output = document.querySelector(".timer");

//Set date we're counting down to
const targetDate = new Date("Sep 11, 2022 11:25:33").getTime();

//Update countdown every second
const interval = setInterval(() => {
  //Get current day and time
  const currentDate = new Date().getTime();
  //Get distance between the curent and target date
  const distance = targetDate - currentDate;
  //Time calculations for 
  //Days
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //Hours
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //Minutes
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //Seconds
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  //Output the result
  output.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  /*When the countdown ends, display 
  a new message and end the interval*/
  if (distance < 0) {
    //End interval
    clearInterval(interval);
    //Change text
    output.innerHTML = "WELCOME!";
    //Change text to uppercase
    output.style.textTransform = "uppercase";
    /*You can do anything you want to happen after 
    the countdown ends inside this 'if' statement. 
    This is just a simple example*/
  }
}, 1000);


// ==========================================Home Background Effects=================================//
const parallax = document.querySelector('.parallax');
const front = document.querySelector('.layer');
const back = document.querySelector('.back-layer');

const sFront = 150;
const sBack  = 400;

parallax.addEventListener('mousemove', e => {
  
  const x = e.clientX;
  const y = e.clientY;

  front.style.transform = `translate(${x/ sFront}%,
    ${y /sFront}%
    )`;

    back.style.transform = `translate(${x/ sBack}%,
    ${y /sBack}%
    )`;
})


// ===================================Product Card==============================================//
$('#target').click(function() {
  $(['#output-3','#output-2','#output']).html(function(i, val) { return val*1+1 });
});


  // JavaScript logic
  document.addEventListener('DOMContentLoaded', function () {
    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.icon-btn1');

    // Add click event listener to each button
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        // Get the parent card of the clicked button
        const parentCard = event.target.closest('.card');

        // Extract necessary information from the card
        const itemName = parentCard.querySelector('h5').textContent;
        const itemPrice = parentCard.querySelector('ul li:first-child').textContent;

        // Create a new cart item element
        const newItem = document.createElement('li');
        newItem.textContent = itemName + ' - ' + itemPrice;

        // Add the new item to the cart
        document.getElementById('cart-items').appendChild(newItem);
      });
    });

    // Close cart button functionality
    document.getElementById('close-cart').addEventListener('click', function() {
      document.getElementById('cart').style.display = 'none';
    });

    // Checkout button functionality
    document.getElementById('checkout-cart').addEventListener('click', function() {
      // Implement your checkout logic here, for example redirect to a checkout page
      alert('Redirecting to checkout page');
    });
  });


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