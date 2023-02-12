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
