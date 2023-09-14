import { Flex, Text, VStack } from "@chakra-ui/react";
import React, {useEffect} from "react";
import CustomModal from "../../../_common/CustomModal";
import { poolType, usePoolsContext } from "@/context/PoolsContext";
import CustomStepper from "@/components/_common/CustomStepper";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const BaseModal = ({ isOpen, onClose }:IModalProps) => {
  const {setCurrentStep, currentStep, setPoolType} = usePoolsContext()
  useEffect(() => {
console.log(currentStep)
  }, [currentStep])
  
  const ModalContent = () => {
    type ModalContent = {
      title: string;
      description: string;
      poolType: poolType
    }
    const ModalContentData:ModalContent[] = [
      {
        title: "Create a weighted pool",
        description: "Best for unrelated assets e.g WETH/Metis",
        poolType: 'weighted_pool'
      },
      {
        title: "Create a stable pool",
        description: "Best for related assets e.g WETH/rETH",
        poolType: 'stable_pool'
      },
    ];
    return (
      <>
        <CustomStepper />
        <Flex px="14px" py="30px" flexDir="column" gap="24px">
          {ModalContentData.map((item, idx) => {
            return (
              <VStack
                bg="#081713"
                borderRadius="12px"
                align="flex-start"
                spacing="8px"
                p="16px"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.05)",
                  transition: "all 1s",
                  boxShadow: "2px 2px 12px 0px rgba(16, 123, 92, 0.60)",
                }}
                onClick={() => {
                  // function goes here
                  setPoolType(item?.poolType);
                  setCurrentStep(2);
                }}
                key={idx}
              >
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  color="brand.lighterText"
                >
                  {item?.title}
                </Text>
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="brand.lighterText"
                >
                  {item?.description}
                </Text>
              </VStack>
            );
          })}
        </Flex>
      </>
    );
  };
  return (
    <>
      <CustomModal
        content={<ModalContent />}
        isOpen={isOpen}
        maxW={{ base: "100%", md: "480px" }}
        onClose={onClose}
        key="Step-1"
      />
    </>
  );
};

export default BaseModal;