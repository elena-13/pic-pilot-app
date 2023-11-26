import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/styles/main.scss';

const inter = Inter({ subsets: ['latin'],  variable: '--font-inter',
display: 'swap', })

export const metadata: Metadata = {
  title: 'PicPilot',
  description: 'Picture processing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
