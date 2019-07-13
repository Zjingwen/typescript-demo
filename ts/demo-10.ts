/**
 * 模块
 * 内部模块 == 命名空间
 * 外部模块 == 模块
 * 
 * 模块只在自身的作用域执行。
 * 一个模块的变量、函数、类等等在模块外部是不可见的，除非明确用export形式之一导出。
 * 如果想使用其他模块的变量、函数、类、接口等，可以使用import形式之一导入
 * 
 * 两个模块之间的关系是通过exports和imports建立的
 * 
 * 任何包含顶级import 或者 export 的文件都被视为一个模块。如果一个文件不带有顶级的import 或者 export 声明，那么它的内容被视为全局可见。
 */

/**
 * 导出
 * 任何声明都能够通过添加export关键字来导出
 */

// 默认形式
// export interface StringValidator  {
//   isAcceptable(s: string): boolean,
// }
// export const numberRegexp = /^[0-9]+$/;
// export class ZipCodeValidator implements StringValidator{
//   isAcceptable(s:string){
//     return s.length === 5 && numberRegexp.test(s)
//   }
// }

// 如果需要对导出部分重命名，可以使用`export {原名 as 重命名}`
// interface StringValidator {
//   isAcceptable(s: string): boolean,
// }
// const numberRegexp = /^[0-9]+$/;
// class ZipCodeValidator implements StringValidator {
//   isAcceptable(s: string){
//     return s.length === 5 && numberRegexp.test(s);
//   }
// }
// export {ZipCodeValidator};
// export {ZipCodeValidator as mainValidator};

// 重新导出，只导出某个模块的部分内容
// 重新导出功能并不会在当前模块倒入那个模块或定义一个新的局部变量

// 导出原先的模块，并且重命名
// export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";

// 或者用一个模块，包裹多个模块，`export * from "module"`;
// export * from './StringValidator';
// export * from './LettersOnlyValidator';
// export * from './ZipCideValidator';

/**
 * 导入
 * 用import形式之一将其他模块中的内容导出
 */
// import {ZipCodeValidator} from "./demo-10-export";

// 导出重命名
// import {ZipCodeValidator as ZCV} from './demo-10-export';

// 将整个模块倒入，并通过它来访问模块导出部分
// import * as validator from './demo-10-export';
// validator.ZipCodeValidator;
// validator.numberRegexp

// 带有副作用的倒入，会将模块变成全局状态
// import './demo-10-export';

/**
 * 默认导出
 * 利用关键字default标记，并且一个模块只有一个default
 */

// 模块A
// declare let $: string;
// $ = 'jq'
// export default $;

// 倒入模块
// import $ from './demo-10-export';
// console.log($);

/**
 * `export = `
 *  定义一个模块导出对象，对象可以是类、接口、命名空间、函数、枚举等
 */
// let numberRegexp = /^[0-9]+$/;
// class ZipCideValidator {
//   isAcceptable(s: string){
//     return s.length === 5 && numberRegexp.test(s);
//   }
// }

// export = ZipCideValidator;

/**
 * 可选模块加载
 * 可以在某种条件下才加载某个模块
 * 核心是使用 `import id = require(...)`可以让我们访问导出模块的类型，通过`require`来实现动态调用
 */

// nodejs动态加载
// declare function require(moduleName: string): any;
// import { ZipCodeValidator as Zip} from './demo-10-export';
// if(true){
//   let ZipCideValidator: typeof Zip = require("./demo-10-export");
// }

// requirejs动态加载
// declare function require(moduleName:string[], onLoad: (...args: any[])=>void) :void ;
// import * as Zip from './demo-10-export';
// if(true){
//   require(["./demo-10-export"],(ZipCodeValidator: typeof Zip)=>{
//   })
// }

// Systemjs动态加载模块
// declare const System: any;
// import {ZipCodeValidator as Zip} from './demo-10-export';
// if(true){
//   System.import("./demo-10-export").then((ZipCodeValidator: typeof Zip) => {
//   })
// }

/**
 * 使用其他的javascript库
 * 使用非typescript的库时，我们需要声明类库所暴漏出来的api
 * 通常实在.d.ts文件定义
 */

/**
 * 外部模块
 */
// 用顶级的export新建一个.d.ts文件
// 
// import * as URL from 'url';
// let myUrl = URL.parse("http://www.typescriptlang.org");
// console.log(myUrl);

/* 引入的文件 */
// declare module "url"{
//   export interface Url {
//     protocol?: string,
//     hostname?: string,
//     pathname?: string,
//   }

//   export function parse(
//     urlStr: string,
//     parseQueryString?: string,
//     slashesDenoteHost?: string,
//   ):Url;
// }

// declare module "path"{
//   export function normalize(p:string):string;
//   export function join(...paths:any[]): string;
//   export let sep: string;
// }

/**
 * 外部模块简写，这样的话每个导出的类型都是any类型
 */
// declare module "hot-new-module";

/**
 * 模块声明通配符
 * 在systemJS和AMD模式下，倒入非javascript内容，需要一个前缀或者后缀来标示
 */
// declare module "*!text"{
//   const content: string;
//   export default content;
// }

// declare module "json!*"{
//   const value: any;
//   export default value;
// }

// import fileContent form "./xxx.text!text";
// import data from "json!http://example.com/data.json";

/**
 * UMD模块
 * 有些模块被设计成支持兼容多个模块加载器，或者使用全局变量
 */

// 导入形式
// export function isPrime(x:number): boolean;
// export as namespace mathLib;

// 使用形式
// import {isPrime} from 'math-lib'
// isPrime(2);
// mathLib.isPrime(2);/// error

/**
 * 尽可能的在顶层导出
 * 帮助减少用户使用的难度，一个默认的导出也能起到这个效果
 * 如果要导出多个对象，把它们放在顶层里导出
 * 明确的列出导入的名字
 * 当你要导出大量内容时，使用命名空间导入模式
 * 使用重新导出进行扩展
 * 模块里不要使用命名空间
 */