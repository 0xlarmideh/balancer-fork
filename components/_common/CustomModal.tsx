import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
interface IModalProps {
  isOpen: boolean;
  isCentered?: boolean;
  onClose: () => void;
  children: ReactNode | ReactElement;
  maxW: any;
}
const CustomModal = ({ isOpen, isCentered, onClose, children, maxW }: IModalProps) => {
   
  return (
    <Modal

      isCentered={isCentered}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        // top='30px'
        borderRadius="12px"
        maxH="85vh"
        margin='auto'
        overflowY="scroll"
        sx={{
          borderRadius: "12px",
          background: "#070E0C",
          boxShadow: "12px 12px 64px 0px rgba(16, 123, 92, 0.60)",
          "&::-webkit-scrollbar": {
            width: "0px",
          },
          "&::-webkit-scrollbar-track": {
            width: "0px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "none",
          },
        }}
        maxW={maxW}
      >
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
