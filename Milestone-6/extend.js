class TeamMember {
    name ;
    location ;
    constructor(name, location, tech){
        this.name = name;
        this.location = location;
    };
     provideFeedback(){
    console.log(`${this.name} thank you for your feedback`);
    };
};

class Instructor extends TeamMember{
    designation = "Web Course Instructor";
    team = "Web Team";
     constructor(name, location){
       super(name, location);
    };
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    };
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    };
};


class Developer extends TeamMember {
    designation = "Web Course Developer";
    team = "Web Team";
    tech;
    constructor(name, location,tech){
        super(name, location);
        this.tech = tech;
    };
    developFeature(feature){
        console.log(`please develop the${feature}`);
    };
    release(version){
        console.log(`Please release the version ${version}`);
    };
};


class jobPlacement extends TeamMember{
    designation = "Job Placement Commando";
    team = "Job Placement";
    region;
    constructor(name, location,region){
        super(name, location);
        this.region = region;
    };
    provideResume(feature){
        console.log(`please develop the${feature}`);
    };
    prepareStudent(version){
        console.log(`Please release the version ${version}`);
    };
};

const emp12 = new Developer("Chowdhuary", "Pembroke Pines", "Node JS");
console.log(emp12);
//emp12.provideFeedback();

const emp123= new jobPlacement("Hossain", "Pembroke Road", "HR");
console.log(emp123);