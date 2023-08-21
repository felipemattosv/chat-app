import React, { useEffect, useRef, ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export function MessagesList({ children }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (box) {
      box.scrollTop = box.scrollHeight;
    }
  }, [children]);

  return (
    <Box
      overflowY="scroll"
      ref={boxRef}
      h="70vh"
      w="80vw"
      css={`
        &::-webkit-scrollbar {
          width: 0.35rem;
        }
        &::-webkit-scrollbar-track {
          background: 'purple.900';
        }
        &::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 0.25rem;
          border: 0;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}
    >
      {children}
    </Box>
  );
}

export default MessagesList;
