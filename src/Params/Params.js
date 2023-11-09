export const hostUrl = {
	listItems: 'http://localhost:4002/goods',
	getItem: 'http://localhost:4002/goods',
	signUp: 'http://localhost:4002/signup',
	signIn: 'http://localhost:4002/signin',
}

export const CATEGORIES_MAP = {
	phones: 'телефоны',
	computers: 'компьютеры',
	kitchen: 'кухня',
	TV: 'ТВ',
}
export const categories = Object.keys(CATEGORIES_MAP);

export const STATUS_MAP = {
	pending: 'pending',
	fulfilled: 'fulfilled',
	rejected: 'rejected',
}

export const initialFilterValue = {
	"bestOffer": false,
	"name": '',
	"category": [],
}

export const optionsInitialization = () => {
	const options = [];
	for (let i = 0; i < Object.keys(CATEGORIES_MAP).length; i++) {
	  options.push({
		value: categories[i],
		label: CATEGORIES_MAP[categories[i]],
	  });
	}
	return options;
}