/**
 * 
 */
const showTitles = ['id', 'centerName', 'address', 'sido', 'phoneNumber'];
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=k7RfROiNLFEId95154daEWIESV9T6ldVFAlihqXIr4%2FgfNxX5FVQA5TsFzftl4qcaFCQdbkEa5vPqSNPBAvjJw%3D%3D'
let totalData= [];

//서버에서 데이터 가져오기 위한. api 호출
fetch(url)
	.then(result => result.json())
	.then(data => {
		console.log(data)
		totalData = data.data;
		/*data.data.forEach(center => {
			let tr = makeRow(center);
			document.querySelector('#list').appendChild(tr);
		})*/
		showPaging(12);
	})
	.catch(err => console.log(err));
	
// 링크 클릭하면 페이지 호출
document.querySelectorAll('.pagination a').forEach(aTag => {
	console.log(aTag);
	aTag.addEventListener('click', function(e) {
		e.preventDefault(); // a 페이지 차단.
		let page = this.innerText; //this는 aTag
		showPaging(page);
	})
})

// pagingList : 전체건수를 계산해서 284건 29페이지. 현재페이지를 포함하고잇는 10개만 보이게
let totalCnt = 284;
function pagingList(page = 1){
	let pagination = document.querySelector('.pagination');
	pagination.innerHTML = null;
	
	let endPage, startPage;
	let prev, next;
	let realEnd = Math.ceil(totalCnt / 10);
	endPage = Math.ceil(page/10)*10;
	startPage = endPage -9;
	endPage = endPage > realEnd ? realEnd : endPage;
	next = endPage < realEnd ? true : false;
	prev = startPage > 1;
	
	if(prev){
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', startPage -1);
		aTag.innerHTML = '&laquo';
		aTag.addEventListener('click', function(e){
			let page = e.target.dataset.page; // target은 이벤트를 받는 대상
			showPaging(page);
		})
		pagination.appendChild(aTag);
	}
	
	
	//aTag 생성, 이벤트 추가.
	for(let n = startPage; n<=endPage; n++){
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = n;
		if(page == n) {
			aTag.className = 'active';
		}
		aTag.addEventListener('click', function(e){
			let page = e.target.innerText; // target은 이벤트를 받는 대상
			showPaging(page);
		})
		pagination.appendChild(aTag);
	}
	if(next){
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', endPage+1);
		aTag.innerHTML = '&raquo';
		aTag.addEventListener('click', function(e){
			let page = e.target.dataset.page; // target은 이벤트를 받는 대상
			showPaging(page);
		})
		pagination.appendChild(aTag);
	}
}


//데이터(센터) tr 함수.
//페이지 -> 10개씩 출력. https://www.w3schools.com/css/css3_pagination.asp#
function showPaging(page = 1) { // 0 ~ 9
	let startNo = (page - 1) * 10;
	let endNo = page * 10;
	let fAry = totalData.filter((center, idx) => {
		if(idx >= startNo && idx < endNo ){	
			return true;
		}
	})
	document.querySelector('#list').innerHTML = null;
	fAry.forEach(center => {
			let tr = makeRow(center);
			document.querySelector('#list').appendChild(tr);
	})
	pagingList(page);
	console.log(fAry);
}

function makeRow(center = {}){
	let tr = document.createElement('tr');
	tr.addEventListener('click', function(e){
		window.open('daum.html?x=' + center.lat + '&y=' + center.lng + '&name=' + center.centerName);
	})
	showTitles.forEach(title => {
		let td = document.createElement('td');
		let name = center[title];
		td.innerHTML = (name +'').replace('코로나19', '');
		tr.appendChild(td);
	})
	return tr;
}
