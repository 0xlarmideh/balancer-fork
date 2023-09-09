import { SmallText } from '@/components/_common/Typography';
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box py="36px">
      <Box maxW='450px' px="60px">
        <Text color='brand.lighterText'  fontweight='600' fontSize='36px' as="h1">Welcome to Phanes network</Text>
        <SmallText text='Lorem ipsum dolor sit amet consectetur. Lobortis bibendum faucibus nisi lectus amet ultrices sed. Massa ipsum bibendum malesuada risus fermentum.' />
      </Box>
    </Box>
  );
}

export default Header