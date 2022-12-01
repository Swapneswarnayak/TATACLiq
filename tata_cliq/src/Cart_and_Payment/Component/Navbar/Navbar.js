import React from "react";
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
} from "@chakra-ui/react";
import "../Allcss.css/all.css";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo">
        <img src="/Tata_Assets/logo.png" alt="Logo" />
      </div>
      <div
        id="users"
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <div>
          <Wrap>
            <WrapItem>
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            </WrapItem>
          </Wrap>
        </div>
        <div>
          <Menu>
            <MenuButton as={Button} colorScheme="pink">
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
