let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-count");

for(let i = 0; i < rows; i++){
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class","address-col")
    addressCol.innerText = i + 1;
    addressColCont.appendChild(addressCol);
}

for(let i = 0; i < cols; i++){
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row");
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRowCont.appendChild(addressRow);
}

for(let i = 0; i < rows; i++) {
    let rowCont = document.createElement("div");

    for(let j = 0; j< cols; j++) {

        let cell = document.createElement("div");
        cell.setAttribute("class","cell");
        rowCont.appendChild(cell);
    }
    cellsCont.appendChild(rowCont);
}