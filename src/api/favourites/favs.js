import instance, { getHeader } from '..'

export async function AddFav(imageid, description, urls, createdBy) {
	return instance.post(
		'/favs/add',
		{ imageid, description, urls, createdBy },
		getHeader(),
	)
}

export async function GetFavs(createdBy) {
	if (!createdBy) {
		createdBy = JSON.parse(localStorage.getItem('user'))._id
	}
	return instance.get(`/favs/get/${createdBy}`, getHeader())
}

export async function DelFav(imageid) {
	return instance.delete(`/favs/del/${imageid}`, getHeader())
}
