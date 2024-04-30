/**
 * array1.j
 */
empList.forEach((item, idx) => {
	if(item.first_name.indexOf('c') >= 0){
		console.log(item);
	}
})

let newAry = empList.filter((item, idx, ary) => {
	return (idx+1) == ary.length;
});
// A -> A' 로 담고싶을때 map
newAry = empList.map((item, idx, ary) => {
	const obj = {
		no: item.id,
		name: item.first_name + "-" + item.last_name,
		email: item.email
	}
	return obj;
});
console.log(newAry);

console.clear();
let result = empList.reduce((acc, curVal) => {
	if(curVal.gender === 'Male'){
		acc.push(curVal);
	}
	return acc;
}, []);
console.log(result);


const array1 = [1,7,9,4,6,5,7,2];
const initiaValue = 0;
const sumWithInitial = array1.reduce(function(accumulator, currentValue){
	console.log(`accumulator=> ${accumulator}, currentValue=> ${currentValue}`)
	return accumulator + currentValue
}, initiaValue);
console.log(sumWithInitial);


const array2 = [1,7,9,4,6,5,7,2];
const init = 0;
const maxInitial = array2.reduce(function(acc, cur){
	console.log(`acc=> ${acc}, cur=> ${cur}`)
	return acc > cur ? acc : cur;
},init);
console.log(maxInitial);

const array3 = [1,7,9,4,6,5,7,2];
const init1 = 0;
const minInitial = array2.reduce(function(acc, cur){
	console.log(`acc=> ${acc}, cur=> ${cur}`)
	return acc < cur ? acc : cur;
});
console.log(minInitial);

// String.prototype.indexOf(' ')=> 찾는 값의 인덱스를 반환.
// Array.prototype.indexOf(' ')=> 찾는 값의 인덱스를 반환.
console.log("abcde".indexOf("c"));
console.log([1,2,3,4,5].indexOf(3));

let genderAry = [];
empList.forEach(emp => {
	if(genderAry.indexOf(emp.gender) === -1){
		genderAry.push(emp.gender);
	}
});
console.log(genderAry);