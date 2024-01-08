function add(firstNumber = 0 , secondNumber ){
    firstNumber = firstNumber || 9;
    if(secondNumber === undefined){
        secondNumber = 8 ;
    }
    const total = firstNumber+secondNumber
    return total;
}

const result = add();
console.log(result);