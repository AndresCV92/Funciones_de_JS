
const cambiarColor = (pintar) => {
    pintar.style.backgroundColor = "black";

}


const blueBox = document.getElementById("blueBox");
const redBox = document.getElementById("redBox");
const greenBox = document.getElementById("greenBox");
const yellowBox = document.getElementById("yellowBox");

blueBox.addEventListener("click", () => cambiarColor(blueBox));
redBox.addEventListener("click", () => cambiarColor(redBox));
greenBox.addEventListener("click", () => cambiarColor(greenBox));
yellowBox.addEventListener("click", () => cambiarColor(yellowBox));

