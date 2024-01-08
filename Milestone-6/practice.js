const oddArray = [1,3,5,7,9];
const evenArray = oddArray.map((x)=>{
    return  x+1;
});
console.log(evenArray);

const array1 = [33,50,79,78,90,101,30];
const divisibleByTen = array1.filter((x) => {
   return  x%10==0});
console.log(divisibleByTen);


const array2 = [33,50,79,78,90,101,30];
const divisibleByTen1 = array1.find((x) => {
   return  x%10==0});
console.log(divisibleByTen1);

const array3 = [1,2,3,4,5,6,7,8];
const reduceArray = array3.reduce((a,b)=>{
    return a+b;
}, 0)
    console.log(reduceArray);


const people = [
  { name: "Ami", age: 21 },
  { name: "Tumi", age: 24 },
  { name: "Se", age: 27 }
];

// Using reduce to calculate the total age
const totalAge = people.reduce((accumulator, person) => accumulator + person.name, 2);

console.log(totalAge);  // Output: 72


// Object destructuring
const user = {
    name : "Ahmed",
    city : "Dhaka",
    type : "Admin"
};
const {name} = user;
console.log(name);

//Array Destructuring
const color = ["Red","Pink","Yellow","Brown","Green"];
const {c1,c2} = color;
console.log(c1);