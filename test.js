let { del, put, get } = require('./util/verbs');

let kingId = put({
	type: 'kingdom',
	name: 'bananarama'
});

put({
	type: 'king',
	name: 'bob',
	parentId: kingId
});

put({
	type: 'queen',
	name: 'sue',
	parentId: kingId
});

for (let c = 0; c < 6; c++) {
	let castleId = put({
		type: 'castle',
		name: `Castle ${c}`,
		parentId: kingId
	});

	for (let l = 0; l < 10; l++) {
		let liegeId = put({
			type: 'liege',
			name: `Liege ${l}`,
			parentId: castleId
		});

		for (let v = 0; v < 25; v++) {
			put({
				type: 'vassal',
				name: `Vassal ${v}`,
				parentId: liegeId
			});
		}
	}
}
