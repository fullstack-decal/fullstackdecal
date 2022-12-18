import React, { useEffect } from 'react';
import { Center, Text } from '@chakra-ui/react';

const Fa21Site = () => {
  useEffect(() => {
    window.location.href =
      'https://webatberkeley.notion.site/Introduction-to-Full-Stack-Development-DeCal-Fall-2021-c5d2904bb68a4ab78a1ce2d075063e76';
  }, []);

  return (
    <Center w="100vw" h="100vh">
      <Text>Redirecting...</Text>
    </Center>
  );
};

export default Fa21Site;
