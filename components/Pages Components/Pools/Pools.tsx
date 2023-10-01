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
import Step2Details from "./Modals/weighted/Step2Details";
import { useState } from "react";
import CustomStepper from "@/components/_common/CustomStepper";

const Pools = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showDetails, setShowDetails] = useState(false);
  const {
    isOpen: isWeightedOpen,
    onClose: onWeightedClose,
    onOpen: onWeightedOpen,
  } = useDisclosure();
  const {
    setCurrentStep,
    currentStep,
    poolDetails,
    updatePoolDetail,
    clearPoolDetail,
  } = usePoolsContext();

  const data = [
    { title: "Create tokens ", subtitle: "" },
    { title: "Set pool fees", subtitle: "" },
    { title: "Set initial liquidity", subtitle: "" },
    { title: "Set initial liquidity", subtitle: "" },
  ];

  const modalContentRef = React.useRef<any>();
  React.useEffect(() => {
    if (currentStep) {
      modalContentRef.current?.scrollTo(0, 0);
    }
  }, [currentStep]);

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
          isCentered
          onClose={() => {
            onWeightedClose();
            setCurrentStep(0);
            clearPoolDetail();
            setShowDetails(false);
          }}
          maxW={{ base: "100%", md: "1174px" }}
        >
          <Box ref={modalContentRef}>
            <Text
              mt="70px"
              fontSize="28px"
              textAlign="center"
              fontWeight="600"
              color="#fff"
            >
              Create a Weighted Pool
            </Text>
            <CustomStepper
              currentStep={currentStep}
              data={data}
              stepTitle="Choose tokens and weight"
            />
            {currentStep === 1 && <Step1 />}
            {currentStep === 2 && (
              <>
                {!showDetails ? (
                  <Step2 setShowDetails={setShowDetails} />
                ) : (
                  <Step2Details setShowDetails={setShowDetails} />
                )}
              </>
            )}
            {currentStep === 3 && <Step3 />}
            {/* {currentStep === 4 && <Step4 />} */}
          </Box>
        </CustomModal>
      )}
    </Box>
  );
};

export default Pools;
