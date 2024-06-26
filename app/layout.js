import { ClerkProvider } from '@clerk/nextjs';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FileSharing App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
