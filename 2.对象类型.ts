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
function add(x:number,y:number):number;
function add(x:any,y:any):any{
    return x+y
}
