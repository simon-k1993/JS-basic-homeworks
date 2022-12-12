function calculateYourDogYears(humanOrDog, numberOfYears) {
  if (humanOrDog === "D") {
    let resultDogYearsToHumans = numberOfYears * 7;
    return (
      value + " dog years equals to " + resultDogYearsToHumans + " human years"
    );
  } else if (humanOrDog === "H") {
    let resultHumanYearsToDog = numberOfYears / 7;
    return (
      value + " human years equals to " + resultHumanYearsToDog + " dog years"
    );
  }
}

let type = prompt(
  "Is it human or dog years? Enter D for dog years to human years, or H for human years to dog years!"
);
let value = parseInt(prompt("Number of years you want to convert!"));
console.log(`${calculateYourDogYears(type, value)}`);
