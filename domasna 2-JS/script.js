let yearOfBirth = parseInt(prompt("Insert your year of birth"));

let chineseZodiacCalculator = (yearOfBirth - 4) % 12;

if (chineseZodiacCalculator == 0) {
  console.log("Your chinese zodiac sign is a Rat");
} else if (chineseZodiacCalculator == 1) {
  console.log("Your chinese zodiac sign is an Ox");
} else if (chineseZodiacCalculator == 2) {
  console.log("Your chinese zodiac sign is a Tiger");
} else if (chineseZodiacCalculator == 3) {
  console.log("Your chinese zodiac sign is a Rabbit");
} else if (chineseZodiacCalculator == 4) {
  console.log("Your chinese zodiac sign is a Dragon");
} else if (chineseZodiacCalculator == 5) {
  console.log("Your chinese zodiac sign is a Snake");
} else if (chineseZodiacCalculator == 6) {
  console.log("Your chinese zodiac sign is a Horse");
} else if (chineseZodiacCalculator == 7) {
  console.log("Your chinese zodiac sign is a Goat");
} else if (chineseZodiacCalculator == 8) {
  console.log("Your chinese zodiac sign is a Monkey");
} else if (chineseZodiacCalculator == 9) {
  console.log("Your chinese zodiac sign is a Rooster");
} else if (chineseZodiacCalculator == 10) {
  console.log("Your chinese zodiac sign is a Dog");
} else if (chineseZodiacCalculator == 11) {
  console.log("Your chinese zodiac sign is a Pig");
}

let yearOfBirthSwitch = parseInt(prompt("Insert the year you were born"));

let chineseZodiacCalculatorSwitch = (yearOfBirthSwitch - 4) % 12;

switch (chineseZodiacCalculatorSwitch) {
  case 0:
    console.log("Your chinese zodiac sign is a Rat");
    break;

  case 1:
    console.log("Your chinese zodiac sign is an Ox");
    break;

  case 2:
    console.log("Your chinese zodiac sign is a Tiger");
    break;

  case 3:
    console.log("Your chinese zodiac sign is a Rabbit");
    break;

  case 4:
    console.log("Your chinese zodiac sign is a Dragon");
    break;

  case 5:
    console.log("Your chinese zodiac sign is a Snake");
    break;

  case 6:
    console.log("Your chinese zodiac sign is a Horse");
    break;

  case 7:
    console.log("Your chinese zodiac sign is a Goat");
    break;

  case 8:
    console.log("Your chinese zodiac sign is a Monkey");
    break;

  case 9:
    console.log("Your chinese zodiac sign is a Rooster");
    break;

  case 10:
    console.log("Your chinese zodiac sign is a Dog");
    break;

  case 11:
    console.log("Your chinese zodiac sign is a Pig");
    break;
}
