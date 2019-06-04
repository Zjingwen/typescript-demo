var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./test"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 类
     */
    const test_1 = __importDefault(require("./test"));
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        ;
        greet() {
            return 'Hello, ' + this.greeting;
        }
    }
    let greeter = new Greeter("world");
    // greeter.greet();
    /**
     * Dog1是一个派生类，它派生自Animal基类，通过extends关键字实现继承
     * supre 会执行基类的构造函数
     */
    class Animal1 {
        move(distanceInMeters = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }
    class Dog1 extends Animal1 {
        bark() {
            console.log('Woof! Woof!');
        }
    }
    const dog = new Dog1();
    // dog.bark();
    // dog.move(10);
    // dog.bark();
    class Animal2 {
        constructor(thenName) {
            this.name = thenName;
        }
        ;
        move(distanceInMeters = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
        ;
    }
    class Snake extends Animal2 {
        constructor(name) {
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }
    class Horse extends Animal2 {
        constructor(name) {
            super(name);
        }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }
    let sam = new Snake("Sammy the Python");
    let tom = new Horse("Tommy the Palomino");
    // sam.move();
    // tom.move(34);
    /**
     * 公有、私有、受保护
     */
    class Animal3 {
        constructor(theName) {
            this.name = theName;
        }
        move(distanceInMeters) {
            console.log(`${this.name} moved ${distanceInMeters}`);
        }
    }
    class Animal4 {
        constructor(thenName) {
            this.name = thenName;
        }
    }
    // new Animal4("Cat").name;
    class Animal5 {
        constructor(theName) {
            this.name = theName;
        }
    }
    class Rhino extends Animal5 {
        constructor() {
            super("Rhino");
        }
    }
    class Employee {
        constructor(theName) {
            this.name = theName;
        }
    }
    let animal5 = new Animal5("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");
    animal5 = rhino;
    // animal5 = employee;
    /**
     * protected 不能在实例化使用，但是可以在派生类中使用
     */
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee1 extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
        getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let howard = new Employee1("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    // console.log(howard.name);
    /**
     * 构造函数被标记为 protected
     */
    class Person1 {
        constructor(theName) {
            this.name = theName;
        }
    }
    class Employee2 extends Person1 {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
        getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let howard1 = new Employee2("Howard", "Sales");
    // let john = new Person1("John");
    /**
     * 修饰符
     */
    test_1.default();
});
