import { Metadata } from 'next';

import { Container } from '@/components';
import { Header } from '@/layout';

export const metadata: Metadata = {
	title: 'Next Blog | Все что нужно знать про it',
	description: 'Next Blog | Блог статей про it'
};

export default function HomeLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<Container>
				<Header />
			</Container>
			{children}
		</main>
	);
}
