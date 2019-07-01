"use strict";
// 枚举类型
/**
 * 当你设置了up为1，那么接下来所有枚举类型都会自增
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
/**
 * 使用枚举类型
 * 未初始化器的枚举不能放置在第一位
 */
var ResponseEnum;
(function (ResponseEnum) {
    ResponseEnum[ResponseEnum["No"] = 0] = "No";
    ResponseEnum[ResponseEnum["Yes"] = 1] = "Yes";
})(ResponseEnum || (ResponseEnum = {}));
function respond(recipient, message) {
    console.log(recipient);
    console.log(message);
}
// respond("Princess Caroline", ResponseEnum.No);
/**
 * 字符串枚举
 * 没有自增行为
 */
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Dowm"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
/**
 * 异构枚举
 * 枚举可以混合字符串和数字类型
 */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
/**
 * 计算的常量成员
 */
// 枚举的第一个成员，没有初始化器，它的值为0
var E;
(function (E) {
    E[E["x"] = 0] = "x";
})(E || (E = {}));
// console.log(E.x)
//枚举成员的第一项为数字0，那么接下来的成员将会自增
var E1;
(function (E1) {
    E1[E1["A"] = 1] = "A";
    E1[E1["B"] = 2] = "B";
    E1[E1["C"] = 3] = "C";
})(E1 || (E1 = {}));
// console.log(E1.A);
// console.log(E1.B);
// console.log(E1.C);
/**
 * 枚举成员可以是其他成员计算而来
 */
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
;
let directions = [
    0 /* Up */,
    1 /* Down */,
    2 /* Left */,
    3 /* Right */
];
console.log(directions);
