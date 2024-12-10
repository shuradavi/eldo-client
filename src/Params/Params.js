export const hostUrl = {
	listItems: 'localhost:4002/goods',
	getItem: '87.228.37.230:4002/goods',
	signUp: 'localhost:4002/signup',
	signIn: '87.228.37.230:4002/signin',
	logOut: '87.228.37.230:4002/logout',
}

export const LABELS = ['Товар', 'Товара', 'Товаров']

export const AUTH_STATUS_MAP = {
	404: 'Invalid login/password',
	500: 'This login already exists',
}

export const initialUserData = {
	login: '',
	password: '',
}


export const CATEGORIES_MAP = {
	all: 'Все',
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

export const initialCountState = 1;

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

export let initialPriceValue = [1, 250000]

export const paginationInitialValue = {
	pageSize: 5,
	currentPage: 1,
	pageSizeOptions: [3, 5, 10],
}

export const typeOfNotification = {
	error: 'danger',
	success: 'success'
}

