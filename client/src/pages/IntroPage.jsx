import React from "react";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import bg from "../assets/image/bg.svg";
import ButtonLink from "../components/ButtonLink";

export default function IntroPage() {
  return (
    <Box w="100%" h="100%" pt="70px">
      <Image src={bg} pos="relative" />
      <Flex
        direction="column"
        pos="absolute"
        style={{
          top: "20%",
          right: 0,
          left: 0,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          style={{
            fontSize: "60px",
            textAlign: "center",
            fontWeight: "bold",
            width: "40%",
          }}
        >
          Best food for your taste
        </Box>
        <Box
          style={{
            width: "36%",
            paddingBottom: '20px'
          }}
        >
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </Box>
        <ButtonLink width='200px' href='/login'>
            Let's Explore!
        </ButtonLink>
      </Flex>
    </Box>
  );
}
