import { usePoolsContext } from "@/context/PoolsContext";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { IStep2 } from "./Step2";
import { ModalCTABtn } from "@/components/_common/Buttons";

const tokensLiquidity = [
  { token: "ETH", percentage: 50, price: 0.2342, weightPrice: 1750, liquidity: 0 },
  { token: "DAI", percentage: 50, price: 0.2342, weightPrice: 1750, liquidity: 0 },
];

export { tokensLiquidity };

const Step2Details = ({setShowDetails}:IStep2) => {
  const {
    goNext,
    goBack,
    setCurrentStep,
    poolDetails: { poolFees, poolType},
  } = usePoolsContext();

  

  const totalWeightPrice = tokensLiquidity
    .map(({ weightPrice }) => weightPrice)
    .reduce((acc, curr) => acc + curr);

  const TextStyle = ({ text, fontWeight }: any) => (
    <Text fontWeight={fontWeight || "600"} color="#EAFFF9" fontSize="19px">
      {text}
    </Text>
  );
  return (
    <Box py="24px" mx="auto" maxW={{ base: "100%", md: "540px" }}>
      <Box mb="32px" borderRadius="24px" p="24px" bg="brand.darkerBg">
        <Text
          borderTopRadius="8px"
          mb="34px"
          bg="#293d36"
          w="100%"
          p="16px 12px"
          color="#fff"
          fontSize="23px"
          fontWeight="600"
        >
          Tokens and initial liquidity
        </Text>
        <VStack spacing="16px" align="flex-start">
          {tokensLiquidity.map((item) => (
            <Box w="100%">
              <Flex flexDirection="row" mb="12px" justify={"space-between"}>
                <TextStyle text={`${item?.percentage}% ${item?.token}`} />
                <TextStyle text={item?.price} />
              </Flex>
              <Flex justify={"space-between"}>
                <TextStyle text={`Initial Weight: ${item?.percentage}%`} />
                <TextStyle fontWeight="400" text={`$${item?.weightPrice}`} />
              </Flex>
            </Box>
          ))}
          <Flex mt="8px" w="100%" justify={"space-between"}>
            <TextStyle text="Total" />
            <TextStyle fontWeight="400" text={`$${totalWeightPrice}`} />
          </Flex>
        </VStack>

        <Text
          borderTopRadius="8px"
          my="34px"
          bg="#293d36"
          w="100%"
          p="16px 12px"
          color="#fff"
          fontSize="23px"
          fontWeight="600"
        >
          Summary
        </Text>
        <VStack w="100%" spacing="32px" align="flex-start">
          <Flex w="100%" justify={"space-between"}>
            <TextStyle text="Pool Name" />
            <HStack align="center">
              <TextStyle
                fontWeight="400"
                text={`${tokensLiquidity[0].token}-${tokensLiquidity[1].token}`}
              />
              <Box
                _hover={{ cursor: "pointer" }}
                onClick={() => setCurrentStep(1)}
              >
                <BiEdit color="#EAFFF9" fontSize="21px" />
              </Box>
            </HStack>
          </Flex>
          <Flex w="100%" justify={"space-between"}>
            <TextStyle text="Pool Symbol" />
            <HStack align="center">
              <TextStyle
                fontWeight="400"
                text={`${tokensLiquidity[0].token}-${tokensLiquidity[1].token}`}
              />
              <Box
                _hover={{ cursor: "pointer" }}
                onClick={() => setCurrentStep(1)}
              >
                <BiEdit color="#EAFFF9" fontSize="21px" />
              </Box>
            </HStack>
          </Flex>
          <Flex w="100%" justify={"space-between"}>
            <TextStyle text="Pool Type" />
            <TextStyle
              fontWeight="400"
              text={poolType === "weighted_pool" ? "Weighted" : "Stable"}
            />
          </Flex>
          <Flex w="100%" justify={"space-between"}>
            <TextStyle text="Swap Fees" />
            <HStack align="center">
              <TextStyle fontWeight="400" text={`${poolFees}%`} />
              <Box _hover={{ cursor: "pointer" }} onClick={goBack}>
                <BiEdit color="#EAFFF9" fontSize="21px" />
              </Box>
            </HStack>
          </Flex>
        </VStack>
        <ModalCTABtn
          text="Approve ETH for adding liquidity"
          onClick={() => {
            setShowDetails(false);
            goNext();
          }}
        />
      </Box>
    </Box>
  );
};

export default Step2Details;
