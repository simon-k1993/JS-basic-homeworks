function sumOfNumbers(number) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(`The sum of the numbers in the array is: ${sum}`);
}

let array = [1, 5, 7, 8, 6];
sumOfNumbers(array);

function validateNumber(validation) {
  for (i = 0; i < array1.length; i++) {
    if (!isNaN(validation[i])) {
      console.log(validation[i] + " is a number");
    } else {
      console.log("ERROR!!! This is not a number");
    }
  }
}

let array1 = [5, 4, 3, "simon", 8, "sun"];
validateNumber(array1);
