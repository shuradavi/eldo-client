import axios from 'axios';
import { hostUrl } from '../../Params/Params';

export const getProductInfo = async (id) => {
	return await axios.get(`${hostUrl.getItem}/${id}`)
}
