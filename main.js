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
document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed') 

    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight - e.pageY*speed)/100

    layer.style.transform = `translateX{${x}px) translateY(${y}px)`

  })
}