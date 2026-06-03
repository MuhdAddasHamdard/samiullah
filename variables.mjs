let age = 3;
let name = "ali";
let dob = "3033/3/23";

function sayHi(user) {
  console.log(`hi ${user}`);
}

function sayBye(user) {
  console.log(`bye ${user}`);
}

let company = {
  name: "upskill",
  founder: "said shah",
  year: 2022,
};

export { age, name, dob, sayHi, sayBye, company as venture };
