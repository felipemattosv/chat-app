/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
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
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { useMessages } from '../hooks/useMessages';
import { storage } from '../services/firebase-config';

interface ImageInputProps {
  userEmail: string;
}

export function ImageInput({ userEmail }: ImageInputProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const [image, setImage] = useState<File | null>(null);
  const { createImageMessage } = useMessages();

  const handleUpload = () => {
    setLoading(true);
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        'state_changed',
        // eslint-disable-next-line prettier/prettier
        () => { }, // progress
        // eslint-disable-next-line prettier/prettier
        () => { }, // errors
        () => {
          getDownloadURL(storageRef).then((url) => {
            handleNewImageURL(url);
            onClose();
            setLoading(false);
          });
        }
      );
    } else {
      toast({
        title: 'Image not selected',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  function handleNewImageURL(imageURL: string) {
    createImageMessage(userEmail, imageURL);
  }

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
                onChange={(e) => handleImageChange(e)}
              />
              {loading ? (
                <Spinner color="#8800C7" />
              ) : (
                <Button
                  type="submit"
                  bg="#282A2D"
                  _hover={{ bg: '#282A2D', color: '#8800C7' }}
                  size="sm"
                  onClick={handleUpload}
                >
                  <HStack>
                    <Text>Enviar</Text>
                    <Icon as={RiSendPlaneFill} />
                  </HStack>
                </Button>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
