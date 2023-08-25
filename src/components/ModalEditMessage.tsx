import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
} from '@chakra-ui/react';

import { useMessages } from '../hooks/useMessages';

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
  oldContent: string;
  messageId: string;
}

export function ModalEditMessage({
  isOpen,
  onClose,
  oldContent,
  messageId,
}: ModalEditProps) {
  const { updateMessage } = useMessages();

  function handleUpdateMessage() {
    updateMessage(messageId, newContent);
    onClose();
  }

  const [newContent, setNewContent] = useState(oldContent);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent bg="#0E1013" color="white">
        <ModalHeader color="#8800C7">Edit message</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            bg="#8800C7"
            _hover={{ bg: '#8800C7', color: '#282A2D' }}
            mr={3}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            bg="#282A2D"
            _hover={{ bg: '#282A2D', color: '#8800C7' }}
            onClick={() => handleUpdateMessage()}
          >
            Edit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
