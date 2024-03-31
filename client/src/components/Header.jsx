import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo';
import ButtonLink from './ButtonLink';

export default function Header() {
  return (
    <Box bgColor='#474747' h='70px' pos='fixed' w='100%' zIndex='9999'>
      <Container maxW='container.xl' h='100%'>
          <Flex align='center' h='100%' justify='space-between'>
              <Logo href='/' />
              <ButtonLink href='/login' width='120px'>
                  Sign Up
              </ButtonLink>
          </Flex>
      </Container>
    </Box>
  )
}
