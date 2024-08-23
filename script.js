let bulb = document.getElementById("bulb");
let cat  = document.getElementById("cat");
let text = document.getElementById("switch-text");
function switchOn(){
  bulb.src = "./images/bulb-go-on-img.png";
  cat.src = "./images/cat-img.png";
  text.textContent = 'Switched-ON';
 text.style.backgroundColor = "none";
 text.style.color = "silver";
}
function switchOff(){
  bulb.src = "./images/bulb-go-off-img.png";
  cat.src = "./images/cat-eyes-img.png";
  text.textContent = 'Switched-OFF';
  text.style.backgroundColor = "#000";
  text.style.color = "#fff";
}