console.log("Js connected");
let doc = document;

let a = [
  [1, ["aswin", "pondy", "19"]],
  [2, ["sonia", "karikal", "22"]],
  [3, ["praveen", "chennai", "30"]],
  [4, ["tamizh", "pondy", "16"]],
];

let persons = [
  {
    id: 1,
    name: "aswin",
    location: "pondy",
    age: 19,
  },
  {
    id: 2,
    name: "sonia",
    location: "karikal",
    age: 19,
  },

  {
    id: 3,
    name: "praveen",
    location: "chennai",
    age: 30,
  },

  {
    id: 4,
    name: "tamizh",
    location: "pondy",
    age: 16,
  },
];

let input = prompt("Enter number to get Person details");

// for (const i of a) {
//   if (input === i[0]) {
//     for (const j in i[1]) {
//       if (j == 0) {console.log(` name is ${i[1][0]}`);}
//       if (j == 1) {console.log(` from ${i[1][1]}`);}
//       if (j == 2) {console.log(` age is ${i[1][2]}`);}
//     }
//   }
// }

let flag = true;

for (const i of persons) {
    if (i.name === input) {
      console.log(`Id => ${i.id}`);
      console.log(`Name => ${i.name}`);
      console.log(`Age => ${i.age}`);
      console.log(`Location => ${i.location}`);
      flag = true;
      break;
    } 
    else {
        flag = false;
    }
  }

  

  if (!flag) console.log("Not found");


