import { ApiRoutes } from './constants/routes';
import { getCommentsByPostId } from './getCommentsByPostId';

export const API = {
	posts: {
		setLike: process.env.NEXT_PUBLIC_API_URL + ApiRoutes.posts,
		getPosts: process.env.NEXT_PUBLIC_API_URL + ApiRoutes.posts,
		getPostById: process.env.NEXT_PUBLIC_API_URL + ApiRoutes.posts,
		updatePostComment: process.env.NEXT_PUBLIC_API_URL + ApiRoutes.posts
	},
	comments: {
		getCommentsByPostId: process.env.NEXT_PUBLIC_API_URL + ApiRoutes.comments
	}
};
