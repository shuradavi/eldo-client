export const hasDiscount = (arrayOfGoods) => {
	let withDiscount = arrayOfGoods.filter(item => item.hasDiscount === true)
	console.log('with Discount ', withDiscount);
	return withDiscount;
}
