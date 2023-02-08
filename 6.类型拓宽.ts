export {}
let string1 = 'is string'
let num1 = 1
//不指定类型时,let定义的变量的类型,会从'is string'拓宽为其父类型string
//它们推断出来的类型就是指定的初始值字面量类型拓宽后的类型,这就是字面量类型拓宽

const string2 = 'is string'
const num2 = 1
//而const由于不可变,类型就是'is string'


let str = 'this is string'; // 类型是 string
let strFun = (str = 'this is string') => str; // 这个函数时匿名函数,赋值给strFun,strFun的类型是 (str?: string) => string;
const specifiedStr = 'this is string'; // 类型是 'this is string'
let str2 = specifiedStr; // 类型是 'string'
let strFun2 = (str = specifiedStr) => str; // 类型是 (str?: string) => string;


const arr = ['x', 1];