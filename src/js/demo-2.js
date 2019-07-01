"use strict";
// /**
//  * 接口
//  * 可以要求接口必须包含某属性，并且指定属性的类型
//  */
// function printLabel1(labelledObj:{label:string}){
//   console.log(labelledObj.label)
// }
// let myObj1= {
//   size: 10,
//   label: 'aaa',
// }
// // printLabel1(myObj1);
// /**
//  * interface关键字
//  */
// interface LabelledValue{
//   label: string,
// };
// function printLabel2(labelledObj: LabelledValue){
//   console.log(labelledObj.label)
// }
// let myObj2 = {
//   size: 10,
//   label: 'aaaa',
// };
// // printLabel2(myObj2);
// /**
//  * 可选属性
//  * 在属性中添加?号，表式可确实的属性
//  */
// interface SquareConfig{
//   color?: string,
//   width?: number,
// }
// function createSquare3(config: SquareConfig): {color: string;area: number}{
//   let newSquare = {
//     color: 'while',
//     area: 100,
//   }
//   if(config.color) newSquare.color = config.color;
//   if(config.width){
//     newSquare.area = config.width * config.width;
//   } 
//   return newSquare;
// }
// let mySquare = createSquare3({color: 'red',width: 200})
// // console.log(mySquare)
// /**
//  * 只读属性的结构体
//  */
// interface Point3{
//   readonly x: number,
//   readonly y: number,
// };
// let p1: Point3= {x:10,y:20};
// // 错误
// // p1.x = 111;
// /**
//  * ReadonlyArray
//  * 只读数组
//  */
// let a:number[] = [1,2,3,4,5];
// let ro: ReadonlyArray<number> = a;
// // 所有错误情况
// // ro[0] = 1;
// // ro.push(1);
// // ro.length = 5;
// // a = ro;
// a = ro as number[];// 逃脱类型检查
// /**
//  * 当函数可能出现额外属性时，可以用类型断言规避
//  */
// interface SquareConfig3 {
//   color?: string;
//   width?: number;
//   [propName: string]: any,
// }
// function createSquare4(config: SquareConfig): { color: string; area: number } {
//   return {color: '123', area: 100}
// }
// let mySquare2 = createSquare4({ colour: "red", width: 100 } as SquareConfig3);
// /**
//  * 函数类型
//  * 创建函数类型的变量
//  */
// interface SearchFunc {
//   (sourec: string, subString: string): boolean
// }
// let mySearch: SearchFunc;
// mySearch = function(sourec:string, subString:string):boolean{
//   let result = sourec.search(subString);
//   return result > -1;
// }
// /**
//  * 可索引的类型
//  * 支持两种类型的索引签名，string和number
//  */
// interface StringArray{
//   [index:number] : string,
// };
// let myArray: StringArray;
// myArray = ['1','2'];
// let myStr:string = myArray[0];
// class Animal{
//   name!: string;
// }
// class Dog extends Animal {
//   breed!: string;
// }
// // 错误：使用数值型索引
// // interface NotOkay {
// //   [x: number]: Animal;
// //   [x: string]: Dog;
// // }
// interface NumberDictionary{
//   [index: string]: number;
//   length: number;
//   name: any;
// }
// /**
//  * 类类型
//  */
// // interface ClockInterface {
// //   currentTime: Date;
// //   setTime(d: Date):any;
// // }
// // class Clock implements ClockInterface {
// //   constructor(h: number, m: number) { };
// //   currentTime!: Date;
// //   setTime(d:Date){
// //     this.currentTime = d;
// //   }
// // }
// /**
//  * 调用签名
//  * 只有参数列表和返回值类型的函数定义。
//  * 参数列表里的每个参数都需要名字和类型。
//  */
//  /**
//   * 类有两个类型，静态类型和实例类型
//   * ！试图用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会的到一个错误
//   */
// interface ClockConstructor{
//   new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//   tick():any;
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new ctor(hour, minute);
// }
// class DigtalClock implements ClockInterface {
//   constructor (h: number,m: number){}
//   tick(){
//     console.log("beep beep");
//   }
// }
// class AnglogClock implements ClockInterface {
//   constructor(h: number, m: number){}
//   tick() {
//     console.log('tick tock');
//   }
// }
// let digital = createClock(DigtalClock, 12, 17);
// let analog = createClock(AnglogClock, 7, 32);
// // digital.tick();
// // analog.tick();
// /**
//  * 接口继承
//  */
// interface Shape {
//   color: string;
// }
// interface PenStroke {
//   penWidth: number;
// }
// interface Square extends Shape,PenStroke{
//   sideLength: number;
// }
// let square = <Square>{};
// square.color = 'blue';
// square.sideLength = 10;
// square.penWidth = 5.0;
// // console.log(square);
// /**
//  * 混合类型
//  * 接口能够描述javascript里丰富的类型，可以让一个对象同时具备多种类型
//  * 使用第三方库时，可能需要这样去完整定义类型
//  */
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }
// function getCounter(): Counter{
//   let counter = <Counter>function (start: number){};
//   counter.interval = 123;
//   counter.reset = function(){};
//   return counter;
// };
// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
// /**
//  * 接口继承类
//  * 创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
//  * 只有子类才能访问父类的私有属性
//  */
// class Control {
//   private static: any;
// }
// interface SelecttableControl extends Control {
//   select(): void;
// }
// class Button extends Control implements SelecttableControl {
//   select() {}
// }
// class TextBox extends Control {
//   select() {}
// }
// // class Image implements SelecttableControl {
// //   select() {}
// // }
// // class Location {
// // }
