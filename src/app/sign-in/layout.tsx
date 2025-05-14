export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-[calc(100vh-56px)] max-w-[1440px] flex flex-col items-center justify-center overflow-y-auto mx-auto'>
      {children}
    </div>
  )
}
