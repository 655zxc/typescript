//1.语法
interface Point {
    x: number;
    y: number;
  }
  
  interface SetPoint {
    (x: number, y: number): void;//函数
  }
  

  type Point2 = {
    x: number;
    y: number;
  };
  
  type SetPoint2 = (x: number, y: number) => void;
  
//2.多次定义



//2.多次定义
interface I1 {
    x:number
}
interface I1 {
    y:number
}//现在I1 有 x y两个属性
let p1:I1 = {
  x:1,
  y:2,
}

//3.扩展
interface I2 extends I1{
  z:number
}

//还有其他扩展方法,类型接口相互扩展,共四种方法