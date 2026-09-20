//your JS code here. If required.
const sizeInfos = document.querySelector("#sizeInfo");

function updateSize() {

	const h1 = document.createElement("h1");
	h1.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
	sizeInfos.innerHTML = ""
	sizeInfos.appendChild(h1);
}
window.addEventListener("resize",updateSize);