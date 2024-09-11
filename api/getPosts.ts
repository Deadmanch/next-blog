import { API } from './api';

export const getPosts = async () => {
	try {
		const res = await fetch(API.posts.getPosts + '?_limit=10', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		if (!res.ok) {
			console.error('Failed to get posts:', res.statusText);
			throw new Error(res.statusText);
		}
		return res.json();
	} catch (error) {
		console.error('Failed to get posts:', error);
	}
};
