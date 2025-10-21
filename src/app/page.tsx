import { ROUTES } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const pages = [
  {
    label: 'Sign In',
    href: ROUTES.AUTH.SIGN_IN,
    category: 'Auth',
    image: '/images/auth-sign-in.png',
  },
  {
    label: 'Sign Up',
    href: ROUTES.AUTH.SIGN_UP,
    category: 'Auth',
    image: '/images/auth-sign-up.png',
  },
  {
    label: 'Single Question',
    href: ROUTES.MULTI_PAGE_FORM.SINGLE_QUESTION,
    category: 'Multi Page Form',
    image: '/images/multi-page-form-single-question.png',
  },
  {
    label: 'Single Section',
    href: ROUTES.MULTI_PAGE_FORM.SINGLE_SECTION,
    category: 'Multi Page Form',
    image: '/images/multi-page-form-single-section.png',
  },
  {
    label: 'Multiple Sections',
    href: ROUTES.SINGLE_PAGE_FORM.MULTIPLE_SECTIONS,
    category: 'Single Page Form',
    image: '/images/single-page-form-multiple-sections.png',
  },
  {
    label: 'Collapsible Sections',
    href: ROUTES.SINGLE_PAGE_FORM.COLLAPSIBLE_SECTIONS,
    category: 'Single Page Form',
    image: '/images/single-page-form-collapsible-sections.png',
  },
  {
    label: 'Map Interface',
    href: ROUTES.MAP.MAP_INTERFACE,
    category: 'Map',
    image: '/images/map-map-interface.png',
  },
]

export default function Home() {
  return (
    <div className='App pb-40'>
      <div className='max-w-[1024px] mx-auto px-5'>
        <h1 className='text-2xl font-bold text-center py-5'>
          WRI Design Systems Interfaces
        </h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {pages.map((page) => (
            <div key={page.label}>
              <Link href={page.href} className='cursor-pointer'>
                <div className='border border-neutral-300 rounded-lg overflow-hidden my-1 mb-2'>
                  <Image
                    src={page.image}
                    alt={page.label}
                    height={400}
                    width={600}
                  />
                </div>
                <p className='text-xs font-bold text-primary-500'>
                  {page.category}
                </p>
                <p className='text-lg font-bold'>
                  {page.label}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
