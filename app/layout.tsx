import { domAnimation, LazyMotion } from 'framer-motion';
import { Open_Sans } from 'next/font/google';

import '@/styles/globals.css';
import '@/styles/reset.css';

const openSans = Open_Sans({ subsets: ['cyrillic'] });

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={openSans.className}>
				<LazyMotion features={domAnimation}>{children}</LazyMotion>
			</body>
		</html>
	);
}
