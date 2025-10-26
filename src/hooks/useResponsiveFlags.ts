'use client'

import { useMediaQuery } from '@chakra-ui/react'

const queries = {
  isSmallTablet: '(max-width: 1023px)',
  isMobile: '(max-width: 639px)',
}

const useResponsiveFlags = () => {
  const [isSmallTablet, isMobile] = useMediaQuery([
    queries.isSmallTablet,
    queries.isMobile,
  ])

  return { isSmallTablet, isMobile }
}

export { queries as responsiveQueries }
export default useResponsiveFlags
