let stu1 = {
    name : "Shourov",// key : value
    id : 24,
    dept : "ICT",
    lang : ["bangla", "english"]
}
console.log(stu1.name);
console.log(stu1.id);
console.log(stu1.dept);
console.log(stu1.lang);

let stu2 = {
    name : "Nayan",
    id : 23,
    dept : "ICT",
    lang : ["bangla", "english"]
}
console.log(stu2.name);
console.log(stu2.id);
console.log(stu2.dept);
console.log(stu2.lang);

//create multiple object in an easy way using Constructor:
console.log("Using Constructor:");
function Student(name, id, dept, lang){
    this.name = name;
    this.id = id;
    this.dept = dept;
    this.lang = lang;
    this.displayAll = function() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.dept);
        console.log(this.lang);
    }
}
let student1 = new Student("Shourov", 24, "ICT", ["bangla", "english"]);
let student2 = new Student("Nayan", 23, "ICT", ["bangla", "english", "urdu"]);

console.log(student1.name);

student1.displayAll();
student2.displayAll();




