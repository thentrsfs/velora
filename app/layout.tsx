import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import { Toaster } from 'sonner';
import Nav from '@/app/components/ui/Nav';
import NavMobile from '@/app/components/ui/NavMobile';

const clashDisplay = localFont({
	src: '../public/fonts/ClashDisplay-Variable.woff2',
	variable: '--font-clash-display',
	display: 'swap',
});

const satoshi = localFont({
	src: '../public/fonts/Satoshi-Variable.woff2',
	variable: '--font-satoshi',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Velora',
	description: 'Coffee Shop',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${clashDisplay.variable} ${satoshi.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col'>
				<Nav />
				<NavMobile />
				{children}
				<Toaster
					position='top-center'
					theme='dark'
					toastOptions={{
						style: {
							background: '#1a1410',
							border: '1px solid rgba(255,255,255,0.08)',
							color: '#fff',
						},
					}}
				/>
			</body>
		</html>
	);
}
