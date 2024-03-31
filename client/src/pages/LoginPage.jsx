import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import ButtonLink from "../components/ButtonLink";
import Logo from "../components/Logo";
import axios from 'axios';
import { Spinner } from "@chakra-ui/react";

export default function LoginPage() {

  const [user, setUser]= useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:3000/users')
        .then((res)=>{
            setUser(res.data)
            setLoading(false)
        })
        .catch((err)=>{
          console.log(err);
          setLoading(false)
        })
  },[])

  return (
    <Box w="100%" h="100vh" bgColor="#F0F2F5">
      {loading ? <Spinner /> : ""}
      <Container maxW="container.xl" p="50px" h='100%'>
        <Flex w="100%" justify="center"  alignItems="center" h='100%'>
          <Flex
            w="40%"
            gap='20px'
            align='center'
            direction="column"
            boxShadow="base"
            p="30px"
            rounded="md"
            bg="white"
          >
            <Logo />
            <Box fontWeight='bold'>Sign up to continue</Box>

            <FormControl>
              <FormLabel>UserName</FormLabel>
              <Input type="text" placeholder="User Name"/>
            </FormControl>
            <FormControl>
              <FormLabel>PassWord</FormLabel>
              <Input type="password" placeholder="Password"/>
            </FormControl>
            <ButtonLink width='200px'>Sign Up</ButtonLink>
            <ButtonLink width='200px' color='green' href='/register'>Create new account</ButtonLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
