
class Instructor {
    name ;
    designation = "Web Course Instructor";
    team = "Web Team";
    location ;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    };
    createQuiz(module){
        console.log(`Please Create quize for module ${module}`);
    };
};


const emp1 = new Instructor("Arif","USA");

console.log(emp1);

emp1.createQuiz(60);
emp1.startSupportSession("9:00 PM");
