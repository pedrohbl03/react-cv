import React from 'react'
import {
  FormControl,
  FormLabel,
  InputGroup,
  Stack,
  Textarea,
  Input,
  Button,
} from '@chakra-ui/react'

const Contact: React.FC = () => {
  return (
    <>
      <form id="contactForm">
        <FormControl mt={2}>
          <Stack spacing={3}>
            <InputGroup flexDirection="column">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Give-me your email for return your contact"
              />
            </InputGroup>
            <InputGroup flexDirection="column">
              <FormLabel htmlFor="message">Your message</FormLabel>
              <Textarea id="message" />
            </InputGroup>
          </Stack>
          <Button mt={4} bg="whiteAlpha.200" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  )
}

export default Contact
