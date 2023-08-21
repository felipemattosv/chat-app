/* eslint-disable react/function-component-definition */
import { useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { NextPage } from 'next';

import { ChatHeader } from '../components/ChatHeader';
import MessagesList from '../components/MessagesList';
import { auth } from '../services/firebase-config';

const Chat: NextPage = () => {
  const [userEmail, setUserEmail] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setUserEmail(currentUser?.email ?? '');
  });
  return (
    <Flex justify="center" align="center" h="100vh" w="100vw" flexDir="column">
      <ChatHeader userEmail={userEmail} />
      <MessagesList>
        <p>Messages map here</p>
      </MessagesList>
    </Flex>
  );
};

export default Chat;
