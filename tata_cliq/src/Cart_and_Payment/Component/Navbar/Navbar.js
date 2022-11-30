import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  Button,
  MenuDivider,
} from '@chakra-ui/react'
import "../Allcss.css/all.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div id='logo'><img src="/Tata_Assets/logo.png" alt='Logo' /></div>
        <div id='users'>
            {/* <img src='/Tata_Assets/User.png' alt='profile' /> */}
            <Menu>
  <MenuButton as={Button} colorScheme='pink'>
    Profile
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
         
        </div>
    </div>
  )
}

export default Navbar