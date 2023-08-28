import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

import { useMessages } from '../hooks/useMessages';

interface ModalDeleteConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  messageId: string;
}

export function ModalDeleteMessage({
  isOpen,
  onClose,
  messageId,
}: ModalDeleteConfirmProps) {
  const { deleteMessage } = useMessages();

  function handleDeleteMessage() {
    deleteMessage(messageId);
    onClose();
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent bg="#0E1013" color="white">
        <ModalHeader color="#8800C7">
          Are you sure you want to delete?
        </ModalHeader>
        <ModalCloseButton />
        <ModalFooter>
          <Button
            bg="#8800C7"
            _hover={{ bg: '#8800C7', color: '#282A2D' }}
            mr={3}
            onClick={onClose}
          >
            No
          </Button>
          <Button
            bg="#282A2D"
            _hover={{ bg: '#282A2D', color: '#8800C7' }}
            onClick={() => handleDeleteMessage()}
          >
            Yes, delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
