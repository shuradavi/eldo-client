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

function decimalAdjust(type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Если значение не является числом, либо степень не является целым числом...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Сдвиг разрядов
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Обратный сдвиг
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
}

Math.round10 = function (value, exp) {
	return decimalAdjust("round", value, exp);
  };

export const calcRating = (product) => {
	if (product["reviews"].length > 0) {
		let result = 0;
		for (let i = 0; i < product["reviews"].length; i++) {
			result += product["reviews"][i]["rate"]
		}
		return Math.round10((result / (product["reviews"].length)), -1)
	} else return 0
}

export const isEmptyObject = (obj) => {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

export const sumOfGoodsInCart = (obj) => {
	let sum = 0;
	for (let key in obj) {
		sum += obj[key]
	}
	return sum;
}

export const calcFinishPrice = (obj) => {
	if (obj.hasOwnProperty("priceWithDiscount")) {
		return obj["priceWithDiscount"]
	} else {
		return obj["price"]
	}
}