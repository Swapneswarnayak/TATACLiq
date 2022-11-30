import React from 'react'
import {Box,Image,Badge} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

const ProductCard = () => {
    const data = {
        department: "footwear",
        category: "men",
        img: "https://bit.ly/3CPmtqo",
        brand: "Woodland",
        name: "Woodland Men's Rust Derby Shoes",
        price: "1497",
        strikedPrice:"1699",
        product_type: "casual"
      }
  return (
    <div>
   <Box width='205px' height='auto' >
        <Box  >
        <Image width='100%' src={data.img} alt={data.img} />
        </Box>
        <Box display='flex' justifyContent='space-between'>
            <Box>
                {data.brand}
            </Box>
            <Box>
            <i class="fa-regular fa-heart"></i>
            </Box>
        </Box>
        <Box textAlign='left' fontWeight='300' padding='5px auto' color='#4a4a4a' lineHeight='125%'  fontSize='14px'>
            {data.name}
        </Box>
        <Box display='flex' justifycontent='left'>
        <Box>
        ₹{data.price}
        </Box>
        <Box textDecoration='line-through'>
        ₹{data.strikedPrice }
        </Box>

        </Box>
        <Box display='flex' justifycontent='left'>
            <Badge colorScheme='red'> 4.2
                {/* <StarIcon color='rgb(73,155,31)' width='12px'/> */}
                </Badge>
            <Box>(5)</Box>
        </Box>
    </Box>
    <Badge colorScheme='red'>Success</Badge>
    </div>
  )
}

export default ProductCard