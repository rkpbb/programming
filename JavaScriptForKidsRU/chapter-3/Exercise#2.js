// // ❓DESCRIPTION:
//
// /* Усовершенствуйте генератор дразнилок, чтобы он создавал дразнилки такого типа:
// «У тебя [часть тела] еще более [прилагательное], чем [часть тела животного] у [животное]».
// Подсказка: нужно будет создать еще один массив. */
//
// // ✔️SOLUTION:
//
// var randomBodyParts = ['глаз', 'нос', 'череп'];
// var randomAbjectives = ['вонючий', 'унылый', 'дурацкий'];
// var randomBodyPartsAnimals = ['грива', 'копыта', 'бивни', 'челюсть'];
// var randomWords = ['мухи', 'выдры', 'акулы', 'мартышки', 'крысы'];
//
// // Выбор случайной части тела из массива randomBodyParts:
// var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
//
// // Выбор случайного прилагательного из массива randomAbjectives:
// var randomAbjective = randomAbjectives[Math.floor(Math.random() * randomAbjectives.length)];
//
// // Выбор случайной части тела животного из массива randomBodyPartsAnimals:
// var randomBodyPartAnimal = randomBodyPartsAnimals[Math.floor(Math.random() * randomBodyPartsAnimals.length)];
//
// // Выбор случайного слова из массива randomWords:
// var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
//
// // Соединяем случайные слова в дразнилку:
// var randomInsult = ['У тебя', randomBodyPart, 'еще более', randomAbjective, 'чем', randomBodyPartAnimal, 'у', randomWord + '!!!'].join(' ');
// randomInsult;
// //'У тебя глаз еще более дурацкий чем копыта у мухи!!!'

// Переделка под переменную 'let' :
let randomBodyParts = ['глаз', 'нос', 'череп'];
let randomAbjectives = ['вонючий', 'унылый', 'дурацкий'];
let randomBodyPartsAnimals = ['грива', 'копыта', 'бивни', 'челюсть'];
let randomWords = ['мухи', 'выдры', 'акулы', 'мартышки', 'крысы'];

// Выбор случайной части тела из массива randomBodyParts:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

// Выбор случайного прилагательного из массива randomAbjectives:
let randomAbjective = randomAbjectives[Math.floor(Math.random() * randomAbjectives.length)];

// Выбор случайной части тела животного из массива randomBodyPartsAnimals:
let randomBodyPartAnimal = randomBodyPartsAnimals[Math.floor(Math.random() * randomBodyPartsAnimals.length)];

// Выбор случайного слова из массива randomWords:
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// Соединяем случайные слова в дразнилку:
let randomInsult = ['У тебя', randomBodyPart, 'еще более', randomAbjective, 'чем', randomBodyPartAnimal, 'у', randomWord + '!!!'].join(' ');
console.log(randomInsult);
