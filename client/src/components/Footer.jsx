import { Box, Container, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import { FaFacebookF } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import ButtonLink from "./ButtonLink";
import food1 from "../assets/image/footer/food1.svg";
import food2 from "../assets/image/footer/food2.svg";
import food3 from "../assets/image/footer/food3.svg";
import food4 from "../assets/image/footer/food4.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box w="100%" bgColor="#474747" p="50px 0">
      <Container maxW="container.xl">
        <Flex justify='space-between'>
          <Flex direction="column" gap="20px">
            <Logo />
            <Box w="23%" color="white">
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </Box>
            <Flex gap="10px">
              <ButtonLink
                href="https://www.facebook.com/profile.php?id=100030813820891"
                borderRadius="50%"
              >
                <FaFacebookF />
              </ButtonLink>
              <ButtonLink
                href="https://github.com/XuanHuong2302220"
                borderRadius="50%"
              >
                <FiGithub />
              </ButtonLink>
              <ButtonLink
                href="https://www.instagram.com/hunos.v/"
                borderRadius="50%"
              >
                <FaInstagram />
              </ButtonLink>
            </Flex>
          </Flex>
          <Flex direction="column">
            <Box pb='10px' color='#cc3333' fontSize='20px' fontWeight='bold' >Follow Me On Instagram</Box>
            <Link to='https://www.instagram.com/hunos.v/'>
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={2}
              >
                <GridItem><Image src={food1} /> </GridItem>
                <GridItem><Image src={food2} /> </GridItem>
                <GridItem><Image src={food3} /> </GridItem>
                <GridItem><Image src={food4} /> </GridItem>
              </Grid>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
