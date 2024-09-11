'use client';
import { createContext } from 'react';

export const GitLogoContext = createContext({
	logo: '',
	link: '',
	alt: ''
});

export default function GitLogoProvider({ children }: { children: React.ReactNode }) {
	const gitLogoData = {
		logo: '/assets/icons/github.svg',
		link: 'https://github.com/Deadmanch/next-blog',
		alt: 'github logo'
	};

	return <GitLogoContext.Provider value={gitLogoData}>{children}</GitLogoContext.Provider>;
}
