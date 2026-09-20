//your JS code here. If required.
const sizeInfo = document.querySelector("#sizeInfo");

function updateSize() {
    const h1 = document.createElement("h1");

    h1.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

    sizeInfo.innerHTML = "";
    sizeInfo.appendChild(h1);
}

window.addEventListener("resize", updateSize);

updateSize();