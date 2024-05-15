import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => <>{children}</>;

export default RootLayout;
