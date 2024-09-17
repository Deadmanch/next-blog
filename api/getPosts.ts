import { IPost } from '@/interfaces';

import { request } from './request';
import { API } from './api';

export const getPosts = async (): Promise<IPost[]> => {
	return request<IPost[]>({ url: API.posts.getPosts, query: { _limit: '10' } });
};
