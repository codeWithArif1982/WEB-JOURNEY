// You are given an array of numbers. 
// Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function countOccurrences(numbers, target) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            count++;
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const target = 5;
const occurrences = countOccurrences(numbers, target);
console.log(`The number ${target} appears ${occurrences} times.`);



// Write a function to count the number of vowels
function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Initialize a counter to store the count of vowels
    let count = 0;
    // Iterate through each character of the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // If it is, increment the count
            count++;
        }
    }
    // Return the total count of vowels found in the string
    return count;
}
// Example usage:
const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`);



// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: ProgrammingWrite a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(" ");
    
    // Initialize variables to store the longest word and its length
    let longestWord = "";
    let maxLength = 0;
    
    // Iterate through each word in the array
    for (let word of words) {
        // Remove any punctuation marks from the word
        const cleanedWord = word.replace(/[^\w]/g, '');
        
        // Check if the current word is longer than the previously longest word
        if (cleanedWord.length > maxLength) {
            // If it is, update the longest word and its length
            longestWord = cleanedWord;
            maxLength = cleanedWord.length;
        }
    }
    
    // Return the longest word found
    return longestWord;
}

// Example usage:
const inputStr = "I am learning Programming to become a programmer";
const longestWord = findLongestWord(inputStr);
console.log(`The longest word in "${inputStr}" is: ${longestWord}`);
