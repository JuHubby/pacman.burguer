
//BURGUER//
// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const jalArray = [
  ['burger.png', 'burger.png'],
  ['burger.png', 'burger.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('JalapenoMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = jalArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
setInterval(Run,200);

// TODO: Add a Javascript setInterval() method that will call the Run() function above every 300 milliseconds. Note: in the video, Dr. Williams uses the setTimeout() method, but here we are going to use a slightly different
// method called setInterval(), so that you can have practice using this method.
// Inside of the Run() function you will also have to add an extra argument "pageWidth", which is declared on line 4 when you call the checkPageBounds() function below. 

// This function determines the direction of PacMan based on screen edge detection. 

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  //
  // TODO: Complete this to reverse direction upon hitting screen edge
  //
  if(direction === 0 && pos + imgWidth > pageWidth) direction = 1;
  if(direction === 1 && pos < 0 ) direction = 0;

  return direction;
}

//PAC-MAN//

var pos1 = 0;
const pacArray = [
    //image left ot right
    ['PacMan1.png', 'PacMan2.png'],
    //image right to left
    ['PacMan3.png', 'PacMan4.png']
];
//direction is a boolean var and takes values of o or 1 and 
// 0 is for no true (false), and 1 for true 
//(actually any plus number is true).
var direction1 = 0;
//focus can only have two values: 0 or 1, and
//refers to a current state.  
var focus1 = 0;

function Run1() {
    let img1 = document.getElementById("PacMan");
    let imgWidth1 = img1.width
    // This operation effectively ensures 
    //that the result of (focus + 1) wraps back to 0 when it reaches 2.
    // This toggle may be used 
    //to alternate between Pac-Man's mouth being open and closed.
    focus1 = (focus1 + 1) % 2;
    direction1 = checkPageBounds1(direction1, imgWidth1,pos1,pageWidth);
    //This line img.src sets the src attribute of the Pac-Man image 
    //(img) to a new image source based on the direction and focus values.
    // It seems to be updating the image to create the appearance
    // of Pac-Man moving
    img1.src = pacArray[direction1][focus1];
    if (direction1) {
        pos1 -= 20;
        img1.style.left = pos1 + "px";
    } else {
        pos1 += 20;
        img1.style.left = pos1 + 'px';
    }
    // Use setTimeout to call Run every 200 millesecs
    
}

setInterval(Run1,300);


function checkPageBounds1(direction1, imgWidth1,pos1,pageWidth) {
    //
    // Complete this to reverse direction on hitting page bounds
    // 
    
    if(direction1 === 0 && pos1 + imgWidth1 > pageWidth)  direction1 = 1;
    if(direction1 === 1 && pos1 === 0) direction1 = 0;
    
    return direction1;
}
//Please do not change
module.exports = checkPageBounds;
