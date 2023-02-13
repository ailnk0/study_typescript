// 기본 타입
// string, number, boolean, bigint, null, undefined,[], {} ...
let familyName: string = 'lee';
let familyNames: string[] = ['lee', 'kim', 'park']
let profile: { age: number } = { age: 20 }

// 유니온 Union 타입
let unionTest: string | number = 'lee';

// 미리 정의한 타입
type PreDefType = string | number;
let typedefTest: PreDefType = 'lee';

// Tuple 타입
type TupleType = [number, boolean, string];
let tupleTest: TupleType = [100, true, 'str']

// Obj 타입
type personType = {
  name?: string,
  age: number,
  married: boolean,
}
let objTypeTest: personType = {
  name: 'lee',
  age: 20,
  married: true
}

// 일관된 key 타입을 가진 obj 타입
type personStrType = {
  [key: string]: string,
}
let strObjTypeTest: personStrType = {
  name: 'lee',
  age: '20',
  married: 'true',
}

// 리터럴 타입
type LiteralType = 'lee' | 'kim' | 'park';
let literalTypeTest: LiteralType = 'lee';

// 함수 타입
function mul1(x: number): number {
  return x * 2
}

// Union을 모호하게 사용 -> 컴파일 오류
function mul2(x: number | string) {
  //return x * 2 // Error : The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
}

// Union을 명시적 사용
function mul3(x: number | string) {
  if (typeof x === 'number') {
    return x * 2
  }
}

// 클래스 맴버 타입
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

// Intersection 타입 - 엄격
type Pat = { name: string };
//type Pat = { age: number }; // Error
type Cat = { age: number } & Pat;

// Never 타입
type God = { where: string }
type Devil = { where: number }
let who: God & Devil
//who = { where: 'here' } // Error

// Interface 타입 - 유연
interface Human {
  name: string
}
interface Human {
  age: number
}
interface Student extends Human {
  grade: number
}

// Narrowing 1 - typeof
function printMsg1(msg: string | undefined) {
  if (typeof msg === "string") {
    console.log(msg);
  } else if (typeof msg === "undefined") {
    // Do Nothing
  } else {
    // Do Nothing
  }
}

// Narrowing 2 - check undefined
function printMsg2(msg: string | undefined) {
  if (msg && typeof msg === "string") {
    console.log(msg);
  }
}

// Narrowing 3 - assertion
function printMsg3(msg: string | undefined) {
  console.log(msg as string);
}

// Narrowing 4 - in
type Fish = { swim: string };
type Bird = { fly: string };
function printMsg4(msg: Fish | Bird) {
  if ("swim" in msg) {
    console.log(msg.swim);
  } else if ("fly" in msg) {
    console.log(msg.fly);
  } else {
    // Do Nothing
  }
}

// Narrowing 5 - instanceof
class Knight {
  Sword(): string { return "Knight - Sword"; }
}
class Mage {
  Magic(): string { return "Mage - Magic"; }
}
function printMsg5(msg: Knight | Mage) {
  if (msg instanceof Knight) {
    console.log(msg.Sword());
  } else if (msg instanceof Mage) {
    console.log(msg.Magic());
  } else {
    // Do Nothing
  }
}

// Narrowing 6 - literal type
type Fish2 = { swim: string, where: 'sea' };
type Bird2 = { fly: string, where: 'sky' };
function printMsg6(msg: Fish2 | Bird2) {
  if (msg.where === 'sea') {
    console.log(msg.swim);
  } else if (msg.where === 'sky') {
    console.log(msg.fly);
  } else {
    // Do Nothing
  }
}
