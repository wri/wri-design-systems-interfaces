import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Providers from '@/components/Providers'
import { Footer } from '@/components/Footer'

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
  title: 'Design Systems Patterns',
  description: 'WRI Design Systems Patterns',
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
          <div className='h-[calc(100vh-56px)]'>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
