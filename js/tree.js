var data = {
	id: 1,
	name: 'JS',
	type: 'Root',
	description:
		'Типы данных, Циклы, Функции, Массивы, Объекты, Асинхронность, Работа с DOM и многое другое',
	children: [
		{
			id: 2,
			name: 'React',
			type: 'Type',
			description:
				'JavaScript-библиотека для создания пользовательских интерфейсов',
			children: [
				{
					id: 3,
					name: 'Redux',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
				{
					id: 4,
					name: 'React Native',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
				{
					id: 5,
					name: 'Gatsby',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
				{
					id: 6,
					name: 'Next js',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
			],
		},
		{
			id: 2,
			name: 'Vue',
			type: 'Type',
			description: 'описание',
			children: [
				{
					id: 3,
					name: 'Bible',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
				{
					id: 4,
					name: 'Bible',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
				{
					id: 5,
					name: 'bible',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
			],
		},
		{
			id: 2,
			name: 'Angular',
			type: 'Type',
			description: 'описание',
			children: [
				{
					id: 3,
					name: 'Bible',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
				{
					id: 4,
					name: 'Bible',
					type: 'Organism',
					description: 'описание',
					children: [],
				},
			],
		},
	],
};

var treePlugin = new d3.mitchTree.boxedTree()
	.setData(data)
	.setElement(document.getElementById('visualisation'))
	.setIdAccessor(function (data) {
		return data.id;
	})
	.setChildrenAccessor(function (data) {
		return data.children;
	})
	.setBodyDisplayTextAccessor(function (data) {
		return data.description;
	})
	.setTitleDisplayTextAccessor(function (data) {
		return data.name;
	})
	.initialize();
