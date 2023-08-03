//별표 ****

// 1. 비교 연산을 했을 때
let x = 3;
let y = 5;
console.log(x > y);

// 2. 논리연산을 했을 때 각 비교값이 true나 false인 경우
// (ture나 false가 아닌 경우 단락회로평가가 일어남)
let x = true;
let y = false;
console.log(x && y);

// 3. true나 false로 평가되는 것들
// if(value) {
//    // value가 true일 때 실행
//    // 그렇다면 어떤 value가 true일까?
// }

if (Boolean("hello")) {
  console.log("실행되었음!"); // 실행되었음이 출력되는가?
}

if ("hello") {
  console.log("실행되었음!"); // 실행되었음이 출력되는가?
}

Boolean("hello"); // true
Boolean(""); // false
Boolean(" "); // true
Boolean(0); // false
Boolean(1); // true
Boolean(-1); // true
Boolean(100); // true
