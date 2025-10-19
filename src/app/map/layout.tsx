export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-[calc(100vh-48px)] lg:h-[calc(100vh-96px)] 1121:h-[calc(100vh-48px)] w-full absolute top-12 lg:top-24 1121:top-12'>
      {children}
    </div>
  )
}
