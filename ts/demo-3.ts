/**
 * 类
 */

class Greeter{
  greeting: string;
  constructor(message: string){
    this.greeting = message;
  };
  greet(){
    return 'Hello, '+ this.greeting;
  }
}

let greeter = new Greeter("world");
// greeter.greet();

/**
 * Dog1是一个派生类，它派生自Animal基类，通过extends关键字实现继承
 * supre 会执行基类的构造函数
 */
class Animal1 {
  move(distanceInMeters: number = 0){
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
  name: string;
  constructor(thenName: string){
    this.name = thenName;
  };
  move(distanceInMeters: number = 0){
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  };
}

class Snake extends Animal2 {
  constructor(name:string) {
    super(name);
  }

  move(distanceInMeters = 5){
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal2{
  constructor(name: string){
    super(name);
  }

  move(distanceInMeters = 45){
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom:Animal1 = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

/**
 * 公有、私有、受保护
 */
class Animal3 { // 公有
  public name: string;
  public constructor(theName: string){
    this.name = theName;
  }
  public move(distanceInMeters: number){
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

class Animal4 { // 私有，外部访问报错
  private name: string;
  constructor(thenName: string){
    this.name = thenName;
  }
}
// new Animal4("Cat").name;

class Animal5 {
  private name: string;
  constructor(theName: string){
    this.name = theName;
  }
}

class Rhino extends Animal5{
  constructor(){
    super("Rhino");
  }
}

class Employee {
  private name: string;
  constructor(theName:string) {
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
class Person{
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee1 extends Person {
  private department: string;
  constructor(name:string,department:string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch(){
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee1("Howard","Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);

/**
 * 构造函数被标记为 protected
 */
class Person1{
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

class Employee2 extends Person1{
  private department: string;
  constructor(name:string,department:string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard1 = new Employee2("Howard","Sales");
// let john = new Person1("John");

/**
 * 修饰符
 */