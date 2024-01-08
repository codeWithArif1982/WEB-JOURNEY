// const numbers = [1,2,3,4,5];
// const totalNumbers = numbers.reduce( (previous, current)=> previous + current, 0);
// console.log(totalNumbers);

// const name = ['Arif', 'Chowdhuary'];
// const fullName = name.reduce( (previous, current)=> previous + current, " ");
// console.log(fullName);


// DOt notation
const student = {
    name  : 'Kolim Uddin',
    age : 15,
    class : 'Ten',
    marks : {
        math : 78,
        physics : 89,
        chemistry : 65
    },
}
const marks = student.marks.physics;
console.log(`Student marks on ${student.marks['1']} = ${marks}`);

// bracket Notation

const student1 = {
    name  : 'Mahim Uddin',
    age : 14,
    class : 'Nine',
    marks : {
        math : 89,
        physics : 92,
        chemistry : 87
    },
}

const subjectWiseMarks = student1['marks']['physics'];
console.log(`Student marks on ${student1.marks['1']} = ${subjectWiseMarks}`);
