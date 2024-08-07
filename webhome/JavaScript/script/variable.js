// var로 선언하는 변수는 이미 초기화 되었더라도 다시 초기화가 가능한 문제가 있었다.
// var age = 28;
// console.log(age);
// var age = 'Hello,World';
// console.log(age);

// ES6부터는 var 대신 let(변수) 와 const (상수) 로 선언한다.
// let으로 선언한 변수는 값 재할당만 가능하다 -> 하나의 변수명만 사용 가능.
let age = 28;
// let age = 'Hello,World'; // SyntaxError: Identifier 'age' has already been declared
age = 'Hello, World!'
console.log(age);

// const로 선언한 변수는 값의 재할당이 불가능하다.
const date = '2024-08-07';
//date = '2024-08-08'; 
console.log(date); // TypeError: Assignment to constant variable.

let var1;
console.log(var1) // undefined, 값이 할당되지 않은 변수는 undefined로 초기화

var1 = 10; // number literal
var1 += 20;
console.log(var1); // number literal 간의 +는 더하기 연산을 한다.
console.log(var1[0], var1[1]); // undefined -> 아직 배열형이아님

// 다른 리터럴 간의 +는 연이어 저장한다. (char 형 배열로 저장해 문자열을 더한 것으로 보인다.)
var1 += '한국';
console.log(var1);  // 30한국
console.log(var1[0], var1[2], var1[3]); //3 한 국

var1 += [1, 2, 3]; // array literal
console.log(var1); // 30한국1,2,3
console.log(var1[0], var1[2], var1[3]); // 3 한 국

// 자바스크립트는 데이터 간 자동 형변환을 지원한다.
var2 = "10" - 10; //"문자형 10" - 숫자형 10 에서 문자형을 숫자형으로 바꾼 후 연산
console.log(var2);


