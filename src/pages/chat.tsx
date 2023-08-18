/* eslint-disable react/function-component-definition */
import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

import { ChatHeader } from '../components/ChatHeader';

const Chat: NextPage = () => {
  return (
    <Flex justify="center" align="center" h="100vh" w="100vw" flexDir="column">
      <ChatHeader />
    </Flex>
  );
};

export default Chat;
