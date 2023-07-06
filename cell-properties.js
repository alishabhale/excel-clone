let sheetDB = [];

for(let i = 0; i < rows; i++){
    let sheetRow = [];

    for(let j= 0; j < cols; j++) {
        let cellProp = {
            bold : false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "monoscope",
            fontSize: "14",
            fontColor: "#000000",
            BGcolor:  "#000000",
        }
        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline")
let fontSize = document.querySelector(".font-size-prop")
let fontFamily = document.querySelector(".font-family-prop")
let fontColor = document.querySelector(".font-color-prop")
let BGcolor = document.querySelector(".BGcolor-prop")
let alignment = document.querySelector(".alignment")
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

// let addressBar = document.querySelector(".address-bar");

// Application two-way binding 
// Attach property listeners
italic.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.italic = !cellProp.italic;
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
})

underline.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.underline = !cellProp.underline;
    cell.style.textDecoration = cellProp.underline ? "underline" : "none";
    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
})

fontSize.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.fontSize = fontSize.value;
    cell.style.fontSize = cellProp.fontSize + "px";
    fontSize.value = cellProp.value;
})

fontFamily.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.fontFamily = fontFamily.value;
    cell.style.fontFamily = cellProp.fontFamily;
    fontFamily.value = cellProp.value;
})

fontColor.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.fontColor = fontColor.value;
    cell.style.color = cellProp.fontColor;
    fontFamily.value = cellProp.fontColor;
})

BGcolor.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.BGcolor = BGcolor.value;
    cell.style.backgroundColor = cellProp.BGcolor;
    BGcolor.value = cellProp.BGcolor;
})



bold.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activecell(address);

    cellProp.bold = !cellProp.bold;
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
})

function activecell(address){
   let [rid, cid] =  decodeRIDCIDFromAddress(address);  // Array destructuring
   //Access cell and the storage object
   let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`)
   let cellProp = sheetDB[rid][cid];
   return [cell,cellProp];
}

function decodeRIDCIDFromAddress (address){
    let rid = Number(address.slice(1) - 1);
    let cid = Number(address.charCodeAt(0)) - 65;
    return [rid, cid];
}