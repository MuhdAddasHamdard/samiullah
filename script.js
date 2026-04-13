// import { age, dob, name } from "./variables.mjs";

// importing things in an object
// import * as variable from "./variables.mjs";

console.log(variable.age);
console.log(variable.name);
console.log(variable.dob);

// importing function under different names
import { sayHi as hi, sayBye as bye, venture } from "./variables.mjs";

hi("ali");
bye("ali");

console.log(venture.founder);
