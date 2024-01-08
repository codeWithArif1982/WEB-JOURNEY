// In Number
const numbers = [2,8,6,7,9,3];
const makeDouble = numbers.map(num =>num*2);
console.log(makeDouble)


// const numbers = [12,56,87,44];
// const divideByThree = numbers.map((num =>num/3));
// console.log(divideByThree)

// const numbers = [12,56,87,44];
// const reminderByThree = numbers.map(num =>num%3);
// console.log(reminderByThree)



// In String
const friends = ['Tom Cruise', 'Tom Sulaiman', 'Tom Brady', 'Tom Hanks'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
const friendNameLength = friends.map(friend => friend.length);
console.log(friendNameLength);


// In String
const products = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'watch', price:35000},
    {id:4, name:'tablet', price:23000}
]
const items = products.map(product =>product.price);
console.log(items)