/**
 *  변수와 자료형
 * 
 * 기본타입
 * - undefined
 * - number
 * - string
 * - boolean
 * 
 * 객체
 * - object
 * - function
 * 
 */

console.log("=== 기본타입(undefined, number, string, boolean) ======")
// myVariable // reference error

var u = undefined; // var u; 동일, 자바스크립트는 정의와 선언을 구분 하지 않는다.
var i = 10;
var s = 'Hello World';
var b = true;

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log("=== 객체타입(object) ======")


console.log("=== 객체타입(function) ======")