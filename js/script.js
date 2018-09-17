console.log("Sanity Check");


document.querySelector('.red').addEventListener('click',turnRed)

function turnRed(){
  this.style.backgroundColor = "red";
  console.log('Button pressed');
  var para = document.createElement("P");
  var t = document.createTextNode("This is a new p tag");
  para.appendChild(t);
  document.getElementById("add").appendChild(para)
}
