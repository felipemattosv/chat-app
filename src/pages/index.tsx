/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
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
} from '@chakra-ui/react';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <Flex h="100vh" justify="center" align="center" flexDir="column">
      <ChatIcon boxSize={16} color="#8800C7" />
      <InputGroup width="14rem" mt="3rem">
        <InputLeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input placeholder="email" color="white" _hover={{ opacity: '0.5' }} />
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
        />
      </InputGroup>
      <Button
        mt="2rem"
        variant="outline"
        color="white"
        _hover={{ opacity: '0.5' }}
      >
        Login
      </Button>
      <Text mt="0.5rem" color="white">
        <Link href="./register">First access? Click here</Link>
      </Text>
      <Button mt="1rem">
        <HStack>
          <Text>Or sign in with Google</Text>
          <Icon as={FcGoogle} />
        </HStack>
      </Button>
    </Flex>
  );
};

export default Login;
