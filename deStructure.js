const person = {name:"Kawsar", phone:103606, gfname:"Joly", address:"Kanaitikar", friends:["Shamim", "Mohammad", "Abdullah "]};

// const gfname = person.gfname;
// const phone = person.phone;

const { phone, gfname, name } = person;

// console.log(gfname, phone, name);
// console.log(gfname, phone);
// console.log(gfname, phone);

const friends = ["Shamim", "Murad", "Babu Vai", "Sohan", "Fokhrul"];
const [first, second, ...restAll] = friends;

// console.log(first, second, restAll);

const greatPerson = {
    degree: "Takla",
    address: "Sylhet",
    info: {
        type: "No 1 fazil",
        type2: "No 1 harami"
    }
}

const {type, type2} = greatPerson.info;

console.log(type);

