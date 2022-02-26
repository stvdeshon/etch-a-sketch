const container = document.querySelector('#container');
let base = 16;


function sketchPad(rows) {
   for (let i = 0; i < rows; i++) {
     let col = document.createElement('div');
     col.style.setProperty('--grid-cols', rows)
    //  container.appendChild(row).className = 'row';
     for (let j = 0; j < rows; j++) {
       let row = document.createElement('div');
       col.appendChild(row).className = 'row';
     }
     container.appendChild(col).className = 'col';

   }

  
   const column = document.querySelectorAll('.row');
   let mouseIsDown = false;
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


const result = window.prompt('Enter a number of squares');
sketchPad(result);