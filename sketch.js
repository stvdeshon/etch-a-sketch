const container = document.querySelector('#container');
const resetBtn = document.querySelector('#btn');
const size = document.querySelector('#size');
const blackBtn = document.querySelector('#black');
const rainbowBtn = document.querySelector('#rainbow');
const randomBtn = document.querySelector('#random');
let black = true;
let rainbow = false;
let random = false;



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

   if (black == true) {
   column.forEach((box) => {
      box.addEventListener('mousedown', function(){mouseIsDown = true});
      box.addEventListener('mouseup', function(){mouseIsDown = false});
      box.addEventListener('mousemove', function(){
        if(mouseIsDown){
          box.style.backgroundColor = 'black';   
        };
      });
     });
    }
    if (rainbow == true){
     column.forEach((box) => {
      box.addEventListener('mousedown', function(){mouseIsDown = true});
      box.addEventListener('mouseup', function(){mouseIsDown = false});
      box.addEventListener('mousemove', function(){
        if(mouseIsDown){
          box.style.backgroundColor = rainbowMaker();   
        };
      });
     });
    }
    if (random == true){
      column.forEach((box) => {
       box.addEventListener('mousedown', function(){mouseIsDown = true});
       box.addEventListener('mouseup', function(){mouseIsDown = false});
       box.addEventListener('mousemove', function(){
         if(mouseIsDown){
           box.style.backgroundColor = bgColor;   
         };
       });
      });
     }
}

// A function to be called on every time the event listener is called if rainbow == true
function rainbowMaker() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + r + "," + g + "," + b + ")";
  return bgColor;
}
 
// The follow three functions and their respective event listeners are to change the color, but need work to live update
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


//This resizes the pad up to 100
function resize() {
  
  container.innerHTML = '';
  result = prompt('pick');
  if (result <= 100) {
    sketchPad(result);
  } else {
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



window.onload(sketchPad(32));


