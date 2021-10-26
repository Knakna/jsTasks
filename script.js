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





// WHILE:
let az = 0;
while (az <= 5) {
console.log(az);
az++;
}


// DO...WHILE:
let bz = 0;
do {
console.log(bz);
bz++;
} while (bz <= 5);


// FOR:
for (let cz = 0; cz <= 5; cz++) {
console.log(cz);
}



let numz = 0;
while (numz <3) {
console.log(`Число: ${numz}`);
numz++;
}


sum(2,3);

firstLoop:
for (let numzz = 0; numzz <2; numzz++) {
secondLoop:
for (let size = 0; size < 3; size++) {
console.log(size);
if (size == 1) break firstLoop;
}
}

sum(2,3);


// function sum(aa,bb) {
// var sum = aa + bb;
// console.log(`Ваша сумма: ${sum}`);
// }

// sum(2,3);


function sum(aa = 22, bb = 33) {
  var sum = aa + bb;
  console.log(`Ваша сумма: ${sum}`);
  }

  sum();

  sum(4,4);


  // Функции-колбэки
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);




// Возврат результата
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(`Сумма: ${funcRezult}`);


// function getSumm() {
// 	let numOne, numTwo;

// 	function getNumOne() {
// 		numOne = 1;
// 	}
// 	function getNumTwo() {
// 		numTwo = 2;
// 	}
// 	getNumOne();
// 	getNumTwo();

// 	let numSumm = numOne + numTwo;
// 	console.log(numSumm);
// }
// // getNumOne(); - yбудет не видна вне родительской
// getSumm();


function getSumm() {
	let summ = 1 + 5;
	console.log(summ);
};

let someVar = getSumm;

someVar();
getSumm();
// можем вызывать с помощью функции и переменной с круглыми скобками




'use strict'
if (2 > 1) {
	function getSumm() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();

// let getSumm;

// if (2 > 1) {
// 	getSumm = function () {
// 		let summ = 1 + 2;
// 		console.log(summ);
// 	};
// }
// getSumm();


function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
	// setTimeout(showMessage, 500, text, name);
}
// setInterval(showMessage, 500, 'Привет', 'Вася');
setTimeout(showMessage, 500, 'Привет', 'Вася');



function showName() {
	console.log('Василий!');
}
setTimeout(showName, 0);
console.log('Николай!');

let  showText ;
if(2>1){
    showText = function () {console.log("сообщение")
    }
}
showText()


let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne)

let value = '135.58px'
console.log(parseFloat(value))

let value1 = 58 + 'Фрилансер';
if (value1 !== NaN) {
  console.log('Результат выражения NaN')
}

console.log(Math.max(10, 58, 39, -150, 0))




let num = 58.858;
console.log(Math.floor(num))








