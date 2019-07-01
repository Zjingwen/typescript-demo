"use strict";
/**
 * 函数
 */
/**
 * 函数的参数类型
 * 确定参数类型的格式是，(参数名: 参数类型): 返回类型
 */
// function add(x:number, y:number):number{
//   return x+y;
// }
// let myAdd = function(x:number, y:number):number {return x+y};
/**
 * 完整函数类型
 * 包含两部分，参数类型 => 返回值类型 = 函数
 * 参数类型主要使用参数列表的形式书写，为每个参数制定一个名与类型
 * let 变量: (参数名: 参数类型) => 返回类型 = function(参数名: 参数类型...): 返回类型 { 函数体 }
 */
// let myAdd: (x:number, y:number) => number = function(x:number, y:number):number {
//   return x+y;
// };
// let myAdd: (baseValue: number, increment: number) => number = function(x: number, y: number): number {
//   return x + y;
// };
/**
 * 推断类型
 * 写完整函数类型时，如果返回类型的函数没有书写参数类型的话，那么参数会按照参数类型来识别。
 * 但是参数类型没有写的话，不能使用返回函数的类型。
 */
// 正确例子
// let myAdd: (baseValue: number, increment: number)=> number = function(x,y){
//   return x+y;
// };
// 错误例子
// let myAdd: (baseValue, increment)=> number = function(x: number,y: number){
//   return x+y;
// };
/**
 * 可选参数
 * 在typescript中，一般情况下函数的参数是固定的，必须使用而且赋值。但是在参数名加上'?'问号关键字，就可以表示，某个参数是可选的。
 */
// 正确
// function buildName(firstName: string, lastName?:string):string{
//   if(lastName){
//     return firstName + " " + lastName;
//   }
//   return firstName;
// }
// buildName("Bob");
// 错误
// function buildName(firstName: string, lastName:string):string{
//   if(lastName){
//     return firstName + " " + lastName;
//   }
//   return firstName;
// }
// buildName("Bob");
/**
 * 默认参数
 * 参数可以提供一个默认值当使用者没有传递这个参数或者传递的是undefined时，就使用默认值。
 */
// function buildName(firstName: string, lastName:string = 'Smith'): string{
//   return firstName + " " + lastName;
// }
/**
 * 剩余参数
 * 当你不知道传入的参数会有多少个时，就可以使用剩余参数，来同时操作多个参数。
 * 剩余参数可以一个没有，也可以是一个集合。
 */
// function buildName(firstName:string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// };
// buildName("Joseph","Samuel","Lucas","Mackinzie");
/**
 * 重载
 * 根据传入不同的参数，而返回不同类型的数据。
 * 重载的函数会在调用时，进行类型检查。
 * 在重载开始时，typescript会匹配第一个重载列表，所以为了节约性能，请把匹配度最高的重载定义放在第一位
 */
// function hasType(x: number): string;
// function hasType(x: string): string;
// function hasType(x: any): any {
//   if (typeof x == "number") return "number";
//   if (typeof x == "string") return "string";
// };
// hasType(1);
// hasType('1');
// hasType([1,2,3]);// 报错
/**
 * 用接口定义函数类型
 * 我们可以使用接口的方式，来定义一个函数的参数以及返回
 */
// interface SearchFunc{
//   (source: string, subString: string): boolean;
// };
// let search: SearchFunc;
// search = function(source: string, subString: string){
//   return source.search(subString) !== -1;
// }
/**
 * 参数解构
 * function f({x:number})，我们来解读一下，方法f参数是一个对象，对象有个参数x，类型是number。在typescript中，参数声明，只能是(参数: 参数类型)的形式。这是完全不符合。正确形式应该是function f({x}:{x:number})
 */
// function f({x:number}){
//   console.log(x);
// }
// function f( {x}:{x:number} ){
//   console.log(x);
// }
