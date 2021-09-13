const TextElement = document.querySelector('input[name=title]');
const SelectElement = document.querySelector('select[neme=priority]');
const ButtonElement = document.querySelector('button[neme=save]');

const TableTodo = document.getElementById('table_todo');
const TableDoing = document.getElementById('table_doing');
const TableDone = document.getElementById('table_done');

const PRIORITY = {
	normal: '일반',
	high: '높음',
	low: '낮음',
}

ButtonElement.addEventListener('click', () => {
	// TextElement 값? SelectElement 값?
	const contents = TextElement.value;
	const priority = SelectElement.value;
	// 테스크가 추가
	addTask(priority, contents);
	// 테스크가 추가된 이후 상황
	reset();
});

// 자주 사용될 것 같으니까 함수로 만들자.
function reset() {
	TextElement.value = '';
	SelectElement.value = 'nomal';
}

function addTask(priority, contents) {
	const date = new Date();
	// console.log('TASK CREAT!', {priority:PRIORITY[priority], contents, date});
	const tr = document.createElement('tr');
	
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	const td3 = document.createElement('td');
	const td4 = document.createElement('td');
	
	const checkBoxElement = document.createElement('input');

	td1.appendChild(checkBoxElement);
	td2.innerText = contents;
	td3.innerText = date.toLocaleString();
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	
	// 어떻게 고유한 id 값을 줄 수 있을까?
	// 왜 리액트에서 고유한 id를 어떻게 쓰는지?
	// 왜 index를 쓰지 않고 고유한 id를 써야하는지?
	
	TableTodo.children[1].appendChild(tr);
}