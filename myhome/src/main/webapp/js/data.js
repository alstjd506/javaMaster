/**
 * data.js
 */

const members = [
	{memNo : 1001, memName: '홍길동', memPnt: 90},
	{memNo : 1002, memName: '김길동', memPnt: 80},
	{memNo : 1003, memName: '박길동', memPnt: 70},
	
];
//배열 for.
// for(let mem of members){}

members.forEach(function(item, idx, ary){
	if(item.memPnt > 80)
		console.log(item, idx, ary)
	
	
});