let admin;
let name = "Джон";

admin = name;

console.log(admin);

let house = {
    city: "Минск",
    address: "ул.Короля,7"
}

console.log(house.city);
console.log(house.address);

let user = {
}

user.name = "John"
user.surname = "Smith"

console.log(user);

user.name = "Pete"


delete user.name;


console.log(user);

let musiс = ["Джаз", "Блюз"];

console.log(musiс);


musiс.push("Рок-н-ролл");

console.log(musiс);

console.log( musiс.length );

musiс[Math.floor((musiс.length - 1) / 2)] = "Классика";

console.log( musiс.pop() );

musiс.unshift("Рэп", "Регги");

console.log(musiс);


// function

// let result;

// a = 2;
// b = 3;

// if (a + b < 4) {
// result = "Мало";
// } else {
// result = "Много";
// }
// console.log(result);

let result;
a = 2;
b = 3;

result = (a + b < 4) ? 'Мало' : 'Много';

console.log(result);



let login = "Сотрудник";

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

console.log(message);



// function min (a,b) {


//   if (a <= b) {
//     return a;
//     } else  {
//     return b;
//     }



// }

// console.log(min (2,2));
// console.log(min (4,3));
// console.log(min (-8,4));


function min (a,b) {

  return a <= b ? a : b;

}

console.log(min (2,2));
console.log(min (4,3));
console.log(min (-8,4));


function pow (x,n) {

  return Math.pow (x,n)

}

console.log(pow(3,2))












