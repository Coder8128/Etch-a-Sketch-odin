const sect = document.querySelector(".container");
// const div = document.createElement("div");
// div.className = "gridBlock";

// sect.appendChild(div);
let i = 0;
while (i < 256) {
    const div = document.createElement("div");
    div.className = "gridBlock";
    div.addEventListener("mouseover", (event) => {
        console.log(event);
        div.classList.add("hover");
    });

    sect.appendChild(div);
    console.log("1")
    i++;
}