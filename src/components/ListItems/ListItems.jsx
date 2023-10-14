import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import axios from 'axios';
import { hostUrl } from '../../Params/Params';
import { signIn, signUp } from '../API/get';

const ListItems = () => {

	const [items, setItems] = useState([])
	const getItems = async () => {
		try {
			const response = await axios.get(hostUrl.listItems)
			setItems(response.data)
			console.log(items);
		} catch (error) {
			console.log(error);
		}
		
	}




	
	return (
		<div className='goods-list'>
			<button className='btn' onClick={getItems}>get items</button>
			<button className='btn' onClick={signUp}>sign up</button>
			<button className='btn' onClick={signIn}>sign in</button>
			<Item />
			
		</div>
	);
};

export default ListItems;