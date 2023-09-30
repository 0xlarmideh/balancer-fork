import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | ReactElement;
  maxW: any;
}
const CustomModal = ({ isOpen, onClose, children, maxW }: IModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="12px"
        sx={{
          borderRadius: "12px",
          background: "#070E0C",
          boxShadow: "12px 12px 64px 0px rgba(16, 123, 92, 0.60)",
        }}
        maxW={maxW}
      >
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
