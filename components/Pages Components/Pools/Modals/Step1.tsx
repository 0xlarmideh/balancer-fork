import { Flex } from "@chakra-ui/react";
import React from "react";
import CustomModal from "../../../_common/CustomModal";

const Step1 = ({ isOpen, onClose }) => {
  const ModalContent = () => {
    const ModalContentData = [
      {
        title: "Create a weighted pool",
        description: "Create a weighted pool",
      },
      { title: "Create a stable pool", description: "Create a stable pool" },
    ];
    return <Flex flexDir="column">
      {ModalContentData.map((item) => {
        return (
          <><Text></Text></>
        )
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
