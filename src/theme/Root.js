import React from 'react';
import textStyles from './textStyles';
import layerStyles from './layerStyles';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles,
  layerStyles,
  components: {
    Box: {
      baseStyle: {
        borderWidth: 0,
        borderRadius: 0,
      },
    },
    AccordionButton: {
      baseStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        border: 'none',
        borderBottomColor: 'gray.200',
        borderTopColor: 'gray.200',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid',
      },
    },
  },
});

// eslint-disable-next-line react/prop-types
const Root = ({ children }) => {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default Root;
