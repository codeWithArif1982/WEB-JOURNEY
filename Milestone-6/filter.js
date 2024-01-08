const numbers = [12,14,6,5,4,8,13,90,56,33,21,20];
const bigNumbers = numbers.filter(num => num > 20);
const smallNumbers = numbers.filter(num => num <20);
const evenNumbers = numbers.filter(num => num %2 ==0);
const oddNumbers = numbers.filter(num => num %2 == 1);
console.log(bigNumbers);
console.log(smallNumbers);
console.log(evenNumbers);
console.log(oddNumbers);