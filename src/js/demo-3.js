"use strict";
/**
 * 类
 */
// 基础类用法
// class Animals{
//   name:string = '';
// 	constructor(name:string){
//     this.name = name;
//   }
// 	sayHi(){
// 		console.log(`my is ${this.name}`);
//     return `my is ${this.name}`;
//   }
// }
// class Cat extends Animals{
//  	constructor(name:string){
//     super(name);
//   }
//   sayHi(){
//     console.log(`new ${super.sayHi()}`)
//     return `new ${super.sayHi()}`;
//   }
// }
// let aaaa = new Animals("aaa");
// let cccc = new Cat('Cat');
// aaaa.sayHi();
// cccc.sayHi();
// 存取器用法
// class Animal2{
//   constructor(name:string){
//     this.name = name;
//   }
//   get name(){
//     return new Date().toString();
//   }
//   set name(val){
//     console.log(`setter: ${val}`)
//   }
// }
// let aaaa = new Animal2('1111');
// console.log(aaaa.name);
// 静态方法
// class Animal{
//   name:any;
//   constructor(name:string){
//     this.name = name;
//   }
//   static isAnimal(a:any){
//     console.log(a instanceof Animal)
//     return a instanceof Animal;
//   }
// };
// let a = new Animal('Jack');
// Animal.isAnimal(a);
// a.isAnimal(); // error isAnimal is a static ...
// public
// class Animal{
//   public name:string;
//   public constructor(name:string) {
//     this.name=name;
//   }
// }
// let a = new Animal('1111');
// console.log(a.name);
// a.name = '2222';
// private
// class Animal{
//   private name: string;
//   public constructor(name:string){
//     this.name = name;
//   };
// };
// let a = new Animal('1111');
// console.log(a.name);
// a.name = '2222';
// private
// class Animal{
//   private name: string;
//   constructor(name:string){
//     this.name = name;
//   }
// }
// class Cat extends Animal{
//   constructor(name:string){
//     super(name);
//     console.log(this.name);
//   }
// }
// proteceted
// class Animal{
//   protected name:string;
//   constructor(name:string){
//     this.name = name;
//   }
// }
// class Cat extends Animal{
//   constructor(name:string){
//     super(name);
//     console.log(this.name);
//   }
// }
// abstract 
// abstract class Animal{
//   public name:string = '';
//   public constructor(name:string){
//     this.name = name;
//   }
//   public sayHi(){
//     console.log(this.name);
//   }
// }
// class Cat extends Animal{
//   public eat(){
//     console.log(`${this.name} is eating`)
//   }
// }
// let a = new Cat('11111');
// a.eat();
// readonly
// class Octopus{
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
//   constructor(theName:string){
//     this.name = theName;
//   }
// }
// let dad = new Octopus('111');
// dad.name = '111'; // error
// class Alpha{
//   x: number;
// }
// class Bravo{
//   x: number;
// }
// class Charlie{
//   private x: number;
// }
// class Delta extends Charlie {
// }
// class Eat extends Charlie {
// }
// let a = new Alpha(),
//     b = new Bravo(),
//     c = new Charlie(),
//     d = new Delta(),
//     e = new Eat();
// a = b;
// c = d;
// c = e;
// e = d;
// class MyClass {
//   x = 10;
//   someCallBack(){
//     console.log(this.x);
//     this.someMethod();
//   }
//   someMethod(){
//     console.log('someMethod');
//   }
// }
// let obj = new MyClass();
// setTimeout(obj.someCallBack(),1000);
