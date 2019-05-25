/**
 * 测试demo
 * @param person 字符串参数
 * @returns 返回测试
 */
function greeter2(person:string):string {
    return new Date().toString();
};

function test2():string{
    return 'abc';
};

console.log(greeter2('123'));
console.log(test2());
