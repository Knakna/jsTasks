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

console.log(musiс.length);

musiс[Math.floor((musiс.length - 1) / 2)] = "Классика";

console.log(musiс.pop());

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


function min(a, b) {

	return a <= b ? a : b;

}

console.log(min(2, 2));
console.log(min(4, 3));
console.log(min(-8, 4));


function pow(x, n) {

	return Math.pow(x, n)

}

console.log(pow(3, 2))





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
while (numz < 3) {
	console.log(`Число: ${numz}`);
	numz++;
}


sum(2, 3);

firstLoop:
for (let numzz = 0; numzz < 2; numzz++) {
	secondLoop:
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) break firstLoop;
	}
}

sum(2, 3);


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

sum(4, 4);


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


// function showMessage(text, name) {
// 	console.log(`${text}, ${name}!`);
// 	// setTimeout(showMessage, 500, text, name);
// }
// // setInterval(showMessage, 500, 'Привет', 'Вася');
// setTimeout(showMessage, 500, 'Привет', 'Вася');



// function showName() {
// 	console.log('Василий!');
// }
// setTimeout(showName, 0);
// console.log('Николай!');

let showText;
if (2 > 1) {
	showText = function () {
		console.log("сообщение")
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






let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
// Ожидаем получить Привет! Я фрилансер
console.log(text);




// Получаем символы строки

let text1 = "Привет!";
let firstSymbol = text1[0];
let lasttSymbol = text1[text1.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);


for (const char of text1) {
	console.log(char);
}

let text2 = 'фрилансер';
let symbol5 = text2[5];
console.log(symbol5);


let text3 = 123 + "456";
console.log(text3);


let text4 = 'фрилансер';
console.log(text4.toUpperCase());

let text5 = 'фрилансер';
console.log(text5.slice(3, 6));

let text6 = 'фрилансер';
console.log(text6.includes('лан', 4));


// Метод str.indexOf(substr, pos)
/*
Он ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений.
*/

let text7 = "Привет!";
console.log(text7.indexOf('рив'));
console.log(text7.indexOf('рив', 3));


// Методы includes, startsWith, endsWith
/*
Более современный метод str.includes(substr, pos) возвращает true,
если в строке есть искомая подстрока, либо false, если нет.
*/

let text8 = "Привет!";
console.log(text8.includes('рив'));
console.log(text8.includes('рив', 3));

console.log(text8.startsWith('рив'));
console.log(text8.endsWith('!'));


// Регистр имеет значение!

let text9 = "Привет!";
let searchText9 = "пР";

console.log(text9.toLowerCase().includes(searchText9.toLowerCase()));


/*
В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденой подстроки.
В остальных случаях удобнее использовать includes
*/


let arrOne1 = ['Ваня', 'Иштван', 'Оля',];
console.log(arrOne1);
console.log(arrOne1.length);



arrOne1.length = 0;
console.log(arrOne1);

// Таким образом, самый простой способ
// очистить массив – это arrOne.length = 0;


/*
Напомню что массив является объектом и, следовательно,
ведёт себя как объект. Например, копируется по ссылке:
*/

let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);





// / Удаление/добавление/изменение конкретных элементов
// empty  при  delete


let arr1 = ['Ваня', 'Иштван', 'Оля',];

delete arr1[1];
console.log(arr1);
console.log(arr1[1]);
console.log(arr1.length);


// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])


// Удаляем элемент
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);

// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);

// Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);


// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива
let arrOne2 = ['Ваня', 'Иштван', 'Оля',];

// Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwo2 = arrOne2.slice(1, 2);
console.log(arrTwo2);

// Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThree2 = arrOne2.slice(-2, -1);
console.log(arrThree2);

// Копируем весь массив
let arrFour2 = arrOne2.slice();
console.log(arrFour2);


// Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

let arrOne3 = ['Ваня', 'Иштван', 'Оля',];
let arrTwo3 = arrOne3.concat('Петя');
console.log(arrTwo3);



// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// алналоги строковым методам

// 1. arr.indexOf(item, from) ищет item, начиная с индекса from,
// 	и возвращает индекс, на котором был найден искомый
// 	элемент, в противном случае - 1.
// 2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// 3. arr.includes(item, from) – ищет item, начиная с индекса from,
// 	и возвращает true, если поиск успешен.



let arr11 = ['Ваня', 'Иштван', 'Оля',];

// indexOf
console.log(arr11.indexOf('Иштван'));
console.log(arr11.indexOf('Вася'));
console.log(arr11.indexOf('Иштван', 2));

// includes
console.log(arr11.includes('Иштван'));
console.log(arr11.includes('Вася'));
console.log(arr11.includes('Иштван', 2));



// find и findIndex
// поиск в массиве объектов с пределённым условием

/*
// Синтаксис
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
*/

let arr12 = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr12.find(function (item, index, array) {
	return item.age === 18;
});

//let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);


//findIndex
let resultTwo = arr12.findIndex(item => item.age === 18);
console.log(resultTwo);



// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.

let results = arr.filter(function (item, index, array) {
	// если true - элемент добавляется к результату, и перебор продолжается
	// возвращается пустой массив в случае, если ничего не найдено
});

let arr55 = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let result55 = arr55.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(result55);


// Сортировка массивов

// Сотритовка слов
let arrOne15 = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne15.sort());

// Сотритовка чисел
let arrTwo15 = [8, 22, 1,];
console.log(arrTwo15.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".

console.log("8" > "22");

//--------

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.

/*
// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// Функция сортировки

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

	//return a - b
}

//console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.sort(compareNumeric));
*/

//--------

/*
// Метод reverse
// меняет порядок элементов в массиве на обратный.

let arrOne = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOne.reverse());
*/


let arr17 = [9, 2, 8,];
let reduceValue = arr17.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});





// WINDOW
const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidth}px`);



console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}



console.log(navigator.platform);


//Получаем URL
console.log(location.href);
//Меняем URL
// location.href = "https://google.by";



//Alert
// alert("Привет!");

//Сonfirm
// const confirmResult = confirm("Хочешь научиться верстать?");
// console.log(confirmResult);

//Prompt
// const promptResult = prompt("Кто ты по жизни?");
// console.log(promptResult);


/*
Самые верхние элементы дерева
доступны как свойства объекта document
*/

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);


// / Получаем объект body
// const bodyElement = document.body;

// Первый и последний дочерние элементы
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);

/*
В документе, возможено, есть ещё «какой-то HTML-код»,
но на момент выполнения скрипта браузер ещё
до него не дошёл.
Поэтому следует размещать скрипт в самом конце
документа
*/



//Коллекция childNodes содержит список всех детей,
//включая текстовые узлы.
const childNodes = bodyElement.childNodes;
console.log(childNodes);

//Для проверки наличия дочерних узлов
//существует также специальная функция hasChildNodes()
console.log(bodyElement.hasChildNodes());




/*
Как мы уже видели,
childNodes похож на массив. На самом деле это не массив,
а коллекция – особый перебираемый объект - псевдомассив.

Отличия от массивов:
1.Для перебора коллекции мы можем использовать for..of:
2.Методы массивов не будут работать, потому что
коллекция – это не массив
*/

// /Перебор коллекции
for (let node of childNodes) {
	console.log(node); // покажет все узлы из коллекции
}



// "Живые" коллекции
/*
Почти все DOM-коллекции, за небольшим исключением, "живые".
Другими словами, они отражают текущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим
узлы в DOM, то они появятся в сохранённой коллекции автоматически.

*/

/*
DOM-коллекции, и даже более – все навигационные свойства,
перечисленные далее, доступны только для чтения.
Мы не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = ....
Для изменения DOM требуются другие методы.
*/

// Соседние и родительский узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

/*
Навигационные свойства, описанные выше, относятся
ко всем узлам в документе.
В частности, в childNodes находятся и текстовые узлы и
узлы-элементы и узлы-комментарии, если они есть.
*/

// Получаем коллекцию всех дочерних узлов
const childNodes1 = bodyElement.childNodes;
console.log(childNodes1);









// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
Но для большинства задач текстовые узлы и
узлы-комментарии нам не нужны. Мы хотим манипулировать
узлами-элементами, которые представляют собой теги и
формируют структуру страницы.
*/

// Получаем коллекцию всех дочерних элементов

const bodyСhildren = bodyElement.children;
console.log(bodyСhildren);


// Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);

// Соседние и родительский элементы
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);





// / Поиск произвольного элемента

// querySelectorAll - статичная коллекция

// // Поиск по селектору класса
// const elemsOne = document.querySelectorAll('.lesson__list');
// console.log(elemsOne);

// // Поиск по селектору тега
// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo);

// // Поиск по смешанному селектору тега и класса
// const elemsThree =
// 	document.querySelectorAll('li.lesson__item-list');
// console.log(elemsThree);

// // Поиск по тегу первого уровня вложенности
// const elemsFour =
// 	document.querySelectorAll('.lesson__list>li');
// console.log(elemsFour);

// // Поиск по нескольким классам
// const elemsFive =
// 	document.querySelectorAll('.lesson__list, .lesson__text');
// console.log(elemsFive);

// // Поиск по вложенным классам
// const elemsSix =
// 	document.querySelectorAll('.lesson__list .lesson__text');
// console.log(elemsSix);

// // Поиск по ID
// const elemsSeven =
// 	document.querySelectorAll('#listItem');
// console.log(elemsSeven);

// // Поиск по атрибуту
// const elemsEight =
// 	document.querySelectorAll('[data-item]');
// console.log(elemsEight);

// // Поиск по атрибуту со значением
// const elemsNine =
// 	document.querySelectorAll('[data-item="85"]');
// console.log(elemsNine);


// / Получение конкретного элемента коллекции
//const elems = document.querySelectorAll('li');
//console.log(elems[2]);

/*
for (const item of elems) {
	console.log(item);
}
*/
/*
elems.forEach(item => {
	console.log(item);
});
*/


//elem.querySelector(CSS);
/*
Возвращает первый элемент внутри elem, соответствующий
данному CSS-селектору.
*/
/*
//const lessonList = document.querySelectorAll('.lesson__list')[0];
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);
*/



//document.getElementById(ID)
/*
Если у элемента есть атрибут id,
то мы можем получить его вызовом document.getElementById(id),
где бы он ни находился.
*/
/*
const elem = document.getElementById('listItem');
console.log(elem);
*/
/*
1. id - уникален
2. Поиск полько внутри document.
*/

//-------

/*
elem.getElementsByTagName(tag)
ищет элементы с данным тегом и возвращает их
коллекцию.Передав "*" вместо тега, можно получить всех потомков.
*/
/*
const elems = document.getElementsByTagName('li');
console.log(elems);
*/
//-------

/*
elem.getElementsByClassName(className)
возвращает элементы, которые имеют данный CSS - класс.
*/
/*
const elems = document.getElementsByClassName('lesson__item-list');
console.log(elems);
*/
//-------

//document.getElementById(ID) и elem.getElementsBy*
/*
На данный момент, они используются редко,
так как querySelectorAll может их заменить.
Но отличия все же есть!
*/

//getElementsBy*
// ВНИМАНИЕ - getElementsBy.. а не getElementBy..

/*
document.getElementsByName(name) возвращает элементы с
заданным атрибутом name.Очень редко используется.
Поиск полько внутри document.
*/

const elems = document.getElementsByName('list');
console.log(elems);




// /---------------------!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!

// Живая статическа коллекции

// Получаем статическую коллекцию
const listStatic = document.querySelectorAll('.list');

// Получаем "живую" коллекцию
const listLive = document.getElementsByClassName('list');

console.log(listStatic);
console.log(listLive);



// Создаем новый HTML-объект.
const lessonList = document.querySelector('.list');
lessonList.insertAdjacentHTML(
	"beforeend",
	'<li class="list">Новый пункт</li>'
);

// после этого статическая и живая коллекция будет разная












//closest
/*
Метод elem.closest(css) ищет ближайшего предка,
который соответствует CSS - селектору.Сам элемент
также включается в поиск.

Предки элемента это родитель, родитель родителя,
его родитель и так далее.Вместе они образуют цепочку
иерархии от элемента до вершины.

Другими словами, метод closest поднимается вверх от
элемента и проверяет каждого из родителей.Если он
соответствует селектору, поиск прекращается. Метод возвращает
либо предка, либо null, если такой элемент не найден.

Напомню свойство parentElement возвращает только
непосредственного родителя элемента
*/

const elem = document.querySelector('.list');
const parentList = elem.closest('.lesson__text');
console.log(parentList);

/*
Очень полезный метод, часто используется для проверки
на существование того или иного родителя, либо для изменения
родителя конкретного элемента
*/

// Проверка matches
/*
ничего не ищет, а проверяет, удовлетворяет ли
элемент CSS-селектору, и возвращает true или false.
*/

const elems3 = document.querySelectorAll('.list');
for (let elem of elems3) {
	if (elem.matches('[class$="list--red"]')) {
		console.log('Крассный');
	} else if (elem.matches('[class$="list"]')) {
		console.log('Синий');
	}
}





const text66 = document.querySelector('.lesson');
const list = text66.nextElementSibling;
console.log(list);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =================================================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Изменение документа


// Cодержимое элемента innerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

// Перезаписываем содержимое объекта
textElement.innerHTML = `Живи, а работай в свободное время!`;

// Дописываем содержимое объекта
textElement.innerHTML =
	`<p>${textElementContent}</p> <p>Живи, а работай в
	<span class="list">свободное</span> время!</p>`;

console.log(textElement.innerHTML);




// / Cодержимое элемента целиком outerHTML

// Получаем объект
const textElement1 = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
// const textElementContent1 = textElement1.outerHTML;
// console.log(textElementContent1);


// textElement1.outerHTML = `<p>Живи, а работай в
// 	<span class="yellow">свободное</span> время!</p>`;

// console.log(textElement1.outerHTML);






// / Просто текст элемента textContent

// Получаем объект
const textElement3 = document.querySelector('.lesson__text');
const textElementContent3 = textElement3.textContent;
console.log(textElementContent3);

/*
Полезная возможность textContent - записывать
текст «безопасным способом».
*/
/*
textElement.textContent = `<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.textContent);
*/
/*
Мы не хотим, чтобы на сайте появлялся произвольный HTML-код.
Присваивание через textContent – один из способов от
этого защититься.
*/



// data.
// Cодержимое текстового узла/комментария

// Получаем объект
const textElement4 = document.querySelector('.lesson__text');
const getComment4 = textElement4.nextSibling;

console.log(getComment4);
console.log(getComment4.data);


// Изменение текстового узла/комментария
getComment4.data = 'Привет';
console.log(getComment4.data);




// / Создание элементов и узлов.

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;
console.log(newElement);

// Создание нового текстового узла
const newText = document.createTextNode('Привет!');
console.log(newText);

/*
Созданные объекты находятся в константах,
но не являются частью документа
*/




// / Методы вставки


// Получаем объект
const textElement5 = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement1 = document.createElement('div');
// Наполняем новый элемент
newElement1.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;


// Вставляем новый элемент...

//...перед объектом
// textElement5.before(newElement1);
//...после объекта
// textElement5.after(newElement1);
// //...внутрь и в начало объекта
// textElement5.prepend(newElement1);
// //...внутрь и в конец объекта
// textElement5.append(newElement1);

// Вставка нескольких фрагментов сразу
// textElement5.append(newElement1, "Привет!");


// Можно вставлять строку
textElement.append(`Живи, а работай в
	<span class="yellow">свободное</span> время!`);

/*
Другими словами, строки вставляются безопасным способом,
как делает это textContent. Поэтому эти методы могут
использоваться только для вставки DOM-узлов или
текстовых фрагментов. А что, если мы хотим вставить
HTML именно "как HTML", со всеми тегами и прочим,
как это делает innerHTML?
*/



// insertAdjacentHTML/Text/Element

// Получаем объект
const textElement6 = document.querySelector('.lesson__text');

// Вставляем текст, HTML, элемент
textElement6.insertAdjacentHTML(
	'afterend',
	`<p>Живи, живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);

/*
"beforebegin" – вставить html непосредственно перед textElement,
"afterbegin" – вставить html в начало textElement,
"beforeend" – вставить html в конец textElement,
"afterend" – вставить html непосредственно после textElement.
*/





// / Перенос элемента

/*
Мы можем вставлять не только новые узлы,
но и переносить существующие.
Все методы вставки автоматически
удаляют узлы со старых мест.
*/

// Получаем объект
const lessonBlock = document.querySelector('.lesson');
// Получаем объект
const title = document.querySelector('h3');

// Переносим title в конец блока lessonBlock
lessonBlock.append(title);





// Клонирование узлов cloneNode

/*
Если нужен не перенос а именно копия элемента
*/

// // Получаем объект
const textElement22 = document.querySelector('.list--red');
// // Клонирование без дочерних элементов
// const cloneTextElement222 = textElement22.cloneNode();

// console.log(cloneTextElement222);

// // Глубокое клонирование вместе с содержимым
const cloneTextElement = textElement22.cloneNode(true);

// console.log(cloneTextElement);
// cloneTextElement.append(cloneTextElement);

const lessonBlock9 = document.querySelector('.lesson');
lessonBlock9.append(cloneTextElement);







// Удаление узлов

// Получаем объект
const textElement91 = document.querySelector('.yellow1');
// Удаляем объект
textElement91.remove();









//========================================================================================================================================================

// Стили и классы

// Управление классами
// Свойства className и classList

/*
Изменение класса является одним
из наиболее часто используемых действий в JavaScript.
*/


// Свойство className

// // Получаем элемент
// const element555 = document.querySelector('.list--red');

// // Получаем имена классов
// const elementClassNames1 = element555.className;
// console.log(elementClassNames1);

// // Перезаписываем имя класса
// element555.className = "red";
// console.log(element555);



//-----------------------------

// Свойство classList
/*
Специальный объект с методами для добавления/удаления
одного класса.
*/

// Получаем элемент
const element98 = document.querySelector('.list--red');


// Добавить класс
element98.classList.add('active');
// Удалить класс
element98.classList.remove('active');
// // Добавить класс, если его нет, а если есть удалить.
element98.classList.toggle('active');
// Проверка наличия класса, возвращает true/false.
element98.classList.contains('active');

console.log(element98);





const element89 = document.querySelector('.list');

// Добавляем класс
element89.classList.add('active');
// Проверяем наличие класса
if (element89.classList.contains('active')) {
	console.log(`У element есть класс active!`);
}

//classList является перебираемым, поэтому можно
//перечислить все классы при помощи for..of

for (let className of element89.classList) {
	console.log(className);
}




//---------------------------------------------------

// Управление стилями

// element.style
const element66 = document.querySelector('.lesson__title');

// Задаем стиль с помощью CSS свойства
element66.style.color = "blue";

// Для свойства из нескольких слов используется camelCase:
// margin-bottom
element66.style.margin = "30px";
// z-index
element66.style.zIndex = "10";
// и т.д.

// Каждое свойство пишется отдельно

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element66.style.marginBottom);

// Сброс стиля
element66.style.marginBottom = "";




//Полная перезапись стилей
//style.cssText

// Получаем элемент
const element44 = document.querySelector('.caption');
//Полная перезапись стилей
// style.cssText


element44.style.cssText = `
	margin-bottom: 30px;
	color:red;
	transform: rotate(-9deg);
`;







//Вычисленные стили. getComputedStyle(element, [pseudo])


// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element44.style.fontSize);

// Стиль элемента
const elementStyle44 = getComputedStyle(element44);
console.log(elementStyle44.fontSize);

// Стиль псевдоэлемента
// const elementBeforeStyle = getComputedStyle(element, "::before");
// console.log(elementBeforeStyle.backgroundColor);



// // Чтобы получить конкретное значение
// // Следует писать точное (полное) свойство

// // Получаем точное значение
console.log(elementStyle44.paddingLeft);
// // Получаем не предсказуемую запись
// console.log(elementStyle44.padding); // В FF <empty string>

// // Получаем элемент
const element33 = document.querySelector('.caption1');

// // Стиль элемента
const elementStyle33 = getComputedStyle(element33);

// //Только для чтения - нельзя присвоить
// elementStyle33.paddingLeft = "50px";








// Лайвхаки

// Получаем элемент
const element123 = document.querySelector('.caption2');

// Стиль элемента
const elementStyle123 = getComputedStyle(element123);
console.log(elementStyle123.paddingLeft);

//Получаем число
const paddingLeft = parseInt(elementStyle123.paddingLeft);
console.log(paddingLeft);


//Помним про единицы измерения
element123.style.paddingLeft = "10px";
console.log(element123.style.paddingLeft);



/*
Как мы уже поняли, из JS мы можем управлять как классами
так и стилями объекта.

Управлять классами – более приоритетный вариант по
сравнению со стилями.

Манипулировать свойством style следует только в том случае,
если классы нам помочь не могут. Например, при изменении
координатов объекта на лету.

Одним словом, если мы можем возложить решение
той или иной задачи на плечи CSS путем манипуляции с классами,
то так и следует сделать!
*/




// /========================================================================================================================================================

// Атрибуты и свойства

/*
У разных DOM-элементов могут быть разные свойства.
Например, у тега <a>, есть свойства, связанные со ссылками,
а у тега <input> – свойства, связанные с полем ввода и т.д.

В HTML у тегов могут быть атрибуты.
Когда браузер парсит HTML, чтобы создать
DOM-объекты для тегов, он распознаёт стандартные
атрибуты и создаёт DOM-свойства для них.

Каждый DOM-узел принадлежит соответствующему встроенному классу.
*/

const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link.href);
console.log(input.href);

console.log(input.value);
console.log(link.value);

//Получить список доступных свойств
console.dir(link);

//---------------------------

// Произвольные атрибуты

//Получаем элемент
const lessonText = document.querySelector('.lesson__text');

// //Проверяем наличие атрибута.
// lessonText.hasAttribute('name');
// //Получаем значение атрибута.
// lessonText.getAttribute('name');
// //Устанавливаем значение атрибута.
// lessonText.setAttribute('name', 'value');
// //Удаляем атрибут.
// lessonText.removeAttribute('name');


// Пример
// Устанавливаем значение атрибута
lessonText.setAttribute('some-attribute', 'some-value');
//Проверяем наличие атрибута
if (lessonText.hasAttribute('some-attribute')) {
	console.log('some-attribute существует!');
}


//------------------------------

// Синхронизация между атрибутами и свойствами

/*
Мы можем обратиться к тому или иному свойству через
методы доступа к атрибутам.
Когда стандартный атрибут изменяется, соответствующее
свойство автоматически обновляется.
Это работает и в обратную сторону (за некоторыми исключениями).
*/

//Получаем элемент
const input1 = document.querySelector('.lesson__input');

input.setAttribute('id', '123');
console.log(input1.id);

input1.id = "321";
console.log(input1.getAttribute('id'));


// НО

input.setAttribute('value', 'Привет!');
console.log(input.value);

input.value = "Как дела?";
console.log(input.getAttribute('value'));


//------------------------------

// Нестандартные атрибуты, dataset

/*
Мы уже использовали произвольные атрибуты,
но это рискованно.

Все атрибуты, начинающиеся с префикса «data-»,
зарезервированы для использования программистами.
Они доступны в свойстве dataset.
*/

//Получаем элемент
const lessonText2 = document.querySelector('.lesson__text');

//Получаем data-атрибут
console.log(lessonText2.dataset.size);

//Перезаписываем data-атрибут
lessonText2.dataset.size = "5810";
console.log(lessonText2.dataset.size);

// data-size-value
console.log(lessonText2.dataset.sizeValue);


//------------------------------

// Полезные свойства

const link1 = document.querySelector('.lesson__link');

//Получаем тег элемента
console.log(link.tagName);

//Скрыть/показать элемент
// link.hidden = true;
// console.log(link.hidden);

















// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Размеры окна браузера
// clientWidth и clientHeight

// Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//-----------

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth1 = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth1);
console.log(windowHeight);




// Ширина и высота документа
// включая прокрученную часть

let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);



// Получить кол-во прокрученных пикселей
// Только для чтения
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);



//---------------------------------
// Управление прокруткой страницы


// Метод scrollBy(x,y) прокручивает страницу относительно
// её текущего положения.

// function setScrollBy() {
// window.scrollBy(0, 250);
// const windowScrollTop = window.pageYOffset;
// console.log(windowScrollTop);
// }



// Метод scrollTo(pageX, pageY) прокручивает страницу
// на абсолютные координаты(pageX, pageY).
// тоже самое что и window.scroll()

function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		// smooth, instant,
		// либо auto; по умолчанию auto
		behavior: "smooth"
	});
}
// Опции не работают в Safari

setScrollTo();
setScrollToOptions();


/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху.У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem
появился внизу.Нижний край элемента будет совмещён с нижним краем окна.
*/

// function setScrollIntoView(top) {
// 	const lessonSelected = document.querySelector('.lesson__selected');
// 	lessonSelected.scrollIntoView(top);
// }

// function setScrollIntoViewOptions(top) {
// 	const lessonSelected = document.querySelector('.lesson__selected');
// 	lessonSelected.scrollIntoView({
// 		//"start", "center", "end" или "nearest". По умолчанию "center".
// 		block: "center",
// 		//"start", "center", "end" или "nearest". По умолчанию "nearest".
// 		inline: "nearest",
// 		// "auto" или "smooth". По умолчанию "auto".
// 		behavior: "smooth"
// 	});
// }
// Опции не работают в Safari

// Запретить прокрутку
// function setEnableDisableScroll() {
// 	//document.body.style.overflow = "hidden";
// 	document.body.classList.toggle('scroll-lock');
// }

/*
Для прокрутки страницы из JavaScript её DOM должен
быть полностью построен.
Например, если мы попытаемся прокрутить страницу
из скрипта в <head>, это не сработает.
*/


//========================================================================================================================================================
// Метрики элементов на странице

// Получаем объект
const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент
// относительно которого позицианирован наш объект
const elementOffsetParent = block.offsetParent;


/*
Это будет ближайший предок, который
удовлетворяет следующим условиям:

1. Является CSS-позиционированным
	(CSS-свойство position равно absolute, relative, fixed или sticky)
2. или теги <td>, <th>, <table>,
3. или <body>.
*/

console.log(elementOffsetParent);

/*
Cитуации, в которых offsetParent равно null:
1. Для скрытых элементов
	(с CSS - свойством display: none или когда его нет в документе).
2. Для элементов <body> и <html>.
3. Для элементов с position: fixed.
*/



// Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);

//========================================================================================================================================================

// Общие размеры объекта
// offsetWidth и offsetHeight

// Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

// Метрики для не показываемых элементов равны нулю.

//========================================================================================================================================================

// Отступы внутренней части элемента от внешней.
// clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);



// Размеры объекта без
// рамок и полосы прокрутки
// clientWidth и clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

// общая ширина (offsetWidth) - рамка слева - рамка справа - скролл


// Размеры объекта включающие в себя
// прокрученную (которую не видно) часть.
// В остальном работают как clientWidth/clientHeight,
// scrollWidth и scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);


// Размеры прокрученной области
// scrollLeft и scrollTop

block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);


// / Методы управления прокруткой
// scrollBy, scrollTo и scrollIntoView
// работают и для объекта

// function setElementScrollBy() {
// 	block.scrollBy({
// 		top: 20,
// 		left: 0,
// 		behavior: "smooth"
// 	})
// }




// /========================================================================================================================================================


// Координаты
/*
Большинство соответствующих методов JavaScript работают в
одной из двух указанных ниже систем координат:

1. Относительно окна браузера.
	(как position: fixed, отсчёт идёт от верхнего левого угла окна.)
	Принято обозначать clientX/clientY.
2. Относительно документа.
	(как position: absolute относительно <body>, отсчёт идёт от
	верхнего левого угла документа.)
	Принято обозначать pageX/pageY.

Когда страница полностью прокручена в самое начало,
то верхний левый угол окна совпадает с левым верхним
углом документа, при этом обе этих системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в
контексте окна меняются, так как они двигаются,
но в то же время их координаты относительно
документа остаются такими же.

*/

//========================================================================================================================================================

// Координаты относительно окна браузера
// getBoundingClientRect

// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем координаты относительно окна браузера
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

// Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);


// Координаты относительно документа
// getBoundingClientRect

// Получаем объект
const item1 = document.querySelector('.lesson__item');

// Получаем конкретную координату относительно окна браузера
const getItemTopCoord = item1.getBoundingClientRect().top;

// Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);



// Получение объекта по координатам
// document.elementFromPoint(x, y);

const elem9 = document.elementFromPoint(100, 100);
console.log(elem9);


// Задача №1  Узнать ширину полосы прокрутки
let WindowWidth = window.innerWidth;
let DocumentWidth = document.documentElement.clientWidth;
console.log(WindowWidth - DocumentWidth);


// Задача №2 Заставьте браузер прокрутиться на 100px сверху
// спустя секунду после открытия страницы
setTimeout(function () { window.scrollBy(0, 100) }, 1000);


// Задача №3.
// Получите координаты любых трех элементов на странице



const elemq = document.elementFromPoint(400, 600);
console.log(elemq);


const elemw = document.elementFromPoint(300, 500);
console.log(elemw);


const eleme = document.elementFromPoint(600, 400);
console.log(eleme);














//========================================================================================================================================================
//========================================================================================================================================================


// Введение в JS события

/*
Отлавливать возникновение события  будем с помощью
специальных обработчиков.

Любому событию можно назначить обработчик, то есть функцию,
которая сработает, как только произойдет нужное нам событие.
Именно благодаря этим обработчикам JavaScript может
реагировать на действия пользователя.

Есть несколько способов назначить событию обработчик.

*/

// -----------------------------


// Использование атрибута HTML

// -----------------------------

// Использование DOM-объекта
const button2 = document.querySelector('.button2');


button2.onclick = function () {
	console.log('Клюк!');
}

const button3 = document.querySelector('.button3');


function showConsole() {
	console.log('Клык!');
}
button3.onclick = showConsole;

// Важно! Без круглых скобок!


// -----------------------------

/*
Фундаментальный недостаток описанных выше способов
назначения обработчика – невозможность повесить несколько
обработчиков на одно событие.
Каждое новое назначение обработчика перезапишет предыдущее:
*/

const button = document.querySelector('.button');

button.onclick = function () {
	console.log('Клук!');
}
button.onclick = function () {
	console.log('Клак!');
}


//===================================================



//===================================================

// Обработчик событий addEventListener/removeEventListener

/*
Существует основной способ назначения
обработчиков при помощи специальных
методов addEventListener и removeEventListener,
которые лишены этого недостатка

element.addEventListener(event, handler[, options]);
*/

// const button = document.querySelector('.button');
// уже была определена ранее

button.addEventListener("click", function (e) {
	console.log('Клйк!');
});
button.addEventListener("click", function (e) {
	console.log('Клцк!');
});

// ------

// const button = document.querySelector('.button');

function showConsole() {
	console.log('Клек!');
	button.removeEventListener("click", showConsole);
}

button.addEventListener("click", showConsole);
//button.removeEventListener("click", showConsole);







// Опции

const options = {
	"capture": false, // фаза, на которой должен сработать обработчик
	"once": true, // если true, тогда обработчик будет
	//автоматически удалён после выполнения.
	"passive": false // если true, то указывает, что обработчик
	//никогда не вызовет preventDefault()
}

// const button = document.querySelector('.button');

function showConsole() {
	console.log('Клкк!');
}

button.addEventListener("click", showConsole, options);

/*
Метод addEventListener может показаться сложнее чем, скажем, onclick.
Но, из-за того что он обладает преимуществом
"прослушивания" нескольких событий,
а также учитывая тот факт что существуют события которые можно отловить
только при помощи этого метода.
В результате разработчики чаще используют именно его.
*/





// ------

// Объект события
/*
Чтобы хорошо обработать событие, могут понадобиться детали того,
что произошло.Не просто «клик» или «нажатие клавиши»,
а также – какие координаты указателя мыши, какая клавиша
нажата и так далее.
Когда происходит событие, браузер создаёт объект события,
записывает в него детали и передаёт его в качестве
аргумента функции - обработчику.
*/

// const button = document.querySelector('.button');





function showConsole(event) {
	// Тип события
	console.log(event.type);
	// Объект на котором сработал обработчик
	console.log(event.target);
	// Объект к которому назначен обработчик
	console.log(event.currentTarget);
	// Положение курсора по оси X
	console.log(event.clientX);
	// Положение курсора по оси Y
	console.log(event.clientY);

	// Все детали события
	console.log(event);
}

button.addEventListener("click", showConsole);
button.addEventListener("mouseenter", showConsole);


//===================================================





//===================================================


// Всплытие и погружение

const blockq = document.querySelector('.blockq');
const blockInnerq = document.querySelector('.block__innerq');
const blockInnerInnerq = document.querySelector('.block__inner-innerq');

/*
Всплытие
Когда на элементе происходит событие, обработчики
сначала срабатывают на нём, потом на его родителе,
затем выше и так далее, вверх по цепочке предков.
*/
/*
Погружение
Для того чтобы что-то всплыло, оно должно сначало погрузиться :)
*/
// происходит всплытие

blockq.addEventListener("click", function (event) {
	console.log('Клик на Блок!');
	//console.log(event.target);
});
blockInnerq.addEventListener("click", function (event) {
	console.log('Клик на Блок второго уровня!');
}, { "capture": true });
blockInnerInnerq.addEventListener("click", function (event) {
	console.log('Клик на Блок третьего уровня!');
	// Остановка всплытия
	// event.stopPropagation();
});

/*
В современной разработке стадия погружения используется очень редко,
обычно события обрабатываются во время всплытия.
*/

//===================================================