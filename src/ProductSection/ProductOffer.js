import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductOffer = ({obj}) => {
    // let obj={
    //     img:"https://www.tatacliq.com/src/pdp/components/img/bank_offers.svg",
    //     detail:"15% off on AU Small Finance Bank Limited Debit & Credit Cards.",
    //     code:"Use Code: AUCLIQ300 | Min Purchase: ₹1500"
    // }
  return (
    <div style={{margin:'15px 0px'}}>
        <Box display={'flex'}>
            <Box margin={'0px 10px 0px 0px'}>
                <Image src={obj.img}/>
            </Box>
            <Box>
                <Text textAlign={'left'} margin='0px 0px 10px 0px' color='#231F20' fontSize={'14px'} fontWeight='600' >{obj.detail}</Text>
                <Text textAlign={'left'} color='#231F20' fontSize={'14px'} fontWeight='300' >{obj.code} <span style={{color:'#4C74E3', fontSize:'13px',fontWeight:'400' , cursor:"pointer"}}>more</span></Text>
            </Box>
        </Box>
    </div>
  )
}

export default ProductOffer