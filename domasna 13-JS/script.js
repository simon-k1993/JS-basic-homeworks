let arrayOfNumbers = [1, 2, 3, 4, 5];

let list = document.getElementById("myList");

arrayOfNumbers.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

function sumOfNumbersFromArray(number) {
  let sumFromNumbersArray = 0;

  for (i = 0; i < arrayOfNumbers.length; i++) {
    sumFromNumbersArray += arrayOfNumbers[i];
  }
  document.getElementsByClassName(
    "mySum"
  )[0].innerHTML = `The sum of the numbers in our array is: ${sumFromNumbersArray}`;
}

sumOfNumbersFromArray(arrayOfNumbers);

function sumOfThreeNumbers(numbers) {
  let sumOfThreeNumbers = 0;
  let number1 = arrayOfNumbers[1];
  let number2 = arrayOfNumbers[3];
  let number3 = arrayOfNumbers[4];
  for (i = 0; i < arrayOfNumbers.length; i++) {
    sumOfThreeNumbers = number1 + number2 + number3;
  }
  document.getElementsByClassName(
    "mySum"
  )[1].innerHTML = `${number1} + ${number2} + ${number3} = ${sumOfThreeNumbers}`;
}

sumOfThreeNumbers(arrayOfNumbers);
