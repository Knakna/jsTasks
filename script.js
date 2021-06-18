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

let result;

if (a + b < 4) {
result = "Мало";
} else {
result = "Много";
}









