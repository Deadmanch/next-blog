import { ICommentRequest } from '@/interfaces';

import { API } from './api';
import { request } from './request';

export const updatePostComment = async (postId: number, data: ICommentRequest) => {
	return request({
		url: `${API.posts.updatePostComment}/${postId}`,
		method: 'PATCH',
		body: data
	});
};
