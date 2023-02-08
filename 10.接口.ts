export {}
//定义一个接口
interface Person {
    name: string;
    age: number;
}
//将变量类型设置为接口名,则赋值时内容必须与接口相同,不能多或少
let tom: Person = {
    name: 'Tom',
    age: 25
};


//只读和可选
interface Person2 {
    readonly name: string;
    age?: number;
}
let jack: Person2 = {
    name:'jack'
}


//只读数组,不可使对其使用修改方法,如push
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;



//还允许有其他的任意属性
interface Person3 {
    name: string;
    age?: number; // 这里真实的类型应该为：number | undefined
    [propName: string]: string | number | undefined;
    //允许有更多的属性,但是所有属性都必须是string | number | undefined,包括name和age也要遵守这条
}

let tom2: Person3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};




//绕开属性检查的方法
//鸭式辨型法 
//即用一个变量额外接收?
interface LabeledValue {
    label: string;
  }
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj); // OK ?????
//   printLabel({ size: 10, label: "Size 10 Object" })//错误 多了条属性size


//类型断言
interface Props { 
    name: string; 
    age: number; 
    money?: number;
  }
  
  let p: Props = {
    name: "兔神",
    age: 25,
    money: -100000,
    girl: false//这里多了属性,应该不对
  } as Props; // 但是强行断言,强制认为是props


//索引签名
interface Props2 { 
    name: string; 
    age: number; 
    money?: number;
    [key: string]: any;
  }
  
  let p2: Props2 = {
    name: "兔神",
    age: 25,
    money: -100000,
    girl: false //多了条变量,但是符合索引签名,因此可以
  }; // OK
  





