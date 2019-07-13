"use strict";
// 命名空间
/**
 * 让代码不与其他命名产生冲突
 * namespace [空间名]{
 *  export // 可调用的模块
 * }
 */
// namespace Validation{
//   export interface StringValidator{
//     isAcceptables(s:string): boolean;
//   }
//   let lettersRegexp = /^[A-Za-z]+$/;
//   let numberRegexp = /^[0-9]+$/;
//   export class LettersOnlyValidator implements StringValidator {
//     isAcceptables(s:string){
//       return lettersRegexp.test(s);
//     }
//   }
//   export class ZipCodeValidator implements StringValidator{
//     isAcceptables(s:string){
//       return s.length === 5 && numberRegexp.test(s);
//     }
//   }
// }
// let validators: {[s:string]:Validation.StringValidator} = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();
// let strings = ['Hellp','98052','101'];
// for (let s of strings) {
//   for(let name in validators){
//     let isMatch = validators[name].isAcceptables(s);
//     console.log(`${s} ${isMatch ? "matches":"does not match"} '${name}'`)
//   }
// }
/**
 * 别名
 * 简化命名空间操作的方法
 */
// namespace Shapes {
//   export namespace Polygons{
//     export class Triangle {}
//     export class Square {}
//   }
// }
// import polygons = Shapes.Polygons;
// let sq = new polygons.Square();
