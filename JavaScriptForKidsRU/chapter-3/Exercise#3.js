// ❓DESCRIPTION:

/* Сделайте две версии своего генератора дразнилок: одна пусть
использует для составления дразнилки оператор +, а другая создает массив со словами и соединяет их через
пробел с помощью join. Какой вариант вам больше нравится и почему?  */

/*
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
 */


// ✔️SOLUTION:

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
let randomInsult = 'У тебя' + ' ' + randomBodyPart + ' ' + 'еще более' + ' ' + randomAbjective + ' ' + 'чем' + ' ' + randomBodyPartAnimal + ' ' + 'у' + ' ' + randomWord + '!!!';
console.log(randomInsult);