var numberOfPhones = 30;

var phonesPrice = 119.95;

var taxRate = 5;

var onePhoneAfterTax = phonesPrice + (phonesPrice * taxRate) / 100;

var priceForThirtyPhones = onePhoneAfterTax * numberOfPhones;

console.log(
  `${numberOfPhones} phones after tax cost ${priceForThirtyPhones} USD`
);
