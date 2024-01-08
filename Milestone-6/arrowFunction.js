//function declaration
function add(a,b){
    const c =a+b ;
    return c;
}
const result = add(1,3)
console.log(result);



//function expression
const add1 = function add1(a,b){
    const c =a+b ;
    return c;
}
const result1 = add1(6,3)
console.log(result1);


//function expression with anonymous function
const add2 = function (a,b){
    const c =a+b ;
    return c;
}
const result2= add2(8,3)
console.log(result2);