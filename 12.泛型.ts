//1.泛型,<T,U>代表T和U是泛型,value传入类型为T,message传入类型为U,返回T
function identity <T, U>(value: T, message: U) : T {
    console.log(message);
    return value;
  }
  console.log(identity(68, "Semlinker"));

//2.约束,指定T必须含有size属性
interface Sizeable {
  size: number;
}
function trace<T extends Sizeable>(arg: T): T {
  console.log(arg.size);//如果不extends接口Sizeable,arg可能没有size,会报错
  return arg;
}

//3.工具