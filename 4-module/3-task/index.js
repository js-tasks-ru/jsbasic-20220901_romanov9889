const ageIndex = 1;
const genderIndex = 2;
const statusIndex = 3;

const isAvailable = (cell) => cell.getAttribute('data-available') === "true" ? 'available' : 'unavailable';

const maleOrFemale = (cell) => cell.innerText === `m` ? 'male' : 'female';

const ageCheck = (row,cell) => {if (cell.innerText < 18) {row.style="text-decoration: line-through";}}

function highlight(table) {
  
  for (let i = 1; i < table.rows.length; i += 1){
    const row = table.rows[i];
    
    row.cells[statusIndex].hasAttribute('data-available') ? row.classList.add(isAvailable(row.cells[statusIndex])) : row.hidden = true;
    
    row.classList.add(maleOrFemale(row.cells[genderIndex]));
   
    ageCheck(row, row.cells[ageIndex]);
  }
}
