import React, { useState } from "react";
import { Box, Text, Flex, HStack, VStack, Switch, Input } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import { tokensLiquidity } from "./Step2Details";
import Image from "next/image";
import { ModalCTABtn } from "@/components/_common/Buttons";
import { usePoolsContext } from "@/context/PoolsContext";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Step3 = () => {
  const [liquidity, setLiquidity] = useState(tokensLiquidity);
  const {goNext} = usePoolsContext();

  // Set Liquidity value
  const setLiquidityValue = ( index: number, value: any) => {
    setLiquidity((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            liquidity: parseFloat(value),
          };
        }
        return item;
      });
    });
  };
  return (
    <Box py="24px" mx="auto" maxW={{ base: "100%", md: "540px" }}>
      <Box mb="32px" borderRadius="24px" p="24px" bg="brand.darkerBg">
        <HStack spacing="12px" align="center">
          <FaChevronLeft color="#EAFFF9" fontSize="20px" />
          <Text fontWeight="600" fontSize="28px" color="#EAFFF9">
            Set initial liquidity
          </Text>
        </HStack>
        <Text my="20px" fontWeight={500} fontSize="16px" color="#C4AB30">
          Optimized amount have been pre-filled
        </Text>
        <VStack align="flex-start" spacing="10px">
          {liquidity.map((token, index) => (
            <Box
              p="12px"
              borderRadius="8px"
              border="1px solid #EAFFF9"
              w="100%"
              key={index}
            >
              <Flex
                align="center"
                flexDir="row"
                justify="space-between"
                w="100%"
              >
                <HStack
                  p="12px 8px"
                  borderRadius="8px"
                  border="1px solid #EAFFF9"
                  align="center"
                >
                  {/* <Image /> */}
                  <Text color="#EAFFF9" fontWeight="600" fontSize="23px">
                    {token?.token} {token?.percentage}%
                  </Text>
                </HStack>
                <Input
                variant='unstyled'
                  color="white"
                  textAlign="right"
                  maxW="150px"
                  fontWeight="700"
                  fontSize="28px"
                  type="number"
                  placeholder="0"
                  min={0}
                  max={token?.price}
                  value={token?.liquidity}
                  onChange={(e) => {
                    const value = e.target.value;
                    setLiquidityValue(index, value);
                  }}
                />
              </Flex>
              <Text mt="20px" color="#A4C8BE" fontWeight="500" fontSize="19px">
                Bal: {token?.price}{" "}
                <Text
                  as="span"
                  color="brand.phanes"
                  fontWeight="500"
                  fontSize="19px"
                  _hover={{ cursor: "pointer" }}
                  onClick={() => {
                    setLiquidityValue(index, token?.price);
                  }}
                >
                  Max
                </Text>
              </Text>
            </Box>
          ))}
        </VStack>
        <Flex mt="20px" justify="space-between" align="center">
          <Text fontWeight="600" fontSize="23px" color="#EAFFF9">
            Total
          </Text>
          <Text color="#fff" fontWeight="600" fontSize="28px">
            $0.00
          </Text>
        </Flex>
        <Text mt="20px" color="#A4C8BE" fontWeight="600" fontSize="23px">
          Available Bal:{" "}
          <Text
            as="span"
            color="brand.phanes"
            fontWeight="500"
            fontSize="19px"
            _hover={{ cursor: "pointer" }}
          >
            {" "}
            0.786
          </Text>
        </Text>
        <Flex mt="28px" color="#EAFFF9" align="center" gap="12px">
          <AiOutlineInfoCircle />
          <Text fontSize="16px" fontWeight="400">
            Auto optimize liquidity
          </Text>
          <Switch colorScheme="green" />
        </Flex>
        <ModalCTABtn text="Preview" onClick={goNext} />
      </Box>
    </Box>
  );
};

export default Step3;
