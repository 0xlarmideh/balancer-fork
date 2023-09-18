import CustomModal from '@/components/_common/CustomModal'
import React from 'react'
import { IModalProps } from '../BaseModal'
import { Box, Text, Progress, Flex, VStack } from '@chakra-ui/react'
import { SmallText } from '@/components/_common/Typography'

const Step1 = ({isOpen, onClose}:IModalProps) => {
  const ModalContent = () => {
    return (
      <Box mx="auto" maxW={{ base: "100%", md: "540px" }}>
        <Box mb="32px" borderRadius="24px" p="24px" bg="brand.darkerBg">
          <Text fontWeight="500" fontSize="23px" color="white">
            Pool summary
          </Text>
          <Progress borderRadius="full" colorScheme="green" value={20} />
        </Box>
        <Box
          boxShadow="12px 12px 72px 0px rgba(27, 209, 156, 0.50)"
          borderRadius="24px"
          p="24px"
          bg="brand.darkerBg"
        >
          <Flex justify="space-between">
            <SmallText text="Token" />
            <SmallText text="Weight" />
          </Flex>
        </Box>
      </Box>
    );
  }
  return (
    <>
    <CustomModal  content={<ModalContent />} isOpen={isOpen} maxW={{base: '100%', md: '1147px'}} onClose={onClose} />
    </>
  )
}

export default Step1