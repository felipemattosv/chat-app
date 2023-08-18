import { ChatIcon } from '@chakra-ui/icons';
import { Flex, Text, Button, Divider, HStack } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

import { auth } from '../services/firebase-config';

interface ChatHeaderProps {
  userEmail: string;
}

export function ChatHeader({ userEmail }: ChatHeaderProps) {
  const router = useRouter();

  async function Logout() {
    await signOut(auth);
    router.push('/');
  }

  return (
    <Flex flexDir="column" align="center" w="80vw" h="12vh">
      <Flex
        flexDir="row"
        justify="space-between"
        align="center"
        w="80vw"
        mb="1rem"
      >
        <ChatIcon color="#8800C7" boxSize="4vw" ml="3vw" />
        <HStack color="white" align="center" spacing="1vw">
          <Text fontSize={{ base: '1.5vw', md: '1vw' }}>Logged as: </Text>
          <Text fontSize={{ base: '2.8vw', md: '1.5vw' }}>{userEmail}</Text>
        </HStack>
        <Button
          variant="outline"
          color="white"
          size="1vw"
          fontSize={{ base: '2.5vw', md: '1.5vw' }}
          _hover={{ color: '#8800C7', opacity: '0.7' }}
          border="0"
          mr="3vw"
          onClick={() => Logout()}
        >
          Logout
        </Button>
      </Flex>
      <Divider
        orientation="horizontal"
        colorScheme="#0E1013"
        borderColor="#0E1013"
      />
    </Flex>
  );
}
