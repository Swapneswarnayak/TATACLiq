import React from 'react'
import "../Allcss.css/all.css"
import { Input } from '@chakra-ui/react'
const MyBag = () => {
  return (
    <>
    <div id='mybag'>
      <div><h2>My Bag</h2></div>
      <div id='bagin'>
      <p>Bhubaneswar, 751030</p>
      <Input variant='flushed' type="text" maxlength="6" placeholder='Change PIN Code....' />
      </div>
      
        
        
    </div>
     <div className='para'>
     <p >Apply a relevant coupon code here to avail any additional discount. Applicable cashback if any will be credited to your account as per T&C.</p>
     </div>
     </>
  )
}

export default MyBag