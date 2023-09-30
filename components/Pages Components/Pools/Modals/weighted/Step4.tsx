import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Step4 = () => {
  return (
    <Box py="24px" mx="auto" maxW={{ base: "100%", md: "540px" }}>
      <Box mb="32px" borderRadius="24px" p="24px" bg="brand.darkerBg">
        <Text mb='34px' bg="#293d36" w="100%" p="16px 12px" color="#fff">
          Tokens and initial liquidity
        </Text>
      </Box>
    </Box>
  );
};

export default Step4;
