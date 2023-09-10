import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { SmallText } from '../../_common/Typography';

const Header = () => {
  return (
    <Box py="36px">
      <Box px="60px">
        <Text
          maxW="450px"
          color="brand.lighterText"
          fontWeight="600"
          fontSize="36px"
          as="h1"
        >
          Welcome to Phanes network
        </Text>
        <SmallText text="Lorem ipsum dolor sit amet consectetur. Lobortis bibendum faucibus nisi lectus amet ultrices sed. Massa ipsum bibendum malesuada risus fermentum." />
      </Box>
    </Box>
  );
}

export default Header