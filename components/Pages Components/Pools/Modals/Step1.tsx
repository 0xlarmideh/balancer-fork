import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CustomModal from "../../../_common/CustomModal";

interface IStep1 {
  isOpen: boolean;
  onClose: () => void;
}
const Step1 = ({ isOpen, onClose }:IStep1) => {
  const ModalContent = () => {
    const ModalContentData = [
      {
        title: "Create a weighted pool",
        description: "Best for unrelated assets e.g WETH/Metis",
      },
      {
        title: "Create a stable pool",
        description: "Best for related assets e.g WETH/rETH",
      },
    ];
    return <Flex px='14px' py='30px' flexDir="column" gap='24px'>
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
            }}
            key={idx}
          >
            <Text fontSize="16px" fontWeight="500" color="brand.lighterText">
              {item?.title}
            </Text>
            <Text fontSize="13px" fontWeight="400" color="brand.lighterText">
              {item?.description}
            </Text>
          </VStack>
        );
      })}
    </Flex>;
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

export default Step1;
