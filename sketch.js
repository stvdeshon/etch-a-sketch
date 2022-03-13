const container = document.querySelector('#container');
const resetBtn = document.querySelector('#btn');
const size = document.querySelector('#size');
const blackBtn = document.querySelector('#black');
const rainbowBtn = document.querySelector('#rainbow');
const randomBtn = document.querySelector('#random');
let black = true;
let rainbow = false;
let random = false;
let randomized;

// Prevents glitches caused by dragging elements inside container
container.ondragstart = function() {return false;};

function sketchPad(rows) {
   for (let i = 0; i < rows; i++) {
     let col = document.createElement('div');
     col.style.setProperty('--grid-cols', rows)
     for (let j = 0; j < rows; j++) {
       let row = document.createElement('div');
       col.appendChild(row).className = 'row';
      
     }
     container.appendChild(col).className = 'col';

   }

   const column = document.querySelectorAll('.row');

   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let bgColor = "rgb(" + r + "," + g + "," + b + ")";

   let mouseIsDown = false;

   column.forEach((box) => {
      box.addEventListener('mousedown', function(){mouseIsDown = true});
      // box.addEventListener('mouseup', function(){mouseIsDown = false});
      box.addEventListener('mousemove', function(){
        if(mouseIsDown && rainbow){
          box.style.backgroundColor = rainbowMaker();   
        } else if (mouseIsDown && black) {
          box.style.backgroundColor = 'black';
        }
      });
     });
     column.forEach((box) => {
      box.addEventListener('mousedown', function(){mouseIsDown = true});
      // box.addEventListener('mouseup', function(){mouseIsDown = false});
      box.addEventListener('mousemove', function(){
        if(mouseIsDown && random){ 
          box.style.backgroundColor = randomized;
        }
      });
     });

     //Previously listening for mouseup on the container was causing a bug, so I had it listen for mouseup on the body
     document.body.addEventListener('mouseup', function(){
       mouseIsDown = false;
     })
     //Prevents bugs if someone drags outside the window
     document.body.addEventListener('mouseleave', function(){
       mouseIsDown = false;
     })
    
}

// A function to be called on every time the event listener is called if rainbow == true
function rainbowMaker() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + r + "," + g + "," + b + ")";
  randomized = bgColor;
  return bgColor;
}

randomBtn.addEventListener('click', rainbowMaker)

function paintItBlack() {
  black = true;
  rainbow = false;
  random = false;
}

blackBtn.addEventListener('click', paintItBlack);

function spectrum() {
  black = false;
  rainbow = true;
  random = false;

}

rainbowBtn.addEventListener('click', spectrum);

function randomizer() {
  black = false;
  rainbow = false;
  random = true;
}

randomBtn.addEventListener('click', randomizer);


//This resizes the pad up to 100 and defaults to 32 if the user inputs a number > 100 or cancels
function resize() {
  
  container.innerHTML = '';
  result = prompt('Pick a number between 1 and 100, anything more than 100 will default to 32.');

  if (result <= 100) {
    sketchPad(result);
  } else if (result > 100) {
    sketchPad(32);
  } 
  if (result == null) {
    sketchPad(32);
  }
}

size.addEventListener('click', resize);

//This resets the pad to the default value of 32 cells
function reset() {
  container.innerHTML = '';
  sketchPad(32);
}

resetBtn.addEventListener('click', reset);

window.onload = () => {
(sketchPad(32));
}
