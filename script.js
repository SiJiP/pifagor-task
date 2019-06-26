(function(){

let container = document.querySelector('#container');

for(let i = 1; i < 10; i++){
    let divRow = document.createElement('div');
    divRow.className = "row"
    for(let j = 1; j < 10; j++){
        let divCell =  document.createElement('div');
        divCell.innerText = j * i;
        let $class = (j === i) ? divCell.className = 'cell main-cell' : 'cell';
        $class = (j < i) ? divCell.className = 'cell under-cell' : $class;
        $class = (j > i) ? divCell.className = 'cell over-cell' :  $class;
        divRow.appendChild(divCell);
    }
    container.appendChild(divRow);
}


let container2 = document.querySelector('#container2');

for(let i = 1; i < 10; i++){
    let divRow = document.createElement('div');
    divRow.className = "row"
    for(let j = 1; j < 10; j++){
        let divCell =  document.createElement('div');
        divCell.innerText = j * i;
        ((j * i) % 2 == 0) ? divCell.className = 'cell under-cell' : divCell.className = "cell over-cell";
        divRow.appendChild(divCell);
    }
    container2.appendChild(divRow);
}

})()