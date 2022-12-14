let names = ["Lebron ", "Kevin ", "Stephen "];
let surnames = ["James", "Durant", "Curry"];

function namesSurnames(names, surnames) {
  let fullName = [];

  let a = 1;

  for (i = 0; i < names.length; i++) {
    fullName[i] = `${a}.` + names[i] + surnames[i];

    a++;
  }
  console.log(fullName);
}

namesSurnames(names, surnames);
