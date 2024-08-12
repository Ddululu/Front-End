//example.js
//export data

export var color = 'red';
export let name = 'Michael';
export const magicNumer = 7;

//export function
export function additional(num1, num2) {
  return num1 + num2;
}

// export class
export class Rectangle {
  // javascript에서 java와 유사하게 클래스를 만들 수 있다.
  // 생성자는 constructor() {}
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}

// 지금 이 함수는 export 하지 않아 비공개인 함수입니다.
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

export { multiply };