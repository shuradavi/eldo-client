import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { hostUrl } from '../Params/Params';

const initialState = {
	login: null,
	password: null,
	isAuth: false,
	error: null,
	msg: null,
	status: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			if (!state.isAuth) {
				try {
					state.login = action.payload.login;
					state.password = action.payload.password;
					state.isAuth = true;
					state.status = 'OK'
					state.msg = null;
				} catch (error) {
					state.error = error
				}
			} else {
				state.msg = 'checked error'
			}
		},
		removeUser(state) {
			try {
				if (state.isAuth) {
					state.login = null;
					state.password = null;
					state.isAuth = false;
					state.status = null;
					state.msg = null;
				} else {
					state.msg = 'Not logged in yet'
				}
			} catch (error) {
				state.error = error;
			}
		},
		authFail(state, action) {
			try {
				state.msg = action.payload.response.data
				state.status = action.payload.response.status
			} catch (error) {
				state.error = error;
			}
		}
	}
})

export const signUp = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(hostUrl.signUp, userData, {withCredentials: 'true'})
		dispatch(setUser(response.data))
	} catch (error) {
		dispatch(authFail(error))
		console.log('ERROR sign up => ',error);
	}
}

export const signIn = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(hostUrl.signIn, userData, {withCredentials: 'true'})
		dispatch(setUser(response.data))
	} catch (error) {
		dispatch(authFail(error))
		console.log('ERROR sign in => ', error);
	}
}

export const logOut = () => async (dispatch) => {
	try {
		await axios.get(hostUrl.logOut, {withCredentials: 'true'})
		dispatch(removeUser())
	} catch (error) {
		dispatch(authFail(error))
		console.log('ERROR log out => ', error);
	}
}

export const { setUser, removeUser, authFail } = userSlice.actions;
export default userSlice.reducer;