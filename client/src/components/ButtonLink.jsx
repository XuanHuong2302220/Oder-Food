import React from 'react'
import { Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

export default function ButtonLink({children, href, width, borderRadius, color,onClick}) {
  return (
   <Link to = {href}>
      <Button colorScheme={color?color: 'orange'} w={width} borderRadius={borderRadius ? borderRadius : '20px'} onClick={onClick}>
        {children}
      </Button>
   </Link>
  )
}
