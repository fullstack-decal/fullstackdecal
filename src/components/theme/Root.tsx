import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const Root: React.FC = ({ children }) => {
  return <ChakraProvider>
    {children}
  </ChakraProvider>
}

export default Root
