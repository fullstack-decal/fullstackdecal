import React, { useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";

const Enroll = () => {
  useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfktrNEIJovVzKOTV2gJEpg30kK0SVKoXXur0boEhNwlJ-jpg/viewform";
  }, []);

  return (
    <Center w="100vw" h="100vh">
      <Text>Redirecting...</Text>
    </Center>
  );
};

export default Enroll;
