type IntersectionType = { id: number; name: string; } & { age: number };
const mixed: IntersectionType = {
  id: 1,
  name: 'name',
  age: 18
}

//通过交叉类型，使得 IntersectionType 同时拥有了 id、name、age 所有属性