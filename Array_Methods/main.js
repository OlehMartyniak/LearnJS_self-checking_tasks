// Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.
// Тобто дефіси видаляються, а всі слова після них починаються з великої літери.

const camelize = (str) => 
    str.split("-").map((word, index) => 
    index == 0 ? 
    word : word[0].toUpperCase() + 
    word.slice(1)).join("");

console.log(camelize("my-short-string")); // myShortString