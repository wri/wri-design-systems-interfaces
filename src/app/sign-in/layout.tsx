export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='h-full max-w-[1440px] mx-auto'>{children}</div>
}
