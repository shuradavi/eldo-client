import axios from 'axios';
import { hostUrl } from '../../Params/Params';

export const getProductInfo = async (id) => {
	return await axios.get(`${hostUrl.getItem}/${id}`)
}

// export const getItems = async () => {
// 	try {
// 		const response = await axios.get(hostUrl.listItems)
// 		console.log('response data:', response.data);
// 		return response.data
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// export const signUp = async () => {
// 	const response = await axios.post(hostUrl.signUp, {
// 		"login": "user1",
// 		"password": "password1"
// 	}, {
// 		headers: {
// 			'Access-Control-Allow-Credentials': true,
// 			'Access-Control-Allow-Origin': 'http://localhost:3000'
// 		}
// 	})
// 	console.log('Response: ', response);
// }

// export const signIn = async () => {
// 	const response = await axios.post(hostUrl.signIn, {
// 		"login": "user1",
// 		"password": "password1"
// 	})
// 	console.log('Response: ', response);
// }