function getRandomItems(items: any[]): any[] {
	const shuffled = items.sort((a, b) => 0.5 - Math.random());
	return shuffled.slice(0, 3);
}

export default getRandomItems;
