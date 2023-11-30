import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationHeader from './components/navigation'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] }) // default font

export const metadata: Metadata = {
  title: 'Example Tailwind App',
  description: 'An example project for learning tailwind with next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
