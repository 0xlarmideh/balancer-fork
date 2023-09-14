import CustomModal from '@/components/_common/CustomModal'
import React from 'react'
import { IModalProps } from '../BaseModal'

const Step1 = ({isOpen, onClose}:IModalProps) => {
  const ModalContent = () => {
    return (
      <>

      </>
    )
  }
  return (
    <>
    <CustomModal content={<ModalContent />} isOpen={isOpen} maxW={{base: '100%', md: '1147px'}} onClose={onClose} />
    </>
  )
}

export default Step1