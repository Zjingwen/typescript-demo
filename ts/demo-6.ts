// 枚举类型

/**
 * 当你设置了up为1，那么接下来所有枚举类型都会自增
 */
enum Direction {
  Up = 1,// 设置默认值
  Down,// 不设置默认值
  Left,
  Right,
}

/**
 * 使用枚举类型
 * 未初始化器的枚举不能放置在第一位
 */
enum ResponseEnum {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: ResponseEnum): void{
  console.log(recipient);
  console.log(message);
}

// respond("Princess Caroline", ResponseEnum.No);

/**
 * 字符串枚举
 * 没有自增行为
 */
enum Direction2 {
  Up = 'UP',
  Dowm = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

/**
 * 异构枚举
 * 枚举可以混合字符串和数字类型
 */
enum BooleanLikeHeterogeneousEnum{
  No = 0,
  Yes = "YES",
}

/**
 * 计算的常量成员
 */

// 枚举的第一个成员，没有初始化器，它的值为0
enum E { x }
// console.log(E.x)

//枚举成员的第一项为数字0，那么接下来的成员将会自增
enum E1{
  A = 1,
  B,
  C
}
// console.log(E1.A);
// console.log(E1.B);
// console.log(E1.C);

/**
 * 枚举成员可以是其他成员计算而来
 */

enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = "123".length,
}

/**
 * const 枚举
 */
const enum Enum2{
  A = 1,
  B = A * 2,
}

const enum Direction3 {
  Up,
  Down,
  Left,
  Right,
};

let directions = [
  Direction3.Up,
  Direction3.Down,
  Direction3.Left,
  Direction3.Right
];
console.log(directions);