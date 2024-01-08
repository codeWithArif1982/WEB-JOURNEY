const ages = [1,2,3,4,5]
const newAges = [...ages,6,7,8,9]
const oldAges = [11,22,33, ...ages] 
const latestAges = [newAges, ...oldAges]
const latestAges1 = [...newAges, ...oldAges]
//console.log(newAges)
//console.log(oldAges);
console.log(latestAges);
//console.log(latestAges1);