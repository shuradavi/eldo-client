import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

const OnAuthNotification = ({ msg, timer }) => {
	const [isVisable, setVisable] = useState(true);
	const notis = useSelector(state => state.notification)
	// const activateNotification = () => {
	// 	setVisable(true);
	// 	disactivateNotification()
	// }
	
	const disactivateNotification = () => {
		setTimeout(() => {
			setVisable(false)
		}, timer);
	}

	useEffect(() => {
		disactivateNotification()
	}, [notis])

	return (
		<div>
			{Boolean(isVisable) && <span>{ msg }</span> }
		</div>
	);
};

export default OnAuthNotification;