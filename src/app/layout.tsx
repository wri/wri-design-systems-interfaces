import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Providers from '@/components/Providers'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'

const acuminPro = localFont({
  src: [
    {
      path: '../../assets/fonts/Acumin-Pro-Book.otf',
      weight: '400',
    },
    {
      path: '../../assets/fonts/Acumin-Pro-Bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Design Systems Interfaces',
  description: 'WRI Design Systems Interfaces',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${acuminPro.className} antialiased`}>
        <Providers>
          <Navbar />
          {/* <div className='min-h-[calc(100vh-56px-48px)] lg:min-h-[calc(100vh-56px-96px)] 1121:min-h-[calc(100vh-56px-48px)] overflow-y-auto bg-red-200'> */}
            {children}
          {/* </div> */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
