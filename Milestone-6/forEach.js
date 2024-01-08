// In String
const friends = ['Tom Cruise', 'Tom Sulaiman', 'Tom Brady', 'Tom Hanks'];
friends.forEach(friend => {
    console.log(friend);
});



//In Object
const products = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'watch', price:35000},
    {id:4, name:'tablet', price:23000}
]
products.map(product =>{
    console.log(product.name);
});
