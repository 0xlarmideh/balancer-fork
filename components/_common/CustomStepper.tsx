import React from "react";
import { Box, Center, Flex, Divider, Text } from "@chakra-ui/react";

interface ICustomStepper {
  data: any[];
  currentStep: number;
  stepTitle: string;
}
const CustomStepper = ({ data, currentStep, stepTitle }: ICustomStepper) => {
  const Steps = Array.from(
    { length: data?.length },
    (item, index) => (item = index + 1)
  );
  return (
    <Flex flexDir="column" mx="auto" maxW="850px" my="32px">
      <Flex mb="26px" w="100%" justify="space-between" px="30px" align="center">
        {Steps.map((step, index) => (
          <Flex
            w={data?.length !== index + 1 ? "100%" : "fit-content"}
            align="center"
            key={index}
          >
            <Center
              color="#fff"
              mx="10px" px='12px'
              border="1px solid #EAFFF9"
              rounded="full"
              bg={currentStep === step ? "brand.phanes" : "transparent"}
              w="25px"
              h="25px"
            >
              {step}
            </Center>
            <Divider
              display={data?.length !== index + 1 ? "block" : "none"}
              variant="dashed"
              w="100%"
            />
          </Flex>
        ))}
      </Flex>
      <Flex justify={"space-between"} align="center">
        {data.map((item, index) => (
          <Text
            color={currentStep === index+1 ? "brand.phanes" : "#fff"}
            key={index}
            fontWeight='600'
            fontSize='19px'
          >
            {item?.title}
          </Text>
        ))}
      </Flex>
      <Divider my="26px" />
      <Text textAlign="center" fontWeight="600" fontSize="25px" color="#fff">
        {stepTitle}
      </Text>
    </Flex>
  );
};

export default CustomStepper;
