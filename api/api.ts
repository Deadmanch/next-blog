import { ApiRoutes } from './constants/routes';

export const API = {
	posts: {
		setLike: process.env.NEXT_PUBLIC_API_URL + ApiRoutes.posts
	}
};
