import React from 'react'
import { Flex } from '@chakra-ui/react'

const Social: React.FC = ({ ...props }) => {
  return (
    <>
      <Flex w="200px" justifyContent="space-between">
        {props.children}
      </Flex>
    </>
  )
}

export default Social
