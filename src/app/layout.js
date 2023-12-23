import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Head from 'next/head'
import AuthProvider from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <body className='min-h-screen flex flex-col'>
        <AuthProvider>
          <Navbar />
          <div className={`${inter.className} grow container mx-auto pt-5`}>{children}</div>
        </AuthProvider>
      </body>
    </html>
  )
}
