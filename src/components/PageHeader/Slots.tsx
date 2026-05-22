import { Box, Flex, Text } from '@chakra-ui/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '@worldresources/wri-design-systems'

const slots = [
  { title: 'Slot', content: 'Add button or input' },
  { title: 'Slot', content: 'Add button or input' },
  { title: 'Slot', content: 'Add button or input' },
]

const Slots = () => {
  return (
    <Flex gap={getThemedSpacing(200)} wrap='wrap'>
      {slots.map((slot, index) => (
        <Box
          key={`${slot}-${index}`}
          border={`${getThemedBorderWidth(100)} dashed ${getThemedColor('neutral', 600)}`}
          borderRadius={getThemedRadius(300)}
          backgroundColor={getThemedColor('neutral', 200)}
          p={getThemedSpacing(100)}
          minW='84px'
        >
          <Text
            m={0}
            p={0}
            whiteSpace='pre-line'
            color={getThemedColor('neutral', 800)}
            fontSize={'8px'}
            lineHeight={getThemedLineHeight(400)}
          >
            <Text fontWeight='bold'>{slot.title}</Text>
            {slot.content}
          </Text>
        </Box>
      ))}
    </Flex>
  )
}

export default Slots
