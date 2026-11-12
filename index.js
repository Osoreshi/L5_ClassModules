import { Admin } from "./Admin.js";

const admins = [
  new Admin("Иван", 30, true, 5),
  new Admin("Мария", 25, false, 2),
];

admins.forEach((admin) => admin.show());

const ref = admins[0].copy();
console.log("copy === оригинал:", ref === admins[0]);

const cloned = Admin.clone(admins[0]);
console.log("clone === оригинал:", cloned === admins[0]);
console.log("clone instanceof Admin:", cloned instanceof Admin);

cloned.accessLevel = 3;
cloned.show();

cloned.delete();
