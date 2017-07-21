const create = require('./util/verbs').post;
create({
	type: 'castles',
	parentType: 'kingdoms',
	parentId: 1,
	name: 'Awesome Castle'
});
