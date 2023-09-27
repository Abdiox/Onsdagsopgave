/* import fetch from "node-fetch"; */

const membersArray = [];

function constructMember(memberData) {
  const member = {
    firstName: memberData.firstName,
    lastName: memberData.lastName,
    email: memberData.email,
    dateOfBirth: memberData.dateOfBirth,
    gender: memberData.gender,
    hasPayed: memberData.hasPayed,
    image: memberData.image,
  };
  return member;
}

/* async function getMembers() {
  const response = await fetch(`./data/test.json`);
  const data = await response.json();
  console.log(data);
  return data;
} */

/* fetch("https://www.youtube.com/")
  .then((response) => response)
  .then((data) => console.log(data)); */

/* fetch("test.json", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)));
 */

fetch("./test.JSON")
  .then((response) => response.json())
  .then((response) => console.log(response));

/* getMembers(); */

// function constructMember(fullName) {
//   const NameParts = {
//     firstName: undefined,
//     lastName: undefined,
//     age: undefined, // Use an underscore to indicate it's a private variable
//     set fullName(fullName) {
//       const names = fullName.split(" ");

//       if (names.length === 3) {
//         this.firstName = names[0];
//         this.middleName = names[1];
//         this.lastName = names[2];
//       } else {
//         this.firstName = names[0];
//         this.lastName = names[1];
//       }
//     },
//     get fullName() {
//       if (!this.middleName) {
//         return `${this.firstName} ${this.lastName}`;
//       } else {
//         return `${this.firstName} ${this.middleName} ${this.lastName}`;
//       }
//     },
//     // Define a custom getter method for age
//     getAge: function () {
//       return this.age;
//     },
//   };

//   NameParts.fullName = fullName;

//   return NameParts;
// }
// const person = constructNameParts("Kylian Money Mbappe");
// Object.defineProperty(person, "hasMiddleName", { enumerable: false });

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// console.log(person.fullName); // This will not include middleName in the console output
// console.log(person.age);
