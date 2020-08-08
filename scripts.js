var student = {id:807, name:"Kawsar"}
// console.log(typeof student);

function Student(name, id){

    this.name = name,
    this.id = id;

}

var data = new Student("Kawsar", 807);
// console.log(data.name);

class Person{


    constructor(pId, pName){
        this.id = pId;
        this.name = pName;
        this.school = "NC Model";
    }

}

const student1 = new Person(807, "Kawsar");
const student2 = new Person(808, "Shamim");
console.log(student1);
console.log(student2);
