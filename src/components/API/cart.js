import axios from "axios";
export const cartHostUrl = {
	getFiles: 'http://localhost:4003/files/list',
	saveFiles: 'http://localhost:4003/files/save',
	deleteFile: 'http://localhost:4003/files/delete/',
	downloadFile: 'http://localhost:4003/files/download/',
}

export const getFilesList = async () => {
	return await axios.get(cartHostUrl.getFiles)
}

export const saveFiles = async () => {
	return await axios.post(cartHostUrl.saveFiles)
}

export const deleteFile = async (id) => {
	return await axios.get(`${cartHostUrl.deleteFile}/${id}`)
}

export const downloadFile = async (id) => {
	return await axios.get(`${cartHostUrl.downloadFile}/${id}`)
}