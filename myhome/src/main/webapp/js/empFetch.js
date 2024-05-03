/**
 * empFetch.js Ajax 기능을 fetch함수 활용.
 * empSvc 객체에 기능을 구현. 메소드 호출.
 */

 document.addEventListener("DOMContentLoaded", initForm); //화면컨텐트가 로딩되면 실행
 
 function initForm(){
	// Ajax호출. 목록출력.
	fetch('../empJson.json') // 반환해주는 결과앖이 promist객체.
		.then(result => result.json()) //출력스트림(json) -> 객체변환.
		.then(data => {
			data.forEach(emp => {
				let tr = makeRow(emp);
				document.querySelector('#elist').appendChild(tr);
			})
		})
		.catch(err => console.log(err));
		//등록 이벤트 
	document.querySelector('#addBtn').addEventListener('click', addRow);
 }//end of init
 
 function makeRow(emp = {}){
	let props = ['empNo','empName', 'email', 'salary'];
	
	let tr = document.createElement('tr');
	tr.setAttribute('data-no',emp.empNo);
	tr.addEventListener('dblclick',modifyRow);
	props.forEach(prop => {
		let td = document.createElement('td');
		td.innerHTML = emp[prop];
		tr.appendChild(td);
	})
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', deleteRow);
	td.appendChild(btn);
	tr.appendChild(td);

	return tr;
 } //end of makeRow
 
function deleteRow(){
	let eno = this.parentElement.parentElement.dataset.no;
	let tr = this.parentElement.parentElement;

	fetch('../empsave.json?job=delete&empNo=' + eno)
		.then((result) => result.json())
		.then(data => {
			if(data.retCode == 'OK'){
				tr.remove();
				console.log(data);
			}else if(data.retCode == 'NG'){
				alert('처리중 에러발생');
			}
		})
		.catch(err => console.log(err));
 }// end of deleteRow.
 
 //등록이벤트.
 function addRow(){
	// db insert & 화면출력.
	//사원이름(ename), 연락처(phone), 급여(salalry), 입사일자(hire), 이메일(email)
	let ename = document.querySelector('#ename').value;
	let phone = document.querySelector('#ephone').value;
	let email = document.querySelector('#email').value;
	let hire = document.querySelector('#edate').value;
	let salary = document.querySelector('#esalary').value;
	let param = 'job=add&name='+ename+ '&phone=' +phone 
			+ '&salary=' +salary+ '&hire=' +hire+'&email='+ email;
	fetch('../empsave.json', {
		method: 'post',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		body: param
	})
		.then(result => result.json()) 
		.then(data => {
			if(data.retCode == 'OK'){
				let tr = makeRow(data.retVal);
				document.querySelector('#elist').appendChild(tr);
			}	
		})
		.catch(console.log);
 }

function updateRow(){
	let oldTr = this.parentElement.parentElement;
	const empNo = this.parentElement.parentElement.dataset.no; // data-no => dataset.no
	const email = this.parentElement.parentElement.children[2].children[0].value;
	const salary = this.parentElement.parentElement.children[3].children[0].value;
	let param = 'job=edit&empNo=' +empNo+ '&salary=' +salary
				 + '&email='+ email ;		 
	fetch('../empsave.json', {
		method: 'post',
		headers:{'Content-Type': 'application/x-www-form-urlencoded'},
		body: param
	})
		.then(result => result.json()) 
		.then(data => {
			if(data.retCode == 'OK'){
				let newTr = makeRow(data.retVal)
				oldTr.parentElement.replaceChild(newTr, oldTr);
			}
		})
		.catch(err => console.log(err))
 }
 
function modifyRow(){
	let originMail =this.children[2].innerText;
	let originSalary =this.children[3].innerText;
	
	let oldTr = this;
	let newTr = this.cloneNode(true); //복제.
	newTr.querySelector('td:nth-of-type(3)').innerHTML
		= '<input value ="' +originMail+ '">';
	newTr.querySelector('td:nth-of-type(4)').innerHTML 
		= '<input value ="' +originSalary+ '">';
	newTr.querySelector('button').innerText = '수정';
	newTr.querySelector('button').addEventListener('click', updateRow);
	oldTr.parentElement.replaceChild(newTr, oldTr);
 }
 