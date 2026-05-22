'use client'

import Link from 'next/link'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import {
  Breadcrumb,
  Tag,
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '@worldresources/wri-design-systems'
import useResponsiveFlags from '@/hooks/useResponsiveFlags'
import Slots from './Slots'

const PageHeaderWithImage = () => {
  const { isMobile } = useResponsiveFlags()

  return (
    <Box
      minH='250px'
      bg={getThemedColor('neutral', 200)}
      backgroundImage={`
        linear-gradient(90deg, ${getThemedColor('neutral', 300)} 50%, transparent 50%),
        linear-gradient(${getThemedColor('neutral', 300)} 50%, transparent 50%)
      `}
      backgroundSize='32px 32px'
      backgroundPosition='0 0, 0 16px, 16px -16px, -16px 0'
      py={getThemedSpacing(400)}
      px={getThemedSpacing(400)}
    >
      <Flex
        bg={getThemedColor('neutral', 100)}
        p={getThemedSpacing(400)}
        gap={getThemedSpacing(400)}
        align='flex-start'
        maxW='960px'
      >
        <Box
          w='152px'
          h='152px'
          border={`${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)}`}
          borderRadius={getThemedRadius(400)}
          backgroundImage={`
            linear-gradient(45deg, ${getThemedColor('neutral', 300)} 25%, transparent 25%),
            linear-gradient(-45deg, ${getThemedColor('neutral', 300)} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${getThemedColor('neutral', 300)} 75%),
            linear-gradient(-45deg, transparent 75%, ${getThemedColor('neutral', 300)} 75%)
          `}
          backgroundSize='16px 16px'
          backgroundPosition='0 0, 0 8px, 8px -8px, -8px 0'
          aria-hidden='true'
        />

        <Flex
          direction='column'
          gap={getThemedSpacing(100)}
          maxW='760px'
          flex={1}
        >
          <Breadcrumb
            links={[
              {
                label: 'Page level 1',
                link: '#',
              },
              {
                label: 'Page level 2',
                link: '#',
              },
              {
                label: '...',
                link: '#',
              },
            ]}
            linkRouter={Link}
            separator='>'
            size={isMobile ? 'small' : 'default'}
          />

          <Flex align='center' gap={getThemedSpacing(300)}>
            <Heading
              as='h1'
              m={0}
              color={getThemedColor('neutral', 900)}
              fontSize={getThemedFontSize(800)}
              lineHeight={getThemedLineHeight(900)}
            >
              Title
            </Heading>
            <Tag label='Label' variant='info-white' />
          </Flex>

          <Text
            m={0}
            color={getThemedColor('neutral', 700)}
            fontSize={getThemedFontSize(400)}
            lineHeight={getThemedLineHeight(600)}
            maxW='740px'
          >
            Lorem ipsum dolor sit amet consectetur. Adipiscing pharetra pharetra
            turpis semper quis auctor purus vitae risus. Augue enim lectus
            ultrices tortor orci ut nunc.
          </Text>

          <Slots />
        </Flex>
      </Flex>
    </Box>
  )
}

export default PageHeaderWithImage
