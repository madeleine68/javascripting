
const orders = [
	{ id: 1, workerId: 0 },
	{ id: 2, workerId: 1 },
	{ id: 3, workerId: 1 },
	{ id: 4, workerId: 3 },
	{ id: 5, workerId: 5 },
	{ id: 6, workerId: 3 },
	{ id: 7, workerId: 0},
];

const workers = {};

const populatedOrdersPromises = orders.map(async order => {
	if (!workers[order.workerId]) {
		const res = await fetch('workers/' + order.workerId);
		const { worker } = await res.json();
		workers[order.workerId] = worker
	}
	return { ...order, worker: workers[order.workerId] };
	});

	Promise.all(populatedOrdersPromises).then(populatedOrders =>
	setOrders(populatedOrders)
);