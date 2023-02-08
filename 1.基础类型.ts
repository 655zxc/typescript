let num:number = 1
let str:string = 'string'
let flag:boolean = true
let arrNumber:number[] = [1,2,3]
let tuple:[number,string] = [1,'2'] //元组的长度和元素类型都已知 只能写两个元素,且第一个num,第二个str
let anyArr:any[] = [1,'2',false]
let a: undefined = undefined;
let b: null = null;

let anyValue:any = []
anyValue = 1
anyValue = '1'
anyValue = false

function funVoid(num:number):void{
    console.log('无返回',num);
}
function funNumber():number{
    console.log('返回number');
    return 1
}
function funAny():any{
    return true
}

//never 程序永远无法运行到函数返回值那一步
// 异常
function error(msg: string): never { // 编译正确
    throw new Error(msg); 
  }
// 死循环
function loopForever(): never { // 编译正确
while (true) {};
}


let valueUnknown:unknown = 1
valueUnknown = true
let testNumber:number = anyValue//any可以赋给任何值
console.log(testNumber);
// testNumber = valueUnknown//unknown不可以