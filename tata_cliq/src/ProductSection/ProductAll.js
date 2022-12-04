import { Accordion, Box, Image } from '@chakra-ui/react'
import lodergif from './loder.gif'
import React, { useEffect, useState } from 'react'
import ProdtctFilter from './ProdtctFilter'
import ProductCard from './ProductCard'
import myContext from './Context/Context'


const ProductAll = () => {
    let[state,setState]=React.useState("")
    let [loder,setloader]=useState(false);

    let data=React.useContext(myContext).stat
    useEffect(()=>{
        setloader(true)
        setState(data)
        setTimeout(()=>{
            setloader(false)
        },200)
    },[state])
    
  return (
    <div style={{backgroundColor:'#ECECEC'}}>
        <Box width={'90%'}   margin='auto'>
           





            {loder?<Image position={"fixed"} top={"30%"} left="30%" margin="auto" width={"50%"} src={lodergif}/>: <Box width='100%' display='grid' backgroundColor={"#ECECEC"}  gridTemplateColumns='21% 75%' gap={'3%'}>
                <Box   style={{borderRadius:"10px",padding:"8px"}} >
                        <ProdtctFilter/>
                </Box>
                
                <Box display='grid' gridTemplateColumns='repeat(4,1fr)'  rowGap={'25px'} columnGap={'8px'}>
                    {data.map((ele,i)=>{
                       return <ProductCard key={i} data={ele}/>
                    })}
                </Box>
            </Box>}



        </Box>
    </div>
  )
}

export default ProductAll;