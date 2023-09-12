import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React, { ReactElement } from "react";
interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ReactElement;
  maxW: any;
}
const CustomModal = ({ isOpen, onClose, content, maxW }: IModalProps) => {
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
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
