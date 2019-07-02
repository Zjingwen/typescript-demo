"use strict";
/**
 * 枚举
 * 定义一些带名字的常量。清晰的表达意图或创建一组有区别的用例
 */
// 如何定义枚举
// enum 枚举名{
//   枚举成员 = 初始化器(可缺省)
// }
/**
 * 数字枚举
 */
// 当枚举成员第一项的初始值为1，其余成员会从1开始自增
// enum Direction{
//   Up=1,
//   Down,
//   Left,
//   Right
// }
// console.log(Direction.Up);    // 1
// console.log(Direction.Down);  // 2
// console.log(Direction.Left);  // 3
// console.log(Direction.Right); // 4
// 当枚举成员第一项的未初始化时，第一项默认为0，其余成员从0开始自增
// enum Direction{
//   Up,
//   Down,
//   Left,
//   Right
// }
// console.log(Direction.Up);    // 0
// console.log(Direction.Down);  // 1
// console.log(Direction.Left);  // 2
// console.log(Direction.Right); // 3
// 枚举的使用，用枚举名.成员名，枚举名['成员名']，用枚举名来作为类型
// enum Responses {
//   No = 0,
//   Yes = 1,
// }
// function respond(recipient: string, message: Responses): void {
//   console.log(recipient);
//   console.log(message);
// }
// respond("hello", Responses.Yes);
// respond("hello", Responses['Yes']);
// 枚举成员第一项是由函数or常量初始化，其余成员未初始化时，会报异常
// 处理方案：初始化其余成员，将第一项移动至其他项
// function getSomeValue():number{
//   return 1;
// };
// const I= 1;
// enum E1{
//   A = getSomeValue(),
//   B,
// }
// enum E2{
//   A = getSomeValue(),
//   B = 1,
// }
// enum E3{
//   A = I,
//   B,
// }
// enum E4{
//   B,
//   A = I,
// }
/**
 * 字符串枚举
 * 每个成员都必须是字符串字面量
 * 用另一个字符串枚举成员来初始化
 */
// enum Direction{
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }
/**
 * 异构字符串
 * 混合字符串和数字成员
 */
// enum enums {
//   No = 0,
//   Yes = "YES",
// }
/**
 * 计算和常量成员
 */
// 常量成员，由常量初始化赋值或没有赋值枚举
// enum E {
//   X
// }
// enum E1{
//   X,
//   Y,
//   Z,
// }
// enum E2{
//   A = 1,
//   B,
//   C,
// }
// 计算成员，由运算符、函数等初始化赋值
// enum J{
//   A = 1<<1,
//   B = 1+1,
//   C = 0 || 1,
// }
/**
 * 反向映射
 * 数字枚举成员，拥有从枚举值反推枚举名的方式
 */
// enum Enum{
//   A
// };
// let a = Enum.A;
// let nameOfA = Enum[a];
// console.log(a);
// console.log(nameOfA);
