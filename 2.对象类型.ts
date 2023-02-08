let object:object = {}
// object = 1


//数组


//函数
function fun1(x:number):number{
    return 1
}
const fun2 = function(x:number):number{
    return 1
}
function fun3(x:number,y?:number):number{
    return y?y:x
}
//剩余参数只能是数组类型
function fun4(...numbers:number[]):number{
    console.log(numbers);
    
    return 1
}
fun4(1,2,3,4)

//重载
// https://segmentfault.com/a/1190000042004610
type Types = number | string;
// 重载签名
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: string, y: number): string;
function add(x: number, y: string): string;
//重载时,写出所有可能的输入输出组合
function add(x: Types, y: Types) {//给每个参数添加类型之后，可以不用给函数本身添加返回值类型，因为TypeScript能根据返回语句自动推断出返回值类型
    if (typeof x === 'string' || typeof y === 'string') {
        return x.toString() + y.toString();
    }
    return x + y;
}
const result = add('hearts', ' spades');//这里会找到31行,得出result属于string
result.split(' ');//如果没有31行,这里会报错,无法判断result是number还是string
