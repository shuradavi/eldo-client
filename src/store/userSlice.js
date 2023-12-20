import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { hostUrl } from '../Params/Params';

const initialState = {
	login: null,
	password: null,
	isAuth: false,
	error: null,
	msg: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			try {
				if (!state.isAuth) {
					state.login = action.payload.login;
					state.password = action.payload.password;
					state.isAuth = true;
				} else {
					state.msg = 'Already logged in'
				}
			} catch (error) {
				state.error = error;
				state.msg = null
			}
			
		},
		removeUser(state) {
			try {
				if (state.isAuth) {
					state.login = null;
					state.password = null;
					state.isAuth = false;
					state.msg = null;
				} else {
					state.msg = 'Not logged in yet'
				}
			} catch (error) {
				state.error = error;
				state.msg = null
			}
		},
	}
})

export const signUp = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(hostUrl.signUp, userData, {withCredentials: 'true'})
		dispatch(setUser(response.data))
	} catch (error) {
		console.log(error);
	}
}

export const signIn = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(hostUrl.signIn, userData, {withCredentials: 'true'})
		dispatch(setUser(response.data))
	} catch (error) {
		console.log(error);
	}
}

export const logOut = () => async (dispatch) => {
	try {
		await axios.get(hostUrl.logOut, {withCredentials: 'true'})
		dispatch(removeUser())
	} catch (error) {
		console.log(error);
	}
}

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;