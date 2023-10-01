import React from "react";
import {
  Box,
  Text,
  Progress,
  Flex,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { SmallText } from "@/components/_common/Typography";
import ETHLogo from "@/public/icons/eth.svg";
import Image from "next/image";
import { usePoolsContext } from "@/context/PoolsContext";
import { ModalCTABtn } from "@/components/_common/Buttons";

const Step1 = () => {
  const data = {
    token: "ETH",
    percentage: 25,
    icon: ETHLogo,
  };
  const { goNext } = usePoolsContext();
  return (
    <Box py="24px" mx="auto" maxW={{ base: "100%", md: "540px" }}>
      <Box mb="32px" borderRadius="24px" p="24px" bg="brand.darkerBg">
        <Text fontWeight="500" fontSize="23px" color="white">
          Pool summary
        </Text>
        <Progress borderRadius="full" colorScheme="green" value={20} />
      </Box>
      <Flex
        boxShadow="12px 12px 72px 0px rgba(27, 209, 156, 0.50)"
        borderRadius="24px"
        p="24px"
        bg="brand.darkerBg"
        flexDir="column"
        gap="32px"
      >
        <Flex justify="space-between">
          <SmallText text="Token" />
          <SmallText text="Weight" />
        </Flex>
        <Flex flexDir="column" gap="10px" color="white" justify="space-between">
          {Array(4)
            .fill(data)
            .map((item, index) => (
              <Flex
                justify="space-between"
                px="10px"
                py="14px"
                border="1px solid #A4C8BE"
                rounded="8px"
                _hover={{ cursor: "pointer" }}
                key={index}
              >
                <HStack>
                  <Image src={ETHLogo} alt="token" />
                  <Text>{item?.token}</Text>
                </HStack>
              </Flex>
            ))}
        </Flex>
        <Box>
          <Button
            border="1px solid #1bd19c"
            borderRadius="8px"
            variant="outline"
            color="#1BD19C"
          >
            Add new
          </Button>
        </Box>
        <ModalCTABtn
          onClick={goNext}
          text='Next'
        />
      </Flex>
    </Box>
  );
};

export default Step1;
