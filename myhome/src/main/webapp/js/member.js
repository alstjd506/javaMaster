/**
 * member.js
 */
//추가 클릭 이벤트 등록.
// 사용자의 입력값 3개 = > tr > td * 3 => tbody 하위요소 추가.


 document.querySelector('#addMember').addEventListener('click', addMemberFnc) ;
	function addMemberFnc(){
		let NoValue = document.querySelector('#memberNo').value;
		let NameValue = document.querySelector('#memberName').value;
		let PointValue = document.querySelector('#memberPoint').value;
		let tr = makeRow(mem);
		let tbody = document.querySelector('table#tlist tbody');
		tbody.appendChild(tr);
		
	}
	//member 정보를 활용 tr 반환.

	function makeRow(member = {NoValue, NameValue, PointValue}){
		let tr = document.createElement('tr');
		tr.addEventListener('click', function(e){
			
			//tr(this)의 자식요소 children.
		  	document.querySelector('#memberNo').value = tr.children[0].innerText;
			document.querySelector('#memberName').value = tr.children[1].innerText;
			document.querySelector('#memberPoint').value = tr.children[2].innerText;	
		},true)
		
		for (let prop in member){
			let td = document.createElement('td');
			td.innerText = member[prop]; // mem의 속성을 하나씩 받아온다.
			tr.appendChild(td);
		}
		// <td><button>삭제<button></td>
		let td = document.createElement('td');
		let btn = document.createElement('button');
		btn.innerText = '삭제';
		td.appendChild(btn);
		tr.appendChild(td);
		btn.addEventListener('click', deleteRow);
	
		//체크박스
		td = document.createElement('td');
		let chk = document.createElement('input');
		chk.setAttribute('type', 'checkbox');
		chk.addEventListener('change', changeRow);
		td.appendChild(chk);
		tr.appendChild(td);
		
		return tr;
	}
	//members 배열의 갯수만큼 tr 생성.
members.forEach(function(item) {
	let tr = makeRow(item);
	 document.querySelector('table#tlist tbody').appendChild(tr);
		
});

function deleteRow(e) {
	e.stopPropagation(); // 상/하위 요소로 이벤트 차단.
	e.target.parentElement.parentElement.remove();
};
	
function changeRow(){
	//thead input[type="checkbox"]
	// this => <input type ="checkbox" checked>라면 setAttribute는 true, getAttribute는 false 반환
	// checkbox일 경우
	document.querySelector('thead input[type="checkbox"]').addEventListener('change',function(){
		// event 핸들러 => this
		//thead true 또는 false값을 
		let inp = this;
		document.querySelectorAll('tbody input[type="checkbox"]').forEach(function(item) {
			console.log(item);
  		 item.checked = inp.checked; 
  		 })
	})
};

	
	// document.querySelector('table#tlist tbody tr')
	
	
	/* document.addEventListener('mousemove', function(e){
		console.log(e.pageX,e.pageY);
	}) */


 