import React from 'react'
import {Box, Heading, Image} from '@chakra-ui/react'

const ProductDetail = () => {
    let obj={
        id: "1",
        department: "footwear",
        category: "men",
        img: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010368972_437Wx649H_202108211730241.jpeg",
        brand: "Woodland",
        name: "Woodland Men's Rust Derby Shoes",
        strikedprice: "1647",
        price: "1497",
        product_type: "casual"
        }
  return (
    <div>
        <Box>
            <Box width='80%' margin='auto' border='2px solid red' display='grid' gridTemplateColumns='35% 60%' gap='20px'>
                <Box border='2px solid green'>
                    <Image width='100%' src={obj.img}   />
                </Box>
                <Box border='2px solid green'>
                    <Heading textAlign='left' as='h1' fontSize='20px' fontWeight="600" fontFamily= 'Rubik, sans-serif' border='2px solid red' mb={4} color='#181818'>Jack & Jones</Heading>
                </Box>

            </Box>
        </Box>
    </div>
  )
}

export default ProductDetail