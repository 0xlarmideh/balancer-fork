import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Flex,
  Text
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

function CustomStepper() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Box pt='24px' px="14px">
      <Stepper colorScheme="green" color='white' py='0' m='0' index={activeStep} gap='0'>
        {steps.map((step, index) => (
          <Step key={index} >
            <Flex flexDir="column" justify="center">
              <StepIndicator>
                <StepStatus
                  complete={<StepNumber />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <Box flexShrink="0">
                {/* <StepDescription>{step.description}</StepDescription> */}
              </Box>
            </Flex>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Flex m='0' pt='12px' justify='space-between'>
        {steps.map((step, index) => (
          <Text color={activeStep === index+1 ? 'brand.phanes' : 'white'}>{step.title}</Text>
        ))}
      </Flex>
    </Box>
  );
}

export default CustomStepper