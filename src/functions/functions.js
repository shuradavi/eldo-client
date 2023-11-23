export const getMinAndMaxPrice = (goodsList) => {
	let result = []
	let newArr = [...goodsList]
	newArr = newArr.sort((a, b) => {
		return a["price"] - b["price"];
	})
	result = [newArr.at(0)["price"], newArr.at(-1)["price"]]
	return result
}

export const calcPriceWithDiscount = (product) => {
	return Math.round(product["price"] * ((100 - product["discountPercent"]) / 100))
}

export const calcCashbackSize = (product) => {
	return product["hasDiscount"] ? (calcPriceWithDiscount(product) * product["cashbackPercent"] / 100) : (product["price"] * product["cashbackPercent"] / 100)
}
