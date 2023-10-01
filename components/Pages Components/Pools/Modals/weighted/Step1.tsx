import React from "react";
import {
  Box,
  Text,
  Progress,
  Flex,
  VStack,
  Button,
  HStack,
  Wrap,
} from "@chakra-ui/react";
import { SmallText } from "@/components/_common/Typography";
import ETHLogo from "@/public/icons/eth.svg";
import DeleteIcon from "@/public/icons/delete.svg";
import LockIcon from "@/public/icons/lock.svg";
import Image from "next/image";
import { usePoolsContext } from "@/context/PoolsContext";
import { ModalCTABtn } from "@/components/_common/Buttons";
import {IoIosArrowDown} from "react-icons/io"
import { BsCheckCircleFill } from "react-icons/bs"

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
          <SmallText text="Token" color="#EAFFF9" />
          <SmallText text="Weight" color="#EAFFF9" />
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
                key={index}
              >
                <HStack _hover={{ cursor: "pointer" }} align="center">
                  <Image src={ETHLogo} alt="token" />
                  <Text fontSize="23px" fontWeight="600">
                    {item?.token}
                  </Text>
                  <IoIosArrowDown />
                </HStack>
                <HStack align="center" spacing="60px">
                  <Text fontSize="23px" fontWeight="500">
                    {item?.percentage}%
                  </Text>
                  <HStack align="center" spacing="10px">
                    <Wrap _hover={{ cursor: "pointer" }} onClick={() => {}}>
                      <Image src={LockIcon} alt="lock token" />
                    </Wrap>
                    <Wrap _hover={{ cursor: "pointer" }} onClick={() => {}}>
                      <Image src={DeleteIcon} alt="delete" />
                    </Wrap>
                  </HStack>
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
        <ModalCTABtn onClick={goNext} text="Next" />
        <Box>
          <HStack
            border="1px solid #FFD923"
            rounded="4px"
            p="8px 12px"
            align="flex-start"
            bg="#FFFDF1"
            mb="12px"
          >
            <Wrap mt="2px">
              <BsCheckCircleFill fontSize="13px" color="#FFD923" />
            </Wrap>
            <Text fontWeight="600" fontSize="13px" color="#010D09">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
              accumsan malesuada amet odio. Sagittis, nec morbi interdum nisl
              mattis nibh. Laoreet nullam vestibulum cursus est.{" "}
            </Text>
          </HStack>
          <HStack
            border="1px solid #D82122"
            rounded="4px"
            p="8px 12px"
            align="flex-start"
            bg="#FFE2E2"
          >
            <Wrap mt="2px">
              <BsCheckCircleFill fontSize="13px" color="#D82122" />
            </Wrap>
            <Text fontWeight="600" fontSize="13px" color="#010D09">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed
              accumsan malesuada amet odio. Sagittis, nec morbi interdum nisl
              mattis nibh. Laoreet nullam vestibulum cursus est.{" "}
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Step1;
