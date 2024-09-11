import { notFound } from 'next/navigation';

import { getPostsById } from '@/api/getPostById';
import { getPosts } from '@/api/getPosts';
import { Container } from '@/components';
import { IPost } from '@/interfaces';
import PostPage from '@/pages/PostPage';

export async function generateStaticParams() {
	const posts: IPost[] = await getPosts();

	return posts.map((post) => ({ id: post.id.toString() }));
}

export default async function Post({ params }: { params: { id: string } }) {
	const post: IPost = await getPostsById(params.id);
	if (!post) notFound();

	return (
		<>
			<Container>{post && <PostPage items={post} />}</Container>
		</>
	);
}
