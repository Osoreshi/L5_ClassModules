import { User } from "./User.js";

export class Admin extends User {
  _accessLevel;

  constructor(name, age, isActive = true, accessLevel = 1) {
    super(name, age, isActive);
    this.accessLevel = accessLevel;
  }

  get accessLevel() {
    return this._accessLevel;
  }
  set accessLevel(value) {
    if (!Number.isInteger(value) || value < 1 || value > 5) {
      throw new RangeError("accessLevel должен быть целым числом от 1 до 5");
    }
    this._accessLevel = value;
  }

  show() {
    console.log(
      `Admin { name: ${this.name}, age: ${this.age}, isActive: ${this.isActive}, accessLevel: ${this.accessLevel} }`
    );
  }

  delete() {
    console.log(`Администратор «${this.name}» удалён`);
    super.delete();
  }

  copy() {
    return super.copy();
  }

  static clone(admin) {
    return new Admin(admin.name, admin.age, admin.isActive, admin.accessLevel);
  }
}
