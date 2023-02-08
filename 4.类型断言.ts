const arrayNumber: number[] = [1, 2];
const greaterThan2: number = arrayNumber.find(num => num > 2) as number; 
//找到第一个大于2的,可能是number或undefined
//严格模式下undefined不能赋给number ,因此报错

//加上断言 as number
//强制以number检查
console.log(greaterThan2);



//非空断言(使用时添加)
//加上! 强制排除null | undefined
let mayNullOrUndefinedOrString: null | undefined | string;
mayNullOrUndefinedOrString!.toString(); // ok
// mayNullOrUndefinedOrString.toString(); // ts(2531)


//确定断言(定义时添加)
//加上! 确定变量一定会被赋值
let m!: number;
initialize();

console.log(2 * m); // 报错 m未赋值
function initialize() {
  m = 10;
}


