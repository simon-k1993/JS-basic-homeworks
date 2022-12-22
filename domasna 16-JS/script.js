function animalPlanet() {
  let name;
  let kind;

  name = document.getElementById("name").value;
  kind = document.getElementById("kind").value;

  function Animals(nameUser, kindUser) {
    this.name = nameUser;
    this.kind = kindUser;

    this.speak = function () {
      return `${nameUser} the ${kindUser} says: Merry Christmas and Happy New Year!!!`;
    };
  }
  let myAnimal = new Animals(name, kind);

  console.log(myAnimal);
  console.log(myAnimal.speak());

  let name1 = document.getElementById("paragraph");
  name1.innerHTML = "Name: " + myAnimal.name;

  let kind1 = document.getElementById("paragraph1");
  kind1.innerHTML = "Kind: " + myAnimal.kind;

  let speak = document.getElementById("paragraph2");
  speak.innerHTML = myAnimal.speak();
}
