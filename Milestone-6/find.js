const numbers = [12,14,6,5,4,8,13,21, 90,56,33,21,20];
const bigNumbers = numbers.find(num => num > 20);
const smallNumbers = numbers.find(num => num <20);
const evenNumbers = numbers.find(num => num %2 ==0);
const oddNumbers = numbers.find(num => num %2 == 1);
console.log(bigNumbers);
console.log(smallNumbers);
console.log(evenNumbers);
console.log(oddNumbers);