"use strict";
/**
 * 测试demo
 * @param person 字符串参数
 * @returns 返回测试
 */
function greeter(person) {
    console.log("Hello, " + person);
    return new Date().toString();
}
;
console.log(greeter('123'));
function test(main) {
    console.log(main);
    return 'abc';
}
;
console.log(test(123));
console.log(test(456));
