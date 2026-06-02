import TabsHandler from '@/components/Charts/Tabs/TabsHandler'

export function generateStaticParams() {
  return [
    { section: 'overview' },
    { section: 'financial' },
    { section: 'esg-impact' },
  ]
}

const PortfolioPage = async ({
  params,
}: {
  params: Promise<{ section: string }>
}) => {
  const { section } = await params

  return (
    <div className='flex min-h-[calc(100vh-220px)] w-full max-w-[1440px] flex-1 flex-col bg-neutral-200'>
      <TabsHandler section={section} />
    </div>
  )
}

export default PortfolioPage
