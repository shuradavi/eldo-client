import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { hostUrl } from '../Params/Params';

const initialState = {
	login: null,
	password: null,
	error: null,
	msg: null,
	status: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			if (!Boolean(state.login)) {
				try {
					state.login = action.payload.login;
					state.password = action.payload.password;
					state.status = 'success'
					state.msg = null;
				} catch (error) {
					state.error = error
				}
			} else {
				state.msg = 'checked error'
			}
		},
		removeUser(state) {
			state = initialState;
		},
		authFail(state, action) {
			state.msg = action.payload.response.data
			state.status = action.payload.response.status
		}
	}
})

export const signUp = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(hostUrl.signUp, userData, {withCredentials: 'true'})
		dispatch(setUser(response.data))
	} catch (error) {
		dispatch(authFail(error))
	}
}

export const signIn = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(hostUrl.signIn, userData, {withCredentials: 'true'})
		dispatch(setUser(response.data))
	} catch (error) {
		dispatch(authFail(error))
	}
}

export const logOut = () => async (dispatch) => {
	try {
		await axios.get(hostUrl.logOut, {withCredentials: 'true'})
		dispatch(removeUser())
	} catch (error) {
		dispatch(authFail(error))
	}
}

export const { setUser, removeUser, authFail } = userSlice.actions;
export default userSlice.reducer;