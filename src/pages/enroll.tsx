import React, { useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";

const Enroll = () => {
  useEffect(() => {
    window.location.href =
      "https://airtable.com/app4DQfVs1iDSqn4b/shrFGkWU1iF8nLpgS";
  }, []);

  return (
    <Center w="100vw" h="100vh">
      <Text>Redirecting...</Text>
    </Center>
  );
};

export default Enroll;
