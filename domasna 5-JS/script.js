function atmCash(cashIn$) {
  let Mybalance = 10000;
  if (cashIn$ <= 10000 && cashIn$ >= 0) {
    let balanceLeftIn$ = Mybalance - cashIn$;
    return "The money left in your bank account is " + balanceLeftIn$ + " $ !";
  } else if (cashIn$ > 10000) {
    return "Not enough money!!!";
  } else {
    return "Error!!! Enter a positive number!";
  }
}

let type = parseInt(
  prompt("Enter the ammount of cash you wish to withdraw from your account!")
);
console.log(`${atmCash(type)}`);
