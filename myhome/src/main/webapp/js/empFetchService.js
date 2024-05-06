/**
 * empFetchService.js Ajax 기능을 fetch함수 활용.
 * empSvc 객체에 기능을 구현. 메소드 호출.
 */

 document.addEventListener("DOMContentLoaded", initForm); //화면컨텐트가 로딩되면 실행
 function initForm(){
	// Ajax호출. 목록출력.
	svc.empList(result => {
		result.forEach(emp => {
			let tr = makeRow(emp);
			document.querySelector('#elist').appendChild(tr);
		})
	}, // successCall에 들어가는 함수
		err => console.log(err) // errorCall로 전달된 함수
	);
	//등록 이벤트 
	document.querySelector('#addBtn').addEventListener('click', addRow);
	document.querySelector('#selectDelBtn').addEventListener('click', chkDelRow);
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
	
	//체크박스
	td = document.createElement('td');
	let chk = document.createElement('input');
	chk.setAttribute('type', 'checkbox');
	td.appendChild(chk);
	tr.appendChild(td);
	document.querySelector('#allcheck').addEventListener('change',function(){
	 	let inp = this
	 	document.querySelectorAll('#elist input[type="checkbox"]').forEach(function(item){
		 	item.checked = inp.checked;
	 })

 })
	return tr;
 } //end of makeRow
 
 function chkDelRow(){
	const chkRow = document.querySelectorAll('#elist input[type="checkbox"]:checked');
	chkRow.forEach(chk => {
		let tr = chk.parentElement.parentElement;
		let eno = tr.dataset.no;
		
		svc.delEmp(eno,
		data => {
			if(data.retCode == 'OK'){
					tr.remove();
			}
		},
			err =>console.log(err)
		);
	});
 }
 
function deleteRow(){
	let tr = this.parentElement.parentElement;
	let eno = tr.dataset.no;
	
	svc.delEmp(eno,
	data => {
		if(data.retCode == 'OK'){
				tr.remove();
		}
	},
		err =>console.log(err)
	)
 }// end of deleteRow.
 
 //등록이벤트.
 function addRow(){
	// db insert & 화면출력.
	//사원이름(ename), 연락처(phone), 급여(salalry), 입사일자(hire), 이메일(email)

	let paramObj = {
		job: 'add',
		name: document.querySelector('#ename').value,
		phone: document.querySelector('#ephone').value,
		hire: document.querySelector('#edate').value,
		email: document.querySelector('#email').value,
		salary: document.querySelector('#esalary').value
	}// param으로 등록하기위한 객체.
	
	svc.addEmp(paramObj, 
	data => {
		if(data.retCode == 'OK'){
			let tr = makeRow(data.retVal);
			document.querySelector('#elist').appendChild(tr);
		}	
	},
		err =>console.log(err)
	)
	
 }

function updateRow(){
	let oldTr = this.parentElement.parentElement;
	const empNo = this.parentElement.parentElement.dataset.no; // data-no => dataset.no
	const email = this.parentElement.parentElement.children[2].children[0].value;
	const salary = this.parentElement.parentElement.children[3].children[0].value;
				 
	let paramObj = {
		empNo,
		email,
		salary,
	}
	svc.editEmp(paramObj,
		data => {
			if(data.retCode == 'OK'){
				let newTr = makeRow(data.retVal)
				oldTr.parentElement.replaceChild(newTr, oldTr);
			}
		},
		err => console.log(err)
	
	)
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
 
 