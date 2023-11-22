export const getMinAndMaxPrice = (goodsList) => {
	let result = []
	let newArr = [...goodsList]
	newArr = newArr.sort((a, b) => {
		return a["price"] - b["price"];
	})
	result = [newArr.at(0)["price"], newArr.at(-1)["price"]]
	return result
}
