import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({children}) {
  return (
   <Box>
        <Header />
        {children}
        <Footer />
   </Box>
  )
}
