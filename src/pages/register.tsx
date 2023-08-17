/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import { useState } from 'react';

import { ChatIcon, LockIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
  Link,
  useToast,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { auth } from '../services/firebase-config';

const Register: NextPage = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const router = useRouter();

  const toast = useToast();

  async function RegisterDefault() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      router.push('./chat');

      toast({
        title: `Welcome ${user.user?.email}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      let errorMessage = 'Error';

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailRegex.test(registerEmail) === false) {
        errorMessage = 'Invalid email';
      } else if (registerPassword.length < 6) {
        errorMessage = 'Password not accepted';
      } else {
        errorMessage = 'Email already in use';
      }

      toast({
        title: errorMessage,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });

      setRegisterEmail('');
      setRegisterPassword('');
    }
  }

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
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
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
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          focusBorderColor={registerPassword.length < 6 ? 'red.900' : ''}
        />
      </InputGroup>
      <Text w="14rem" color="red.900">
        {registerPassword.length < 6
          ? 'Password must be at least 6 characters long'
          : ''}
      </Text>
      <Button
        mt="2rem"
        variant="outline"
        color="white"
        _hover={{ opacity: '0.5' }}
        onClick={() => RegisterDefault()}
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
