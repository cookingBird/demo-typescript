function main() {
	let obj = { name: 'Tom' };

	const weakMap = new WeakMap();

	weakMap.set(obj, 'weakMap value');

	// 删除对象引用
	obj = null;
	debugger;
}

function main2() {
	let obj = { name: 'Tom' };

	const map = new Map();

	map.set(obj, 'map value');

	// 删除对象引用
	obj = null;
	debugger;
}

main();

main2();
