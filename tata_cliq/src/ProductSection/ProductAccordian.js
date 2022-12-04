import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
  } from '@chakra-ui/react'
import React from 'react'

const ProductAccordian = () => {
  return (
    <div>
        <Box width='75%' borderRadius={"7px"} margin={"50px auto"} backgroundColor={'#FFFFFF'}>
        <Accordion padding={"25px"} defaultIndex={[0]} allowMultiple>
  <AccordionItem margin={"25px"}>
    <h2 >
      <AccordionButton backgroundColor={'#FFFFFF'} border={"none"}>
        <Box flex='1' backgroundColor={'#FFFFFF'} fontSize={'16px'} fontWeight={'600'} textAlign='left'>
          Product Description
        </Box>
        <AccordionIcon  />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} margin={"15px auto"}>
      <Box >
        <Text fontSize={'14px'} margin={"15px auto 25px auto"} fontWeight='300'>Refine your casual avatar by slipping on this smart and warm wine bomber jacket from Jack & Jones. Crafted from cotton fabric, this bomber jacket has a mandarin collar, full sleeves and self striped pattern. Complement this regular fit bomber jacket with a simple tee to complete the look.</Text>
        <Box backgroundColor={'#FFFFFF'} display='grid' gridTemplateColumns= 'repeat(3,1fr)' gap='45px'>
            <Box backgroundColor={'#FFFFFF'} alignItems='left'>
                <Text backgroundColor={'#FFFFFF'} fontSize={'14px'} fontWeight='600' >Fit</Text>
                <Text backgroundColor={'#FFFFFF'} fontSize={'14px'} fontWeight='300'>Regular fit</Text>
            </Box>
            <Box backgroundColor={'#FFFFFF'} alignItems='left'>
                <Text backgroundColor={'#FFFFFF'} fontSize={'14px'} fontWeight='600' >Pattern</Text>
                <Text backgroundColor={'#FFFFFF'} fontSize={'14px'} fontWeight='300'>Self</Text>
            </Box>
            <Box backgroundColor={'#FFFFFF'} alignItems='left'>
                <Text backgroundColor={'#FFFFFF'} fontSize={'14px'} fontWeight='600' >Wash</Text>
                <Text backgroundColor={'#FFFFFF'} fontSize={'14px'} fontWeight='300'>Machine-wash</Text>
            </Box>
            <Box backgroundColor={'#FFFFFF'} alignItems='left'>
                <Text backgroundColor={'#FFFFFF'} fontSize={'14px'} fontWeight='600' >Color</Text>
                <Text backgroundColor={'#FFFFFF'} fontSize={'14px'} fontWeight='300'>Wine</Text>
            </Box>
            <Box backgroundColor={'#FFFFFF'} alignItems='left'>
                <Text fontSize={'14px'} fontWeight='600' >Model fit</Text>
                <Text fontSize={'14px'} fontWeight='300'>Model is 6'0"/185 cms and is wearing M</Text>
            </Box>
            <Box alignItems='left'>
                <Text fontSize={'14px'} fontWeight='600' >Neck/Collar</Text>
                <Text fontSize={'14px'} fontWeight='300'>Mandarin collar</Text>
            </Box>
            <Box alignItems='left'>
                <Text fontSize={'14px'} fontWeight='600' >Sleeve</Text>
                <Text fontSize={'14px'} fontWeight='300'>Full Sleeves</Text>
            </Box>
            <Box alignItems='left'>
                <Text fontSize={'14px'} fontWeight='600' >Fabric</Text>
                <Text fontSize={'14px'} fontWeight='300'>98% Cotton, 2% Elastane</Text>
            </Box>
        </Box>
      </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem backgroundColor={'#FFFFFF'} margin={"25px"}>
    <h2>
      <AccordionButton backgroundColor={'#FFFFFF'} border={"none"}>
        <Box flex='1' backgroundColor={'#FFFFFF'} fontSize={'16px'} fontWeight={'600'} textAlign='left'>
          Return & Refund
        </Box>
        <AccordionIcon backgroundColor={'#FFFFFF'}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} margin={"15px auto"}>
      <Text fontSize={'16px'} margin={"15px auto 15px auto"} fontWeight={'300'}>30 Days Easy Return</Text>
      <ul style={{fontSize:'14px',fontWeight:'300',textAlign:'left'}}>
        <li style={{margin:'10px 20px'}}>An order, once placed, can be cancelled until the seller processes it.</li>
        <li style={{margin:'10px 20px'}}>This product can be returned within 30 day(s) of delivery,subject to the Return Policy.</li>
        <li style={{margin:'10px 20px'}}>For any other queries, do reach out to CliQ Care at 90291 08282.</li>
      </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem margin={"25px"}>
    <h2>
      <AccordionButton backgroundColor={'#FFFFFF'} border={"none"}>
        <Box flex='1' fontSize={'16px'} fontWeight={'600'} textAlign='left'>
          Know More
        </Box>
        <AccordionIcon />
      </AccordionButton >
    </h2>
    <AccordionPanel pb={4} margin={"15px auto"}>
    <ul style={{fontSize:'14px',fontWeight:'300',textAlign:'left',listStyleType:'disc'}}>
        <li style={{margin:'10px 20px'}}>An order, once placed, can be cancelled until the seller processes it.</li>
        <li style={{margin:'10px 20px'}}>This product can be returned within 30 day(s) of delivery,subject to the Return Policy.</li>
        <li style={{margin:'10px 20px'}}>For any other queries, do reach out to CliQ Care at 90291 08282.</li>
      </ul>
    </AccordionPanel>
  </AccordionItem >
  <AccordionItem margin={"25px"}>
    <h2>
      <AccordionButton backgroundColor={'#FFFFFF'} border={"none"}>
        <Box flex='1' fontSize={'16px'} fontWeight={'600'} textAlign='left'>
          Brand Info
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} margin={"15px auto"}>
     <Text style={{fontSize:'14px',fontWeight:'300',textAlign:'left'}}>Keeping in mind the fiery spirit of the youth along with vibrant designs, Jack & Jones is a clothing brand targeted towards the fashion-forward generation. Browse through Tata CLiQ to get your hands on Jack & Jones jackets and shirts.</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </Box>
    </div>
  )
}

export default ProductAccordian