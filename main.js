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
const parallax = document.querySelector('#home-page');
const front = document.querySelector('.layer');
const back = document.querySelector('.back-layer');

const sFront = 150;
const sBack  = 400;

home-page.addEventListener('mousemove', e => {
  
  const x = e.clientX;
  const y = e.clientY;

  front.style.transform = `translate(${x/ sFront}%,
    ${y /sFront}%
    )`;

    back.style.transform = `translate(
      (${x/ sBack}%,
    ${y /sBack}%
    )`;
})