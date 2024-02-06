import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { hostUrl } from '../Params/Params';
import { setStatus, resetStatus, addNotification } from './notificationSlice';

const initialState = {
	login: null,
	password: null,
	status: null,
	msg: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.login = action.payload.login
			state.password = action.payload.password;
			state.status = 'success';
			state.msg = null;
		},
		removeUser: () => {
			return initialState;
		},
		authFail: (state, action) => {
			state.msg = action.payload.response.data
			state.status = action.payload.response.status
		}
	}
})

export const signUp = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(hostUrl.signUp, userData, {withCredentials: 'true'})
		dispatch(setUser(response.data))
		dispatch(resetStatus())
	} catch (error) {
		dispatch(addNotification(error.response))
		dispatch(authFail(error))
	}
}

export const signIn = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(hostUrl.signIn, userData, {withCredentials: 'true'})
		dispatch(setUser(response.data))
		dispatch(resetStatus())
	} catch (error) {
		dispatch(addNotification(error.response))
		dispatch(authFail(error))
	}
}

export const logOut = () => async (dispatch) => {
	try {
		await axios.get(hostUrl.logOut, {withCredentials: 'true'})
		dispatch(removeUser())
		dispatch(resetStatus())
	} catch (error) {
		dispatch(addNotification(error.response))
		dispatch(authFail(error))
	}
}

export const { setUser, removeUser, authFail } = userSlice.actions;
export default userSlice.reducer;