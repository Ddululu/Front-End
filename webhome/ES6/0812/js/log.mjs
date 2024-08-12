//log.mjs
// export function log(msg) { // 함수나 변수 마다 내보낼 수 있다. (비권장)
//   console.log(msg);
// }
log = (msg) => console.log(msg);
error = (msg) => console.log(msg);
const MIN_VALUE = 100;

// 마지막에 내보내는 것을 한번에 정의할 것을 권장
export { log, error, MIN_VALUE };


