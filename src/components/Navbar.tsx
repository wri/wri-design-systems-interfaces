'use client'

import { useState } from 'react'
import { Menu, Navbar as WriNavbar } from '@worldresources/wri-design-systems'
import Link from 'next/link'
import { WriLogoIcon } from './icons'
import { usePathname } from 'next/navigation'

const languages = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
]

const Navbar = () => {
  const [language, setLanguage] = useState('')
  const pathname = usePathname()

  return (
    <WriNavbar
      logo={
        <Link href='/'>
          <WriLogoIcon height='32px' width='92px' />
        </Link>
      }
      linkRouter={Link}
      pathname={pathname}
      navigationSection={[
        {
          label: 'About',
          link: '/page1',
        },
        {
          label: 'Tools',
          items: [
            {
              label: 'Tool 1',
              link: '/page1/page2',
            },
            {
              label: 'Tool 2',
              link: '/page1/page2/page3',
            },
          ],
        },
        {
          label: 'Data',
          items: [
            {
              label: 'Data 1',
              link: '/page1/page2/page3',
            },
            {
              label: 'Data 2',
              link: '/page1/page2/page3/page4',
            },
          ],
        },
        {
          label: 'Use Cases',
          link: '/page1/page2/page3',
          items: [
            {
              label: 'Use Case 1',
              link: '/page1/page2/page3/page4',
            },
            {
              label: 'Use Case 2',
              link: '/page1/page2/page3/page4/page5',
            },
          ],
        },
        {
          label: 'News',
          items: [
            {
              label: 'News 1',
              link: '/page1/page2/page3/page4/page5/page6',
            },
          ],
        },
        {
          label: 'Help',
          link: '/page1/page2/page3/page4/page5/page6',
        },
      ]}
      utilitySection={[
        <Menu
          key='language-menu'
          label={
            languages?.find((l) => l.value === language)?.label || 'Language'
          }
          items={languages}
          onSelect={setLanguage}
        />,
        <p key='wri-apps'>WRI Apps</p>,
      ]}
      actionsSection={[
        { label: 'Create account', onClick: () => {} },
        { label: 'Sign in', onClick: () => {} },
      ]}
      maxWidth={1440}
      onNavbarHeightChange={(height: number) => console.log(55, height)}
      fixed
    />
  )
}

export default Navbar
