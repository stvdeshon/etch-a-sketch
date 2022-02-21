const container = document.querySelector('#container');


function sketchPad(rows) {
   for (let i = 0; i < rows; i++) {
     let row = document.createElement('div');
    //  container.appendChild(row).className = 'row';
     for (let j = 0; j < rows; j++) {
       let col = document.createElement('div');
       row.appendChild(col).className = 'col';
     }
     container.appendChild(row).className = 'row';
   }
  
   const boxy = document.querySelectorAll('.row');
   boxy.forEach((box) => {
    box.addEventListener('click', () => {
      box.style.backgroundColor = 'black';
    })
  })

}



sketchPad(16);