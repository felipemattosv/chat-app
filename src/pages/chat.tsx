/* eslint-disable react/function-component-definition */
import { useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { NextPage } from 'next';

import { ChatHeader } from '../components/ChatHeader';
import { ImageInput } from '../components/ImageInput';
import { ImageMessage } from '../components/ImageMessage';
import MessagesList from '../components/MessagesList';
import { TextInput } from '../components/TextInput';
import { TextMessage } from '../components/TextMessage';
import { useMessages } from '../hooks/useMessages';
import { auth } from '../services/firebase-config';

const Chat: NextPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const { messages } = useMessages();

  onAuthStateChanged(auth, (currentUser) => {
    setUserEmail(currentUser?.email ?? '');
  });
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Flex justify="center" align="center" h="100vh" w="100vw" flexDir="column">
      <ChatHeader userEmail={userEmail} />
      <MessagesList>
        {messages.map((message) =>
          message.type === 'text' ? (
            <TextMessage
              key={message.id}
              userEmail={userEmail}
              authorEmail={message.authorEmail}
              content={message.content}
              createdAt={message.createdAt}
            />
          ) : (
            <ImageMessage
              key={message.id}
              userEmail={userEmail}
              authorEmail={message.authorEmail}
              content={message.content}
              createdAt={message.createdAt}
            />
          )
        )}
      </MessagesList>
      <Flex w="80vw">
        <TextInput userEmail={userEmail} />
        <ImageInput userEmail={userEmail} />
      </Flex>
    </Flex>
  );
};

export default Chat;
