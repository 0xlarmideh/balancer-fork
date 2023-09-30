import { usePoolsContext } from "@/context/PoolsContext";
import {
  Box,
  Text,
  Progress,
  Flex,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";

const Step2 = () => {
  const {goNext, updatePoolDetail, poolDetails: {poolFees}} = usePoolsContext()
  const initialSwapFees = [0.1, 0.3, 1.1, 1.2];
  return (
    <Box py="24px" mx="auto" maxW={{ base: "100%", md: "540px" }}>
      <Box mb="32px" borderRadius="24px" p="24px" bg="brand.darkerBg">
        <HStack spacing="12px" align="center" mb="42px">
          <FaChevronLeft color="#EAFFF9" fontSize="20px" />
          <Text fontWeight="600" fontSize="28px" color="#EAFFF9">
            Set pool fees
          </Text>
        </HStack>
        <Text mb="14px" fontWeight="600" fontSize="23px" color="#EAFFF9">
          Initial swap fee
        </Text>
        <Text mb="40px" fontWeight="600" fontSize="19px" color="#A4C8BE">
          Lorem ipsum dolor sit amet consectetur. Faucibus integer odio dictum
          felis ac ut ipsum id cras.
        </Text>
        {/* Set initial swap fees */}
        <Flex gap="12px" mb="36px">
          {initialSwapFees.map((fee) => {
            const color = poolFees === fee ? "#1BD19C" : "#EAFFF9";
            return (
            <Box
              fontWeight="600"
              fontSize="23px"
              color={color}
              p="12px 8px"
              border={`1px solid ${color}`}
              borderRadius="8px"
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                updatePoolDetail("poolFees", fee);
              }}
            >
              {`${fee}`}%
            </Box>
          )})}
        </Flex>
        <Text mb="12px" fontWeight="600" fontSize="19px" color="#A4C8BE">
          Phanes network manage pool fees
        </Text>
        <Button
          border="1px solid #1bd19c"
          borderRadius="8px"
          bg="#1BD19C"
          py="27px"
          fontSize="23px"
          fontWeight="600"
          color="white"
          w="100%"
          disabled={!poolFees}
          onClick={goNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
