"use strict";
// /**
//  * 基础数据类型
//  */
// let isDone : boolean = false; // 布尔
// let isNumber: number = 1111; // 数字
// let isString: string = 'abc'; // 字符串
// let isTemp: string = `hello ${isString}`; // 字符串模版变量
// let list1: number[] = [1,2,3,4,5]; // 数组声明
// let list2: Array<number> = [1,2,3,4,5]; // 数组泛型
// /**
//  * 明确数组数组类型时使用
//  * ！赋值越界是，会使用联合类型
//  */
// let tuple1:[string,number] = ['aaa',2];
// let tuple2:[number,string] = [2,'aaa'];
// // console.log(tuple1[0].substr(1));
// // console.log(tuple2[1].substr(1));
// /**
//  * 枚举
//  * ！默认情况下，枚举类型的是，是从上至下，从左至右，从0到n
//  * ！可以手动赋值
//  * ！可用通过value，反相查找到key
//  */
// enum Color {
//     Red,
//     Green = 5, // ！可以手动赋值
//     Blue,
// };
// let color_1: Color = Color.Red;
// let color_2: Color = Color.Green;
// let color_3: string = Color[color_2]; // ！可用通过value，反相查找到key
// // console.log(color_1);
// // console.log(color_2);
// // console.log(color_3);
// /**
//  * any
//  * 通过any来标记，动态类型。
//  * 可以在编译时有选择的包含或者移除类型检查，但请尽量少用
//  */
// let any_1: any = 4;
// any_1 = 'abc';
// let any_2: any[] = [1,'2',false];
// /**
//  * void，标示无类型，或者函数返回空
//  * 当然你也可以不写表式void
//  */
// function voidFun_1 () :void{
// }
// function voidFun_2 (){
// }
// let void_1: void = undefined;
// /**
//  * null和undefined，在typescript中是类型
//  * ！所有类型的子类，可以将null或undefined赋值给任意类型
//  */
// let n: null = null;
// let u: undefined = undefined;
// /**
//  * never类型，表式不存在的类型
//  * 抛出异常、箭头函数
//  */
// function nev_errir(message: string): never{
//     throw new Error(message);
// }
// function nev_fail(){
//     return Error('Something failed');
// }
// /**
//  * object组合数据类型
//  */
// // declare ?
// interface Animal {
//     name: string,
//     land: boolean;
//     sound: string;
// }
// // 正确使用
// let dog222: Animal = {
//     name: '111',
//     land: true,
//     sound: 'zz',
// }
// // console.log(dog222);
// // 错误使用
// // create(111);
// // create('111');
// // create(false);
// // Lib a.d.ts
// // Lib a.d.ts
// // Sample A
// declare const myPoint1: { x: number; y: number };
// // Sample B
// interface Point {
//   x: number;
//   y: number;
// }
// const myPoint2: Point={
//     x: 1,
//     y: 1,
// };
// // console.log(myPoint1);
// console.log(myPoint2);
// /**
//  * 类型断言
//  */
// let someValue: string = 'abc';
// let strLeng1: number = (<string> someValue).length;
// let strLeng2: number = (someValue as string).length;
