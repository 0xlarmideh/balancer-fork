import { FilledButton } from "@/components/_common/Buttons";
import { MediumText } from "@/components/_common/Typography";
import {
  Box,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import PoolTable from "./PoolTable";
import BaseModal from "./Modals/BaseModal";
import { usePoolsContext } from "@/context/PoolsContext";
import Step1 from "./Modals/weighted/Step1";
import CustomModal from "@/components/_common/CustomModal";
import Step2 from "./Modals/weighted/Step2";
import Step3 from "./Modals/weighted/Step3";

const Pools = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isWeightedOpen,
    onClose: onWeightedClose,
    onOpen: onWeightedOpen,
  } = useDisclosure();
  const { setCurrentStep, currentStep, poolDetails, updatePoolDetail } = usePoolsContext();

  const PoolsModals = {
    weighted_pool: {
      1: <Step1 />,
    },
    stable_pool: {
      // 1: <Step1 />
    },
  };

  return (
    <Box pb="12rem">
      <MediumText text="OpBnB pools" />
      <Divider my="24px" />
      <Flex color="brand.darkerText" justify="space-between">
        <InputGroup rounded={"8px"} maxW="240px" bg="white">
          <InputLeftElement py="20px">
            {/* <Search */}
            <CiSearch fontSize="22px" />
          </InputLeftElement>
          <Input
            py="20px"
            fontWeight="400"
            color="brand.darkerText"
            placeholder="Filter by token"
            onChange={() => {
              // Function goes here
            }}
          />
        </InputGroup>
        <FilledButton
          onClick={() => {
            onOpen();
          }}
          text="Create a pool"
          px="24px"
          leftIcon={<AiOutlinePlus />}
        />
      </Flex>
      <PoolTable />
      {currentStep === 0 && (
        <BaseModal
          isOpen={isOpen}
          onClose={() => {
            onClose();
            setCurrentStep(0);
            updatePoolDetail("poolType", null);
          }}
          onWeightedOpen={onWeightedOpen}
          key="step0"
        />
      )}
      {poolDetails?.poolType === "weighted_pool" && (
        <CustomModal
          isOpen={isWeightedOpen}
          onClose={() => {
            onWeightedClose();
            setCurrentStep(0);
            updatePoolDetail("poolType", null);
          }}
          maxW={{ base: "100%", md: "1174px" }}
        >
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
        </CustomModal>
      )}
    </Box>
  );
};

export default Pools;
