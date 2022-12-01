import React from 'react'
import {AccordionItem,AccordionButton,Box,AccordionPanel, Accordion} from '@chakra-ui/react'
import {MinusIcon,AddIcon} from '@chakra-ui/icons'

const ProdtctFilter = () => {
  return (
    <div>
        <Accordion allowMultiple>
            <AccordionItem borderTop="2px solid red" width='202px' padding='10px'>
        {({ isExpanded }) => (
        <>
            <h2 style={{borderTop:"1px solid green"}}>
            <AccordionButton border ='none' backgroundColor='white'>
                <Box flex='1' textAlign='left'>
                Section 2 title
                </Box>
                {isExpanded ? (
                <MinusIcon fontSize='12px' />
                ) : (
                <AddIcon fontSize='12px' />
                )}
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            
            </AccordionPanel>
        </>
        )}
            </AccordionItem>
         </Accordion>
    </div>
  )
}

export default ProdtctFilter