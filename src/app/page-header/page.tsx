'use client'

import { Box, Flex } from '@chakra-ui/react'
import PageHeaderWithImage from '@/components/PageHeader/PageHeaderWithImage'
import PageHeaderWithImageFullWidth from '@/components/PageHeader/PageHeaderWithImageFullWidth'
import { getThemedSpacing } from '@worldresources/wri-design-systems'
import PageHeaderWithImageAndTabsFullWidth from '@/components/PageHeader/PageHeaderWithImageAndTabsFullWidth'

const Title = ({ title }: { title: string }) => {
  return <h2 className='text-2xl font-bold mt-7 mb-2'>{title}</h2>
}
const PageHeader = () => {
  return (
    <Box minH='calc(100vh - 120px)' gap={getThemedSpacing(400)}>
      <Flex p={getThemedSpacing(400)} direction='column'>
        <Title title='Option 1' />
        <PageHeaderWithImageAndTabsFullWidth />

        <Title title='Option 2' />
        <PageHeaderWithImage />

        <Title title='Option 3' />
        <PageHeaderWithImageFullWidth />

        <Title title='Option 4' />
        <PageHeaderWithImageFullWidth withIcon />

        <Title title='Option 5' />
        <PageHeaderWithImageFullWidth noImage />
      </Flex>
    </Box>
  )
}

export default PageHeader
