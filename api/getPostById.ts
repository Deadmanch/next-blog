import { IPost } from '@/interfaces';

import { API } from './api';
import { request } from './request';

export const getPostsById = async (id: string): Promise<IPost> => {
	return request<IPost>({ url: `${API.posts.getPostById}/${id}` });
};
