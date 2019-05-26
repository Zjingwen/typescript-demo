/**
 * 接口
 * 可以要求接口必须包含某属性，并且指定属性的类型
 */
function printLabel1(labelledObj:{label:string}){
  console.log(labelledObj.label)
}
let myObj1= {
  size: 10,
  label: 'aaa',
}
printLabel1(myObj1);

/**
 * interface关键字
 */
interface LabelledValue{
  label: string,
};

function printLabel2(labelledObj: LabelledValue){
  console.log(labelledObj.label)
}
let myObj2 = {
  size: 10,
  label: 'aaaa',
};
printLabel2(myObj2);

/**
 * 可选属性
 * 在属性中添加?号，表式可确实的属性
 */
interface SquareConfig{
  color?: string,
  width?: number,
}
function createSquare3(config: SquareConfig): {color: string;area: number}{
  let newSquare = {
    color: 'while',
    area: 100,
  }

  if(config.color) newSquare.color = config.color;
  if(config.width){
    newSquare.area = config.width * config.width;
  } 
  return newSquare;
}
let mySquare = createSquare3({color: 'red',width: 200})
// console.log(mySquare)

/**
 * 只读属性的结构体
 */
interface Point{
  readonly x: number,
  readonly y: number,
};
let p1: Point= {x:10,y:20};
// 错误
// p1.x = 111;

/**
 * ReadonlyArray
 * 只读数组
 */
let a:number[] = [1,2,3,4,5];
let ro: ReadonlyArray<number> = a;
// 所有错误情况
// ro[0] = 1;
// ro.push(1);
// ro.length = 5;
// a = ro;
a = ro as number[];// 逃脱类型检查

/**
 * 当函数可能出现额外属性时，可以用类型断言规避
 */
interface SquareConfig3 {
  color?: string;
  width?: number;
  [propName: string]: any,
}

function createSquare4(config: SquareConfig): { color: string; area: number } {
  return {color: '123', area: 100}
}

let mySquare2 = createSquare4({ colour: "red", width: 100 } as SquareConfig3);

/**
 * 函数类型
 * 创建函数类型的变量
 */
interface SearchFunc {
  (sourec: string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function(sourec:string, subString:string):boolean{
  let result = sourec.search(subString);
  return result > -1;
}

/**
 * 可索引的类型
 * 支持两种类型的索引签名，string和number
 */
interface StringArray{
  [index:number] : string,
};
let myArray: StringArray;
myArray = ['1','2'];
let myStr:string = myArray[0];

/**
 * 类类型
 */
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d:Date){
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}