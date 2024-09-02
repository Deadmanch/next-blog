import { Metadata } from 'next';

import { Open_Sans } from 'next/font/google';

import '@/styles/globals.css';
import '@/styles/reset.css';

const openSans = Open_Sans({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	title: 'Next Blog | Все что нужно знать про it',
	description: 'Next Blog | Блог статей про it'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={openSans.className}>{children}</body>
		</html>
	);
}
