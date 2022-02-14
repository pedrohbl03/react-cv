import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

type Props = {
  title?: string
}

const Card: React.FC<Props> = ({ title, ...props }) => {
  return (
    <Box w="100%" bg="dark.200" rounded="xl" boxShadow="xl" mb={10} p={5}>
      {title && (
        <Heading as="h2" pb={3} fontSize="18px">
          {title}
        </Heading>
      )}
      <Box>{props.children}</Box>
    </Box>
  )
}

export default Card
