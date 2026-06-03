'use client'

import Link from 'next/link'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import {
  Breadcrumb,
  TabBar,
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

const tabs = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Tab 3', value: 'tab3' },
]

const PageHeaderWithImageAndTabsFullWidth = ({
  withIcon,
  noImage,
}: {
  withIcon?: boolean
  noImage?: boolean
}) => {
  const { isMobile } = useResponsiveFlags()

  return (
    <>
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
      />

      <Box minH='250px' bg={getThemedColor('neutral', 200)}>
        <Flex
          bg={getThemedColor('neutral', 100)}
          p={getThemedSpacing(400)}
          gap={getThemedSpacing(400)}
          align='flex-start'
        >
          {!noImage ? (
            <Box
              w={withIcon ? '32px' : '152px'}
              h={withIcon ? '32px' : '152px'}
              border={`${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)}`}
              borderRadius={getThemedRadius(400)}
              backgroundImage={`
            linear-gradient(45deg, ${getThemedColor('neutral', 300)} 25%, transparent 25%),
            linear-gradient(-45deg, ${getThemedColor('neutral', 300)} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${getThemedColor('neutral', 300)} 75%),
            linear-gradient(-45deg, transparent 75%, ${getThemedColor('neutral', 300)} 75%)
          `}
              backgroundSize={withIcon ? '8px 8px' : '16px 16px'}
              backgroundPosition={
                withIcon
                  ? '0 0, 0 4px, 4px -4px, -4px 0'
                  : '0 0, 0 8px, 8px -8px, -8px 0'
              }
              aria-hidden='true'
            />
          ) : null}

          <Flex
            direction='column'
            gap={getThemedSpacing(100)}
            width='100%'
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

            <Flex
              align='center'
              gap={getThemedSpacing(300)}
              justify='space-between'
            >
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
              <Slots />
            </Flex>

            <Text
              m={0}
              color={getThemedColor('neutral', 700)}
              fontSize={getThemedFontSize(400)}
              lineHeight={getThemedLineHeight(600)}
              maxW='740px'
            >
              Lorem ipsum dolor sit amet consectetur. Adipiscing pharetra
              pharetra turpis semper quis auctor purus vitae risus. Augue enim
              lectus ultrices tortor orci ut nunc.
            </Text>

            <Slots />
          </Flex>
        </Flex>
        <div className='sticky top-[89px] z-50 w-full overflow-x-auto border-b border-neutral-300 bg-white sm:top-[92px] lg:[overflow-x:initial]'>
          <div className='min-w-[768px]'>
            <TabBar tabs={tabs} variant='transparent' defaultValue='tab1' />
          </div>
        </div>
      </Box>
    </>
  )
}

export default PageHeaderWithImageAndTabsFullWidth
