"use strict";
/**
 * 泛型
 * 使一个组件可以支持多种类型的数据
 */
/**
 * 泛型之Hello World
 */
// function identity(arg:number):number {
//   return arg;
// }
// function identity(arg: any): any{
//   return arg;
// }
/**
 * 定义泛型变量
 * 使传入的类型与返回的类型保持一直
 * 一种特殊的变量，只用于表示类型而不是值
 * 格式: function 方法名<类型变量名>(参数名: 类型变量名): 类型变量名 { 函数体 }
 */
// 这里类型变量为T，参数类型为T，返回类型为T
// 参数和返回类型，都是T。也就是参数类型和返回类型必须保持一直
// function identity<T>(arg: T): T {
//   return arg;
// }
// 定义泛型之后的使用 函数名 <类型变量值>( 参数 )
// console.log(identity<string>('string'));
// console.log(identity<number>(123));
// console.log(identity<boolean>('string')) // 报错，泛型变量与参数不一致
/**
 * 泛型变量使用
 * 虽然我们可以使用类型变量表示任意类型，但是number是没有array的属性
 * 如果是array的话我们还需要特殊标明
 */
// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);
//   return arg;
// };
// console.log(loggingIdentity([1,2,3,4]))
// console.log(loggingIdentity(1))// 报错
// 另一种声明方法
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length);
//   return arg;
// }
/**
 * 泛型类型函数
 * 定义泛型函数类型格式：
 * function 方法名<类型变量名>(参数名: 类型变量名): 类型变量名 { 函数体 }
 * let 变量名: <类型变量名>(参数名: 类型变量名) => 返回变量名 = { 函数体 }
 */
// function identity<T>(arg: T): T{
//   return arg;
// }
// let myIdentity: <T>(arg:T) => T = identity;
// 也可以使用不同的类型变量名，只要数量和使用方法一致即可
// function identity<T>(arg: T): T{
//   return arg;
// }
// let myIdentity: <U>(arg:U) => U = identity;
// 使用带有调用签名的对象字面量来定义泛型
// function identity<T>(arg:T): T {
//   return arg;
// }
// let myIdentity: {<T>(arg: T):T} = identity;
// 为常见的函数添加泛型
// function reverse<T>(items: T[]): T[]{
//   return items;
// }
/**
 * 泛型接口
 */
// interface GenericIdentityFn{
//   <T>(arg: T):T;
// }
// function identity<T>(arg: T): T{
//   return arg;
// }
// let myIdentity: GenericIdentityFn = identity;
/**
 * 泛型类
 * 使用<>括起泛型，跟在类名后面
 */
// class GenericNumber<T>{
//   zeroValue: T;
//   add: (x:T,y:T) => T;
// }
// let myGenerciNumber = new GenericNumber<number>();
// myGenerciNumber.zeroValue = 0;
// myGenerciNumber.add = function(x,y){return x+y};
/**
 * 泛型约束
 * 用类型变量去继承接口，这样可以做到泛型的一种约束作用
 */
// interface LengthWise {
//   length: number,
// };
// function loggingIdentity<T extends LengthWise>(arg: T): T{
//   console.log(arg.length);
//   return arg;
// }
// loggingIdentity([1,2,3,4]);
// loggingIdentity(3);// 报错
// 在泛型中使用类型参数
// function getProperty <T,K> (obj: T, key: K){
//   return obj[key];
// }
// let x = {a:1,b:2,c:3,d:4};
// getProperty(x,'a');
// getProperty(x,'m');// 报错
/**
 * 错误使用
 */
// 这个例中，泛型之中用于参数，完全可以用any替代
// function foo<T>(arg: T):void{};
// function foo(arg:any):void{};
