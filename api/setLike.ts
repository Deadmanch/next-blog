import { API } from './api';
import { request } from './request';

export const setLike = async (postId: number) => {
	return request({ url: `${API.posts.setLike}/${postId}`, method: 'PATCH', body: { postId } });
};
