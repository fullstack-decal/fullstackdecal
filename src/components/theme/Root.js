import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Root = ({ children }) => {
  return <ChakraProvider>
    {children}
  </ChakraProvider>;
};

export default Root;
