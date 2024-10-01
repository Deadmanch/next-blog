import React from 'react';

import { notFound } from 'next/navigation';

import { getPostsById } from '@/api/getPostById';
import { getPosts } from '@/api/getPosts';
import { Container } from '@/components';
import { IComment, IPost } from '@/interfaces';
import PostPage from '@/pages/PostPage';
import { getCommentsByPostId } from '@/api/getCommentsByPostId';

export async function generateStaticParams() {
	const posts: IPost[] = await getPosts();

	return posts.map((post) => ({ id: post.id.toString() }));
}

export default async function Post({ params }: { params: { id: string } }) {
	const post: IPost = await getPostsById(params.id);
	if (!post) notFound();
	const comments: IComment[] = await getCommentsByPostId(params.id);

	return (
		<>
			<Container>{post && <PostPage items={post} comments={comments} />}</Container>
		</>
	);
}
