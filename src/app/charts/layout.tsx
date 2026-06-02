import Header from '@/components/Charts/Header'

export default async function PortfolioRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const metadata = { total: 63, active: 38, finished: 25 }

  return (
    <div className='w-full max-w-360 mx-auto'>
      <div className='flex w-full max-w-360 flex-col py-5'>
        <Header metadata={metadata} />
        {children}
      </div>
    </div>
  )
}
