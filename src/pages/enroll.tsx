import React, { useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";

const Enroll = () => {
  useEffect(() => {
    window.location.href = "https://forms.gle/B3Jp4fYNdfzZfZct9";
  }, []);

  return (
    <Center w="100vw" h="100vh">
      <Text>Redirecting...</Text>
    </Center>
  );
};

export default Enroll;
