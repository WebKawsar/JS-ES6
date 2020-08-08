
class Parent{
    constructor(){
        this.fatherName = "Mutlib Miah";
    }
}


class Child extends Parent{

    constructor(name){
        super();
        this.name = name;
    }

    getFullDetails(){
        return this.name + " " + this.fatherName;
    }

}

const child1 = new Child("Kawsar");
const child2= new Child("Ahmed");
console.log(child1);
console.log(child2);
console.log(child1.getFullDetails());

