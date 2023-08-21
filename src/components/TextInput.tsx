/* eslint-disable react/no-children-prop */
import { RiSendPlaneFill } from 'react-icons/ri';
import { TbMessageCircle } from 'react-icons/tb';

import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  IconButton,
} from '@chakra-ui/react';

export function TextInput() {
  return (
    <InputGroup w="80vw" bg="#0E1013" h="2.5rem">
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={TbMessageCircle} color="gray.300" />}
      />
      <Input
        placeholder="Message"
        color="white"
        variant="Filled"
        borderRadius={0}
        bg="#0E1013"
        _hover={{ bg: '#282A2D', opacity: '0.7' }}
      />
      <IconButton
        aria-label="Send Message"
        icon={<RiSendPlaneFill />}
        bg="#0E1013"
        color="white"
        _hover={{ bg: '#8800C7' }}
      />
    </InputGroup>
  );
}
