import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Flex, Text, HStack, IconButton } from '@chakra-ui/react';

interface TextMessageProps {
  userEmail: string;
  authorEmail: string;
  content: string;
  createdAt: number;
}

export function TextMessage({
  userEmail,
  authorEmail,
  content,
  createdAt,
}: TextMessageProps) {
  const userIsAuthor: boolean = userEmail === authorEmail;
  const authorUsername: string = authorEmail.substring(
    0,
    authorEmail.indexOf('@')
  );
  const sendDate = new Date(createdAt);
  const sendDateFormatted = sendDate.toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Flex
      w={{ base: '40vw', md: '25vw' }}
      mt="1.8rem"
      mb="1.8rem"
      ml={userIsAuthor ? { base: '35vw', md: '53.5vw' } : '1vw'}
      flexDir="column"
      fontSize="1.5vw"
    >
      <HStack ml={userIsAuthor ? '11vw' : '0.5vw'} mb="0.75vh">
        <Text color="white" fontSize={{ base: '4vw', md: '1.6vw' }} as="b">
          {userIsAuthor ? '' : authorUsername}
        </Text>
        <Text color="white" mt="0.25rem" fontSize="0.8rem">
          {userIsAuthor ? '' : ' '}
          {sendDateFormatted}
        </Text>
      </HStack>
      <Flex
        bg={userIsAuthor ? '#8800C7' : '#0E1013'}
        borderRadius={
          userIsAuthor ? '1.5rem 1.5rem 0 1.5rem' : '0 1.5rem 1.5rem 1.5rem'
        }
        border="0.1rem solid black"
        p="1rem"
        flexDir="column"
      >
        <Text color="white" fontSize="1rem" wordBreak="break-word">
          {content}
        </Text>
        {userIsAuthor ? (
          <Flex justify="right">
            <IconButton
              aria-label="Edit Message"
              icon={<EditIcon />}
              bg={userIsAuthor ? '#0E1013' : '#8800C7'}
              color="white"
              size="sm"
              _hover={{ opacity: '0.5' }}
            />
            <IconButton
              aria-label="Delete Message"
              icon={<DeleteIcon />}
              bg={userIsAuthor ? '#0E1013' : '#8800C7'}
              color="white"
              ml="0.75rem"
              size="sm"
              _hover={{ opacity: '0.5' }}
            />
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
}
