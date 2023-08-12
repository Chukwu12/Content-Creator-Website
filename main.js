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
export default class Grid {
  constructor(el) {
      this.DOM = {el: el};
      this.gridItems = [];
      this.items = [...this.DOM.el.querySelectorAll('.grid__item')];
      this.items.forEach(item => this.gridItems.push(new GridItem(item)));
     
      this.showItems();
  }
  showItems() {
    gsap.timeline()
    .set(this.items, {scale: 0.7, opacity: 0}, 0)
    .to(this.items, {
        duration: 2,
        ease: 'Expo.easeOut',
        scale: 1,
        stagger: {amount: 0.6, grid: 'auto', from: 'center'}
    }, 0)
    .to(this.items, {
        duration: 3,
        ease: 'Power1.easeOut',
        opacity: 0.4,
        stagger: {amount: 0.6, grid: 'auto', from: 'center'}
    }, 0);
  }  
}

const grid = new Grid(document.querySelector('.grid-pics'));


class GridItem {
  constructor(el) {
      this.DOM = {el: el};
      this.move();
  }
  move() {
    // amount to move in each axis
    let translationVals = {tx: 0, ty: 0};
    // get random start and end movement boundaries
    const xstart = getRandomNumber(15,60);
    const ystart = getRandomNumber(15,60);
   
    // infinite loop
    const render = () => {
        // Calculate the amount to move.
        // Using linear interpolation to smooth things out.
        // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
        translationVals.tx = lerp(translationVals.tx, map(mousepos.x, 0, winsize.width, -xstart, xstart), 0.07);
        translationVals.ty = lerp(translationVals.ty, map(mousepos.y, 0, winsize.height, -ystart, ystart), 0.07);
       
        gsap.set(this.DOM.el, {x: translationVals.tx, y: translationVals.ty});  
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
}