const sect = document.querySelector(".container");
// const div = document.createElement("div");
// div.className = "gridBlock";

// sect.appendChild(div);
createGrid(20);

function btnClick() {
    sect.innerHTML = '';

    let dimensions = prompt("Define grid size: ");
    dimensions > 100 ? dimensions = prompt("Please less than 100") : null

    if (dimensions < 100) {
        createGrid(dimensions);
    }
    console.log(dimensions);
}

function createGrid(num) {
    let i = 0;
    let x = num * num;

    while (i < num) {
        const divRow = document.createElement("div");
        divRow.className = "gridRow";
        sect.appendChild(divRow);

        for (let k = 0; k < num; k++) {
            const div = document.createElement("div");
            div.className = "gridBlock";
            div.addEventListener("mouseover", (event) => {
                console.log(event);
                div.classList.add("hover");
            });

            divRow.appendChild(div);
            console.log("count");
        }
        i++;
    }
}