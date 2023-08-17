/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import { useState, KeyboardEvent } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { ChatIcon, LockIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
  Link,
  HStack,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { auth, googleAuthProvider } from '../services/firebase-config';

const Login: NextPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const router = useRouter();

  const toast = useToast();

  async function LoginDefault() {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      router.push('./chat');
      setLoginEmail('');
      setLoginPassword('');

      toast({
        title: `Welcome ${auth.currentUser?.email}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Incorrect username/password',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });

      setLoginPassword('');
    }
  }

  function HandleEnterLogin(e: KeyboardEvent) {
    if (e.code === 'Enter' && loginPassword !== '') {
      LoginDefault();
    }
  }

  async function LoginGoogle() {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      router.push('./chat');
      toast({
        title: `Welcome ${auth.currentUser?.email}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      return result.user;
    } catch (error) {
      toast({
        title: 'Cannot login with Google',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Flex h="100vh" justify="center" align="center" flexDir="column">
      <ChatIcon boxSize={16} color="#8800C7" />
      <InputGroup width="14rem" mt="3rem">
        <InputLeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input
          placeholder="email"
          color="white"
          _hover={{ opacity: '0.5' }}
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </InputGroup>
      <InputGroup width="14rem" mt="1rem">
        <InputLeftElement
          pointerEvents="none"
          children={<LockIcon color="gray.300" />}
        />
        <Input
          type="password"
          placeholder="password"
          color="white"
          _hover={{ opacity: '0.5' }}
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          onKeyDown={(e) => HandleEnterLogin(e)}
        />
      </InputGroup>
      <Button
        mt="2rem"
        variant="outline"
        color="white"
        _hover={{ opacity: '0.5' }}
        onClick={() => LoginDefault()}
      >
        Login
      </Button>
      <Text mt="0.5rem" color="white">
        <Link href="./register">First access? Click here</Link>
      </Text>
      <Button mt="1rem" onClick={() => LoginGoogle()}>
        <HStack>
          <Text>Or sign in with Google</Text>
          <Icon as={FcGoogle} />
        </HStack>
      </Button>
    </Flex>
  );
};

export default Login;
