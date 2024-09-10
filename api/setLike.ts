import { API } from './api';

export const setLike = async (postId: number) => {
	try {
		const res = await fetch(`${API.posts.setLike}/${postId}`, {
			method: 'PATCH',
			body: JSON.stringify({ postId }),
			headers: { 'Content-Type': 'application/json' }
		});
		if (!res.ok) {
			console.error('Failed to set like:', res.statusText);
			throw new Error(res.statusText);
		}
		return res.json();
	} catch (error) {
		console.error('Failed to set like:', error);
	}
};
