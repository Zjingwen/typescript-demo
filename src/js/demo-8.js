"use strict";
/**
 * Symbols
 */
// symbol类型的值时通过Symbol构造函数创建的
// let sym1 = Symbol();
// let sym2 = Symbol("key");
// symbol时不可改变且唯一的
// let sym1 = Symbol("key");
// let sym2 = Symbol("key");
// console.log(sym1 === sym2);
// symbols也是可以被用做对象属性的键
// let sym = Symbol();
// let obj = {
//   [sym]: "value"
// }
// console.log(obj[sym]); // ??类型“symbol”不能作为索引类型使用 
// 可以与计算出的属性名声明结合来声明对象的属性和类成员
// const getClassNameSymbol = Symbol();
// class C {
//   [getClassNameSymbol](){
//     return "C";
//   }
// }
// let c = new C();
// let className = c[getClassNameSymbol]();
// Symbol.hasInstance
// 方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。
// Symbol.isConcatSpreadable
// 布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。
// Symbol.iterator
// 方法，被for-of语句调用。返回对象的默认迭代器。
// Symbol.match
// 方法，被String.prototype.match调用。正则表达式用来匹配字符串。
// Symbol.replace
// 方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。
// Symbol.search
// 方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。
// Symbol.species
// 函数值，为一个构造函数。用来创建派生对象。
// Symbol.split
// 方法，被String.prototype.split调用。正则表达式来用分割字符串。
// Symbol.toPrimitive
// 方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。
// Symbol.toStringTag
// 方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。
// Symbol.unscopables
// 对象，它自己拥有的属性会被with作用域排除在外。
