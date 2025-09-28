'use client'

import Link from 'next/link'
import { Footer as WriFooter } from '@worldresources/wri-design-systems'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/constants'

export const Footer = () => {
  const pathname = usePathname()

  const hideFooter =
    pathname === ROUTES.MULTI_PAGE_FORMS.SINGLE_QUESTION ||
    pathname === ROUTES.MULTI_PAGE_FORMS.SINGLE_SECTION
  if (hideFooter) {
    return null
  }

  return (
    <WriFooter maxWidth={1440} filled fixed>
      <Link href={''}>Privacy policy</Link>
      <Link href={''}>Terms of service</Link>
    </WriFooter>
  )
}
