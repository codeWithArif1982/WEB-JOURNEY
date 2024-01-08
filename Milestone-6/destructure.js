const employee ={
    name : 'Arif',
    address : "USA",
    height : "60 Inches",
    weight : "180 lbs"
}

// const name = employee.name;
// const address  = employee.address;
// const height = employee.height;
// const weight = employee.weight;


//object destructuring
const { address, height,weights,name} = employee;
console.log(name)



const[first, ...last] = [44,99,87];
console.log(last)
