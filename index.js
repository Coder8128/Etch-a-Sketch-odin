const sect = document.querySelector(".container");
// const div = document.createElement("div");
// div.className = "gridBlock";

// sect.appendChild(div);
let i = 0;
while (i < 256) {
    const div = document.createElement("div");
    div.className = "gridBlock";
    sect.appendChild(div);
    console.log("1")
    i++;
}

let div2 = document.querySelector("gridBlock");

div2.addEventListener("mouseover", (event) => {
    console.log(event.target)
})