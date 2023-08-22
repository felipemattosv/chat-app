import { Flex, Text, HStack, Image } from '@chakra-ui/react';

export function ImageMessage() {
  const userIsAuthor = true;

  return (
    <Flex
      w="25vw"
      mt="1.8rem"
      mb="1.8rem"
      ml={userIsAuthor ? '53.5vw' : '1vw'}
      flexDir="column"
      fontSize="1.5vw"
    >
      <HStack ml={userIsAuthor ? '11vw' : '0.5vw'} mb="0.75vh">
        <Text color="white" fontSize="1.6vw" as="b">
          {userIsAuthor ? '' : 'authorUsername'}
        </Text>
        <Text color="white" mt="0.25rem" fontSize="1.3vw">
          {userIsAuthor ? '' : ' | '}Date
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
        <Image src="https://placehold.co/600x400" boxSize="8rem" />
      </Flex>
    </Flex>
  );
}
