/**
 * 泛型
 */
function identity1(arg: number): number{
  return arg;
}

function identity2(arg: any): any{
  return arg;
}

// 返回类型与传入类型一直，这就是泛型的定义方法
function identity3<T>(arg:T):T{
  return arg;
}

// 泛型调用
let output = identity3<string>("myString");

/**
 * 泛型变量
 */
function loggingIdentity1<T>(arg: T[]): T[]{
  console.log(arg.length);
  return arg;
}
function loggingIdentity2<T>(arg: Array<T>): Array<T>{
  console.log(arg.length);
  return arg;
}

/**
 * 泛型类型
 */
function identity4<T>(arg: T):T{
  return arg;
}
let myIdentity4: <T>(arg: T) => T = identity4;

function identity5<T>(arg: T):T{
  return arg;
}
let myIdentity5:<U>(arg: U) => U = identity5;

function identity6<T>(arg: T): T{
  return arg;
}
let myIdentity6: {<T>(arg: T):T} = identity6;

interface GenericIdentityFn{
  <T>(arg: T): T;
}

function identity7<T>(arg: T): T{
  return arg;
}

let myIdentity7: GenericIdentityFn = identity7;

/**
 * 泛类型
 */
class GenericNumber<T>{
  zeroValue: T;
  add: (x: T,y: T) => T;
  constructor(zeroValue: T,add:(x: T,y:T)=>T) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x,y){return x + y};

/**
 * 在泛类型约束中使用类型参数
 */
// function getProperty(obj: T, key: K) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // oka

/**
 * 使用原型属性推断并约束构造函数与类实例的关系
 */
// class BeeKeeper{
//   hasMask: boolean;
// }

// class ZooKeeper{
//   nameTag: string;
// }

// class Animal {
//   numLegs: number;
// }

// class Bee extends Animal{
//   keeper: BeeKeeper;
// }

// class Lion extends Animal{
//   keeper: ZooKeeper;
// }

// function createInstance<A extends Animal>(c: new ()=>A):A{
//   return new c();
// }

// createInstance(Lion).keeper.nameTag;
// createInstance(Bee).keeper.hasMask;