let firstName = "Nikolay";
let surName = "Patonov";
let fullName = firstName.concat(" ", surName);
console.log(fullName);

var subst = fullName.slice(8, 13);
console.log(subst);

let newName = "Nikolaos";
fullName = fullName.replace("Nikolay", newName);
console.log(fullName);