console.log('Hello World');

const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimal = 'cow,bear,dog,cat';
const favoriteAnimalArray = favoriteAnimal.split(','); // you have to put something inside the quotes
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join(''); // makes them together 
console.log('newNum', newNum);

// Mini Challenge 

const palChecker = (word) => {
    //yes if its a palindrome 
    //no if it's not a palidrome
   
    const wordArray = word.split('').join('');
    const reverseArray = word.split('').reverse().join('');

    if (wordArray === reverseArray) {
        console.log(`${word} is a palindrome`);
    } else {
        console.log(`${word} is not a palindrom`);
    }
};

palChecker('mom');  // yes 
palChecker('monkeybutt'); // no
palChecker('racecar'); // yes

let animals = ['snakes', 'spiders', 'gophers', 'big spiders'];
const lastItem = animals.pop(); // "big spiders"
const firstItem = animals.shift(); // snakes 

console.log(lastItem);
console.log(firstItem);

// Push is the most used array method 

animals.push('bat'); // end
animals.unshift('baby hippos'); // start 
console.log(animals);

// 1. What is your starting value - 0;
// 2. What is your stopping value - something.length;
// 3. How are you incrementing - +1 

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}