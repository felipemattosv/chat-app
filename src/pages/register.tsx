/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import { ChatIcon, LockIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
  Link,
} from '@chakra-ui/react';
import { NextPage } from 'next';

const Register: NextPage = () => {
  return (
    <Flex h="100vh" justify="center" align="center" flexDir="column">
      <ChatIcon boxSize={16} color="#8800C7" />
      <InputGroup w="14rem" mt="3rem">
        <InputLeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input
          placeholder="Enter your email"
          color="white"
          _hover={{ opacity: '0.5' }}
        />
      </InputGroup>
      <InputGroup width="14rem" mt="1rem">
        <InputLeftElement
          pointerEvents="none"
          children={<LockIcon color="gray.300" />}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          color="white"
          _hover={{ opacity: '0.5' }}
        />
      </InputGroup>
      <Text w="14rem" color="red.900">
        Password must be at least 6 characters long
      </Text>
      <Button
        mt="2rem"
        variant="outline"
        color="white"
        _hover={{ opacity: '0.5' }}
      >
        Register
      </Button>
      <Text mt="0.5rem" color="white">
        <Link href="./">Go back to login page</Link>
      </Text>
    </Flex>
  );
};

export default Register;
