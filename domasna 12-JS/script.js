let header = document.getElementById("myTitle");

console.log(header.innerText);
header.innerText = "Is it really a cool page?";

let paragraph = (document.getElementsByClassName("paragraph")[0].innerText =
  "It's not that easy!");

let paragraph1 = (document.getElementsByClassName("paragraph")[1].innerText =
  "Really it takes a lot of time!");

let text = document.querySelector("text");
text.innerText = "It's about hardwork!";

let myDiv = document.getElementsByTagName("div")[2];

let h1 = myDiv.firstElementChild;
let h3 = myDiv.lastElementChild;

h1.innerText = "It's changed!";
h3.innerText = "And also this!";
