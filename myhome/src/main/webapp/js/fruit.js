/**
 * fruit.js
 */
 console.log(document.querySelector('button'));
	// <!-- document.querySelector('button').addEventListener('click', function() {
	 	// 요소 생성(createElement)
		// 자식요소(appendChild)
	//	let li = document.createElement('li');
	//	li.innerText = '수박(3000);'
	//	let ul = document.querySelector('ul');
	//	ul.appendChild(li);
	// });
	 
	// document.querySelector('button').addEventListener('click', function() {
		
	//	 let txt = document.querySelector('p').innerText;
	//	 let li = document.createElement('li');
	//	 li.innerText = txt;
	//	 let ul = document.querySelector('ul');
	//	 ul.appendChild(li);
	// }); 
	 
	 document.querySelector('#addBtn').addEventListener('click', function() {
		 let value = document.querySelector('input').value;
		 let value1 = document.querySelector('input:nth-of-type(2)').value;
		 let li = document.createElement('li');
		 li.innerText = value + '(' +value1 + ')';
		 
		 // 삭제버튼. 
		 let btn = document.createElement('button');
		 btn.innerText = '삭제';
		 li.appendChild(btn);
		 btn.addEventListener('click', function(){
			console.log(this); //this?
			this.parentElement.remove();
		 });
		 
		 let ul = document.querySelector('ul');
		 ul.appendChild(li);
	 }); 
	 
	 
	 
	 