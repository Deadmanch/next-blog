import { IComment } from '@/interfaces';

import { API } from './api';
import { request } from './request';

export const getCommentsByPostId = async (postId: string): Promise<IComment[]> => {
	return request<IComment[]>({ url: `${API.comments.getCommentsByPostId}`, query: { postId } });
};
