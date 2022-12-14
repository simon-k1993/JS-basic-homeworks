let array = [1, 15, 3, 78, 55];

function summary(array) {
  let max = 0;
  let min = array[0];

  for (i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  console.log(`The number with the biggest value is: ${max}`);
  console.log(`The number with the lowest value is: ${min}`);
  console.log(
    `The sum of the numbers with the biggest and lowest value is: ${max + min}`
  );
}

summary(array);

let array1 = [1, 5, 17, 2, 3, "simon", 56, "sedc"];

function summary1(array1) {
  let max1 = 0;
  let min1 = array1[0];

  for (i = 0; i < array1.length; i++) {
    if (!isNaN(array1[i])) {
      for (i = 0; i < array1.length; i++) {
        if (max1 < array1[i]) {
          max1 = array1[i];
        }
        if (min1 > array1[i]) {
          min1 = array1[i];
        }
      }
    } else {
      continue;
    }
  }
  console.log(`The number with the biggest value from this array is ${max1}`);
  console.log(`The number with the lowest value from this array is: ${min1}`);
  console.log(
    `The sum of the numbers with the biggest and lowest value from the two arrays is: ${
      max1 + min1
    }`
  );
}
summary1(array1);
