import React from 'react'
import "../Allcss.css/all.css"
import { Input } from '@chakra-ui/react'
const MyBag = () => {
  return (
    <>
    <div id='mybag'>
      <div style={{display:"flex", alignItems:"center"}}> 
        <div><img width={"60px"} src='https://thumbs.gfycat.com/AstonishingWhisperedInchworm-size_restricted.gif' alt='bag_gif'/></div>
      <div><h2>My Bag</h2></div>
      
      </div>
      
      
      <div id='bagin'>
      <p>Bhubaneswar, 751030</p>
      <Input variant='flushed' type="text"  placeholder='Change PIN Code....' />
      </div>
      
        
        
    </div>
     
     </>
  )
}

export default MyBag