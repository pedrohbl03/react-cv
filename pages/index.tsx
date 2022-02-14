import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Container, Box, Grid, GridItem, Flex, Link } from '@chakra-ui/react'
import Card from '../src/components/Card/index'
import Social from '../src/components/Social/wrapper/index'
import SocialItem from '../src/components/Social/item/index'
import Profile from '../src/components/Profile/index'
import Contact from '../src/components/Contact/index'

const Wrapper: React.FC = () => (
  <Box pos="relative">
    <Box w="100%" h="250px" bgGradient="linear(to-b, #2E2A57, #550469)"></Box>
    <Flex
      pos="absolute"
      top={[50, 50, '70%', '70%']}
      w="100%"
      justifyContent="center"
    >
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(12, 1fr)" gap={[0, 0, 10]}>
          <GridItem colSpan={[12, 12, 4]}>
            <Box w="100%">
              <Card>
                <Flex flexDirection="column" alignItems="center">
                  <Profile name="Pedro Lima"></Profile>
                  <Social>
                    <SocialItem
                      url="https://instagram.com/pedro.limaaa_"
                      socialIcon={<FaInstagram />}
                    />

                    <SocialItem
                      url="https://instagram.com/pedro.limaaa_"
                      socialIcon={<FaLinkedin />}
                    />

                    <SocialItem
                      url="https://instagram.com/pedro.limaaa_"
                      socialIcon={<FaGithub />}
                    />
                  </Social>
                  <Flex
                    color="gray.100"
                    fontSize="10px"
                    mt={5}
                    w="200px"
                    justifyContent="space-between"
                    textAlign="center"
                  >
                    <Link
                      _hover={{ textDecoration: 'none' }}
                      href={''}
                      isExternal
                      w="50%"
                      borderEnd="1px"
                    >
                      Falar no whatsapp
                    </Link>
                    <Link
                      _hover={{ textDecoration: 'none' }}
                      href="mailto:pedrohblima03@gmail.com"
                      w="50%"
                    >
                      Enviar um email
                    </Link>
                  </Flex>
                </Flex>
              </Card>
              <Card title="Sobre">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                possimus non tenetur!
              </Card>
              <Card title="Metas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                omnis quaerat, ullam autemLorem ipsum dolor sit amet consectetur
              </Card>
            </Box>
          </GridItem>
          <GridItem colSpan={[12, 12, 8]}>
            <Box w="100%">
              <Card title="Habilidades">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                praesentium saepe illo eos corrupti in modi tempora impedit
                voluptates explicabo. Tempore, corrupti quasi dolorum doloremque
                iure a aperiam ipsa! Accusantium?
              </Card>
              <Card title="Formação academica">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                praesentium saepe illo eos corrupti in modi tempora impedit
                voluptates explicabo. Tempore, corrupti quasi dolorum doloremque
                iure a aperiam ipsa! Accusantium?
              </Card>
              <Card title="Histórico Profissional">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                praesentium saepe illo eos corrupti in modi tempora impedit
                voluptates explicabo. Tempore, corrupti quasi dolorum doloremque
                iure a aperiam ipsa! Accusantium?
              </Card>
              <Card title="Fale comigo">
                <Contact />
              </Card>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  </Box>
)

export default Wrapper
