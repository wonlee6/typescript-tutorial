"use strict";
// node.js 는 typescript를 이해하지 못하기 때문에 javascript코드로 컴파일해야 한다
Object.defineProperty(exports, "__esModule", { value: true });
const name = 'sangwon', age = 30, gender = 'female';
// ?를 붙임으로써 선택적 아규먼트가 됨
const Sayhi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
};
// Sayhi(name, age, gender);
// Sayhi(name, age); 오류 = 3개의 아규먼트로 설정했으니  2개는 오류로 뜸
//                        typescript는 좀 더 규칙에 엄격함
Sayhi(name, age);
//# sourceMappingURL=index.js.map