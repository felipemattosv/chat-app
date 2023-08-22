import { Flex, Text, HStack } from '@chakra-ui/react';

export function TextMessage() {
  const userIsAuthor = true;

  return (
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
          {userIsAuthor ? '' : 'authorUsername'}
        </Text>
        <Text color="white" mt="0.25rem" fontSize="0.8rem">
          {userIsAuthor ? '' : ' | '}
          Date
        </Text>
      </HStack>
      <Flex
        bg={userIsAuthor ? '#8800C7' : '#0E1013'}
        borderRadius={
          userIsAuthor ? '1.5rem 1.5rem 0 1.5rem' : '0 1.5rem 1.5rem 1.5rem'
        }
        border="0.1rem solid black"
        p="1rem"
      >
        <Text color="white" fontSize="1rem" wordBreak="break-word">
          Content
        </Text>
      </Flex>
    </Flex>
  );
}
