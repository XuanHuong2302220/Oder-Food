import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import logo from "../assets/image/logo.svg";
import { Link } from "react-router-dom";

export default function Logo({href}) {
  return (
    <Link to = {href}>
        <Flex align="center" h="100%" cursor='pointer'>
          <Image src={logo} alt="Logo" boxSize="40px" />
          <Box fontWeight="900" fontSize="30px" h="40px" fontStyle='italic' color='#cc3333'>
            MERN FOOD
          </Box>
        </Flex>
    </Link>
  );
}
