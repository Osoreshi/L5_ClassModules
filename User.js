export class User {
  _name;
  _age;
  _isActive;

  constructor(name, age, isActive = true) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new TypeError("name должен быть непустой строкой");
    }
    this._name = value.trim();
  }

  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
      throw new TypeError("age должен быть неотрицательным числом");
    }
    this._age = value;
  }

  get isActive() {
    return this._isActive;
  }
  set isActive(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("isActive должен быть boolean");
    }
    this._isActive = value;
  }

  #maskName() {
    return this._name[0] + "*".repeat(Math.max(this._name.length - 1, 0));
  }

  show() {
    console.log(
      `User { name: ${this._name} (${this.#maskName()}), age: ${this._age}, isActive: ${this._isActive} }`
    );
  }

  delete() {
    for (const key of Object.keys(this)) {
      delete this[key];
    }
    Object.setPrototypeOf(this, null);
  }

  copy() {
    return this;
  }

  static clone(user) {
    return new User(user.name, user.age, user.isActive);
  }
}
