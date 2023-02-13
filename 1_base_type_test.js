// 기본 타입
// string, number, boolean, bigint, null, undefined,[], {} ...
var familyName = 'lee';
var familyNames = ['lee', 'kim', 'park'];
var profile = { age: 20 };
// 유니온 Union 타입
var unionTest = 'lee';
var typedefTest = 'lee';
var tupleTest = [100, true, 'str'];
var objTypeTest = {
    name: 'lee',
    age: 20,
    married: true
};
var strObjTypeTest = {
    name: 'lee',
    age: '20',
    married: 'true',
};
var literalTypeTest = 'lee';
// 함수 타입
function mul1(x) {
    return x * 2;
}
// Union을 모호하게 사용 -> 컴파일 오류
function mul2(x) {
    //return x * 2 // Error : The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
}
// Union을 명시적 사용
function mul3(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
}
// 클래스 맴버 타입
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var who;
// Narrowing 1 - typeof
function printMsg1(msg) {
    if (typeof msg === "string") {
        console.log(msg);
    }
    else if (typeof msg === "undefined") {
        // Do Nothing
    }
    else {
        // Do Nothing
    }
}
// Narrowing 2 - check undefined
function printMsg2(msg) {
    if (msg && typeof msg === "string") {
        console.log(msg);
    }
}
// Narrowing 3 - assertion
function printMsg3(msg) {
    console.log(msg);
}
function printMsg4(msg) {
    if ("swim" in msg) {
        console.log(msg.swim);
    }
    else if ("fly" in msg) {
        console.log(msg.fly);
    }
    else {
        // Do Nothing
    }
}
// Narrowing 5 - instanceof
var Knight = /** @class */ (function () {
    function Knight() {
    }
    Knight.prototype.Sword = function () { return "Knight - Sword"; };
    return Knight;
}());
var Mage = /** @class */ (function () {
    function Mage() {
    }
    Mage.prototype.Magic = function () { return "Mage - Magic"; };
    return Mage;
}());
function printMsg5(msg) {
    if (msg instanceof Knight) {
        console.log(msg.Sword());
    }
    else if (msg instanceof Mage) {
        console.log(msg.Magic());
    }
    else {
        // Do Nothing
    }
}
function printMsg6(msg) {
    if (msg.where === 'sea') {
        console.log(msg.swim);
    }
    else if (msg.where === 'sky') {
        console.log(msg.fly);
    }
    else {
        // Do Nothing
    }
}
