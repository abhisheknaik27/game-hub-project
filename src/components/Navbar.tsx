import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.avif";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px"></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;