import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'

type Props = {
  name: string
  pictureLink?: string
}

const Profile: React.FC<Props> = ({ name }) => {
  return (
    <>
      <Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://bit.ly/dan-abramov"
          alt={name}
        />
      </Box>
      <Box>
        <Heading as="h3" fontSize="18px" my={5}>
          {name}
        </Heading>
      </Box>
    </>
  )
}

export default Profile
