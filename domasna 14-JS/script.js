// let recipeName = document.getElementById("nameOfRecipe");
// recipeName.innerText = "Peanut Butter Cookies!";

// let numberOfIngrediants = document.getElementById("numberOfIngrediants");
// numberOfIngrediants.innerText =
//   "We will need only 3 ingrediants for this recipe!";

// let ingrediants = ["Peanut butter", "Sugar", "Eggs"];

// let myListOfIngrediants = document.getElementById("listOfIngrediants");

// for (let ingrediant of ingrediants) {
//   myListOfIngrediants.innerHTML += `<li>${ingrediant}</li>`;
// }

let userInput = prompt("Enter the name of the recipe that you wish to make!");

let recipeName = document.getElementById("nameOfRecipe");
recipeName.innerText = `${userInput}`;

let enterNumber = parseInt(prompt("Enter number of ingredients"));
let numberOfIngredients = document.getElementById("numberOfIngredients");
numberOfIngredients.innerText = `We will need only ${enterNumber} ingredients for this recipe!`;

let ingridientNumber = [];
for (let i = 0; i < enterNumber; i++) {
  ingridientNumber[i] = prompt("Enter your ingredient");
}
let ingredients = [];

for (let i = 0; i < enterNumber; i++) {
  ingredients.push(ingridientNumber[i]);
}

let myListOfIngredients = document.getElementById("listOfIngredients");

for (let ingredient of ingredients) {
  myListOfIngredients.innerHTML += `<li>${ingredient}</li>`;
}

function makeTableForRecipe() {
  let myTable = document.getElementById("myTable");
  let table = document.createElement("table");

  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  let tr2 = document.createElement("tr");
  let tr2text = document.createTextNode(`${userInput}`);

  let name = document.createElement("td");
  let nameText = document.createTextNode("Name of recipe");
  let name1 = document.createElement("td");
  name1.appendChild(tr2text);
  name.appendChild(nameText);
  tr2.appendChild(name);
  tr2.appendChild(name1);
  let tr3 = document.createElement("tr");
  let tr3text = document.createTextNode(`${enterNumber}`);

  let number = document.createElement("td");
  let numberText = document.createTextNode("Number of ingredients");

  let number1 = document.createElement("td");
  number1.appendChild(tr3text);
  number.appendChild(numberText);
  tr3.appendChild(number);
  tr3.appendChild(number1);

  tableBody.appendChild(tr2);
  tableBody.appendChild(tr3);

  name.style.borderWidth = "1px";
  name.style.borderColor = "black";
  name.style.borderStyle = "solid";

  name1.style.borderWidth = "1px";
  name1.style.borderColor = "black";
  name1.style.borderStyle = "solid";

  number.style.borderWidth = "1px";
  number.style.borderColor = "black";
  number.style.borderStyle = "solid";

  number1.style.borderWidth = "1px";
  number1.style.borderColor = "black";
  number1.style.borderStyle = "solid";

  let a = 1;
  for (let i = 0; i < enterNumber; i++) {
    let food = document.createElement("td");
    let foodText = document.createTextNode("Ingredient" + a);
    let food1 = document.createElement("td");
    let food1Text = document.createTextNode(ingridientNumber[i]);

    let foodRow = document.createElement("tr");
    a++;

    food.appendChild(foodText);
    food1.appendChild(food1Text);
    foodRow.appendChild(food);
    foodRow.appendChild(food1);

    tableBody.appendChild(foodRow);

    food.style.borderWidth = "1px";
    food.style.borderColor = "black";
    food.style.borderStyle = "solid";

    food1.style.borderWidth = "1px";
    food1.style.borderColor = "black";
    food1.style.borderStyle = "solid";
  }
  myTable.appendChild(table);

  table.style.borderWidth = "1px";
  table.style.borderColor = "black";
  table.style.borderStyle = "solid";
}

makeTableForRecipe();
