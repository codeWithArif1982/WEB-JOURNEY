var myPC={
    brand:"Apple",
    screen:"15.6",
    isLaptop: true,
    ram:"8GB",
    disk:"500GB",
    isSSD:true,
    processor:"core i-5"
}

// document.write(myPC.brand);
// document.write(myPC['isLaptop']);


//using  for in loop
for(var item in myPC){
    document.write(myPC[item]+"<br>")
}
