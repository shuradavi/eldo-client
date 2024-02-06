import { createSlice } from "@reduxjs/toolkit";
import { Store } from 'react-notifications-component';
import { typeOfNotification } from "../Params/Params";

const initialState = {
	msg: null,
	status: null,
}

const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setStatus: (state, action) => {
			state.status = action.payload.status;
			state.msg = action.payload.data;
		},
		resetStatus: () => {
			return initialState;
		}
	}
})

export const { setStatus, resetStatus } = notificationSlice.actions;
export default notificationSlice.reducer;

export const addNotification = (action) => (dispatch) => {
	dispatch(setStatus(action));
	let msg = action.data;
	let status = action.status
	dispatch(notify(msg, status))
}

export const notify = (msg, status) => {
	let responseStatus;
	if (status > 399 && status < 501) {
		responseStatus = 'error'
	}
	Store.addNotification({
		title: `${responseStatus}`,
		message: `${msg}`,
		type: `${typeOfNotification[`${responseStatus}`]}`,
		insert: "top",
		container: "top-right",
		animationIn: ["animate__animated", "animate__fadeIn"],
		animationOut: ["animate__animated", "animate__fadeOut"],
		dismiss: {
		  duration: 1500,
		  onScreen: true
		}
	  });
}