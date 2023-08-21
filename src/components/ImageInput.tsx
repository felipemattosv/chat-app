import { BsImage } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';

import {
  Input,
  Icon,
  IconButton,
  Button,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export function ImageInput() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Choose image"
        icon={<Icon as={BsImage} color="white" />}
        variant="ghost"
        _hover={{ bg: '#8800C7' }}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent bg="#0E1013" color="white">
          <ModalHeader color="#8800C7">Image Upload</ModalHeader>
          <ModalCloseButton _hover={{ color: '#8800C7' }} />
          <ModalBody>
            <VStack>
              <Input
                type="file"
                size="xs"
                _hover={{ color: '#8800C7' }}
                p="0px"
                border="0"
                w="18rem"
                mb="1rem"
              />
              <Button
                type="submit"
                bg="#282A2D"
                _hover={{ bg: '#282A2D', color: '#8800C7' }}
                size="sm"
              >
                <HStack>
                  <Text>Enviar</Text>
                  <Icon as={RiSendPlaneFill} />
                </HStack>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
