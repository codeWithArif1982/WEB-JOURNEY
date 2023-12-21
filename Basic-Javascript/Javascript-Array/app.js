var category = ["Allium","Beverage","Dairy Bread & Eggs", "Fruits & Vegetable"];


// using regular for loop
// for(var i=0; i<=category.length;i++){
//     document.write(category[i]+"<br>")
// }

//using  for in loop
// for(var item in category){
//     document.write(category[item]+"<br>")
// }

//using  for in loop
// for(var item in category){
//     document.write(category[item]+"<br>")
// }


//using from: it convrt string to Array
// var nameString = "Arif Chowdhuary";
// var nameStringArray = Array.from(nameString);
// document.write(nameStringArray[5])

//Using Array filter
// var numbers = [1,2,3,4,5,6,7,8,9];
// var numbersFilter = numbers.filter((item)=>{
//     return item %2 ==0;
// });
// document.write(numbersFilter)


//Using Array Find
// var numbers = [1,2,3,4,5,6,7,8,9];
// var numbersFilter = numbers.find((item)=>{
//     return item %2 ==0;
// });
// document.write(numbersFilter)

 //Using Array Find index
// var numbers = [1,2,3,4,5,6,7,8,9];
// var numbersFilter = numbers.findIndex((item)=>{
//     return item %2 ==0;
// });
// document.write(numbersFilter)


//Using Array ForEach
// var numbers = [1,2,3,4,5,6,7,9];
// numbers.forEach((item)=>{
//    document.write(numbers);
// });

// var numArray = [1,2,3,4,5];
// var result = numArray.includes(0);
// document.write(result)

var numArray = ["Arif","chowdhuary"];
var result = numArray.indexOf("chowdhuar");
document.write(result)