const isAvailable = (row) => {

  if (row.cells[statusIndex].hasAttribute('data-available')) {

    row.cells[statusIndex].getAttribute('data-available') === "true" ? row.classList.add('available') : row.classList.add('unavailable');
    
  } else {

    row.hidden = true;

  }
}

const maleOrFemale = (row) => row.cells[genderIndex].innerText === `m` ? row.classList.add('male') : row.classList.add('female');

const ageCheck = (row) => {if (row.cells[ageIndex].innerText < 18) {row.style="text-decoration: line-through";}}

const ageIndex = 1;
const genderIndex = 2;
const statusIndex = 3;

function highlight(table) {
  
  for (let i = 1; i < table.rows.length; i += 1){
    const row = table.rows[i];
    
    isAvailable(row);
    maleOrFemale(row);
    ageCheck(row);
    
  }
}
