"use strict";
/**
 * 接口
 * 可以要求接口必须包含某属性，并且指定属性的类型
 */
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
let myObj1 = {
    size: 10,
    label: 'aaa',
};
printLabel1(myObj1);
;
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
let myObj2 = {
    size: 10,
    label: 'aaaa',
};
printLabel2(myObj2);
function createSquare3(config) {
    let newSquare = {
        color: 'while',
        area: 100,
    };
    if (config.color)
        newSquare.color = config.color;
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare3({ color: 'red', width: 200 });
;
let p1 = { x: 10, y: 20 };
// 错误
// p1.x = 111;
/**
 * ReadonlyArray
 * 只读数组
 */
let a = [1, 2, 3, 4, 5];
let ro = a;
// 所有错误情况
// ro[0] = 1;
// ro.push(1);
// ro.length = 5;
// a = ro;
a = ro; // 逃脱类型检查
function createSquare4(config) {
    return { color: '123', area: 100 };
}
let mySquare2 = createSquare4({ colour: "red", width: 100 });
let mySearch;
mySearch = function (sourec, subString) {
    let result = sourec.search(subString);
    return result > -1;
};
;
let myArray;
myArray = ['1', '2'];
let myStr = myArray[0];
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) { }
}
