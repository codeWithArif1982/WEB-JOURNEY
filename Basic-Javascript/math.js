function arrayTotal(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        const element = numbers[i];
        sum = sum + element;
    
    }
    return sum;
}

const numbers = [12,34,67,23];

console.log(arrayTotal(numbers));

