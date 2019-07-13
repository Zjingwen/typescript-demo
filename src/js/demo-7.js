"use strict";
/**
 * 类型推论，类型兼容，高级类型
 */
/**
 * 类型推论
 * 在某些没有指出类型的地方，类型推论会帮助你提供类型
 */
// x会被推断为数字，这样的推断发生在初始化变量和成员
// let x = 3;
/**
 * 最佳通用类型
 */
// 类型推论会使用这些表达式的类型来推断出一个最何时的通用类型
// let x = [0,1,null];
/**
 * 类型兼容
 * 类型结构兼容性是基于结构子类型的
 * 结构类型是一种只使用其成员来描述类型的方式
 */
// 结构化系统的基本原则，x要兼容y，y只要具有与x相同的属性
// 这里y中必须包含名字是name的string类型成员。y满足条件，因此赋值成功
// interface Named{
//   name: string;
// }
// let x: Named;
// let y = {name: 'Alice', location: 'Seatter'};
// x = y;
// 比较函数
// 判断函数是否兼容，首先从参数开始，y兼容x，x不兼容y。因为y中有s的string类型成员这在x中是没有的。
// 所有函数比较是，左值必须完全包含右值。
// let x = (a: number) => 0;
// let y = (b: number,s: string) => 0;
// y = x;
// x = y;
/**
 * 枚举
 * 不同枚举之间是不兼容的
 */
// enum Status {
//   Ready,Waiting
// }
// enum Color {
//   Read,Blue,Green
// }
// let statusb = Status.Ready;
// statusb = Color.Green;
/**
 * 类
 * 比较两个类类型的对象时，只有实例的成员会被比较。静态成员和构造函数不在比较的范围内
 */
// class Animal {
//   feet: number;
//   constructor(name: string, numFeet: number) {
//     this.feet = numFeet;
//   }
// }
// class Size {
//   feet: number;
//   constructor(numFeet: number) {
//     this.feet = numFeet;
//   }
// }
// class Named {
//   feet: number;
//   name: string;
//   constructor(name: string, feet: number) {
//     this.feet = feet;
//     this.name = name;
//   }
// }
// let a: Animal;
// let b: Size;
// let c: Named;
// a = b; // success
// b = a; // success
// a = c;
// c = a; // error
/**
 * 泛型
 */
// x和y是兼容的，结构使用类型参数时并没有什么不同
// interface Empty<T>{}
// let x: Empty<number>;
// let y: Empty<string>;
// x = y;
// 增加一个成员就会不同,并且报错
// interface NotEmpty<T>{
//   data: T
// };
// let x: NotEmpty<number>;
// let y: NotEmpty<string>;
// x = y;
/* 高级类型 */
/**
 * 交叉类型
 * 将多个类型合并为一个类型
 */
// TODO
/**
 * 联合类型
 * 希望传入number或者string时使用
 */
// function padLeft(value:string, padding: string|number){
//   if (typeof padding === "number") {
//     return Array(padding+1).join(" ")+ value;
//   }
//   if (typeof padding === "string") {
//     return padding + value;
//   }
//   throw new Error(`Expected string or number , go '${padding}'.`);
// }
// console.log(padLeft("hello world", 4));
// console.log(padLeft("hello world", '|'));
// console.log(padLeft("hello world", true));// 报错
/**
 *  访问联合类型中所有类型共有的成员
 */
// TODO
