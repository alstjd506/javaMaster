/**
 *  array.js
 */
const ary = []; //new Array();
ary.push('apple');
ary.push(['banna', 'cherry']);
ary.push({name: "홍길동", age: 20});

console.log(ary);

const fruits = []; 
fruits.push({name: "사과", price: 1000});
fruits.push({name: "수박", price: 5000});
fruits.pop(); //뒤에서 없애기
fruits.unshift({name: "수박", price: 5000});
fruits.shift(); //앞에서 없애기
fruits.push({name: "수박", price: 5000});
// [사과, 수박] splice 1번쨰 위치에 참외값으로 수정하겟습니다.
fruits.splice(1, 0, {name:'참외', price:3000}); //추가, 수정, 삭제가 가능한 메소드 /이건 추가
fruits.splice(1, 1, {name:'참외', price:5000}); //추가, 수정, 삭제가 가능한 메소드 / 이건 수정
fruits.splice(1, 1); //추가, 수정, 삭제가 가능한 메소드 /대체할 값을 넣어주지 않으면 삭제


console.log(fruits);