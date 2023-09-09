import { Container } from '@chakra-ui/react'
import React from 'react'

const MaxWidth = ({children}) => {
  return (
    <Container maxW='1260px'>
      {children}
    </Container>
  )
}

export default MaxWidth