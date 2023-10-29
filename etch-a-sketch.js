const gridContainer = document.querySelector(".grid");
const button = document.querySelector("button");
let input = 16;

random_rgba = () => {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

createNewGrid = (input) => {
    if(input < 16){
        input = 16;
    }
    document.documentElement.style.setProperty('--rowNum', input);
    let child = gridContainer.lastElementChild;
    while(child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    } 
    for(let i = 0; i<input*input; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-element");
        gridDiv.addEventListener("mouseenter", () => {
            gridDiv.style.backgroundColor = "black";
        })
        gridContainer.append(gridDiv);
    }
}

button.addEventListener("click", () => {
    input = prompt("Enter the new grid dimensions");
    createNewGrid(input);
})


for(let i = 0; i<input*input; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-element");
    gridDiv.addEventListener("mouseenter", () => {
        gridDiv.style.backgroundColor = random_rgba();
    })
    gridContainer.append(gridDiv);
}

