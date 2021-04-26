// node.js 는 typescript를 이해하지 못하기 때문에 javascript코드로 컴파일해야 한다

// interface를 사용함으로써 객체를 넘김
interface Human {
  name: string;
  age: number;
  gender: string;
}
const person = {
  name: 'sangwon',
  age: 30,
  gender: 'female',
};

// ?를 붙임으로써 선택적 아규먼트가 됨
// type을 정의할 수 도 있다.
// function을 string으로 반환하도록 설정할 수 있다.
const Sayhi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}`;
};

// Sayhi(name, age, gender);
// Sayhi(name, age); 오류 = 3개의 아규먼트로 설정했으니  2개는 오류로 뜸
//                        typescript는 좀 더 규칙에 엄격함
console.log(Sayhi(person));

export {};
