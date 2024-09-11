import { API } from './api';

export const getPostsById = async (id: string) => {
	try {
		const res = await fetch(API.posts.getPostById + `/${id}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		if (!res.ok) {
			console.error('Failed to get post by id:', res.statusText);
			throw new Error(res.statusText);
		}
		return res.json();
	} catch (error) {
		console.error('Failed to get post by id:', error);
	}
};
