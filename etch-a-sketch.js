const gridContainer = document.querySelector(".grid");
const button = document.querySelector("button");
let input = 16;

createNewGrid = (input) => {
    document.documentElement.style.setProperty('--rowNum', input);
    for(let i = 0; i<input*input; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-element");
        gridDiv.addEventListener("mouseenter", () => {
            gridDiv.style.backgroundColor = "black";
        })
        console.log("input", input);
        gridContainer.append(gridDiv);
    }
}

button.addEventListener("click", () => {
    input = prompt("enter the new grid dimensions");
    createNewGrid(input);
})


console.log("inputOut", input);

for(let i = 0; i<input*input; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-element");
    gridDiv.addEventListener("mouseenter", () => {
        gridDiv.style.backgroundColor = "black";
    })
    console.log("input", input);
    gridContainer.append(gridDiv);
}

