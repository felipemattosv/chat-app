import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Text>Este é o template de React para CT Junior, criado em 2022</Text>
    </Flex>
  );
};

export default Home;
