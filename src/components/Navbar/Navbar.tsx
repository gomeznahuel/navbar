import { useState } from "react";
import { Wrapper, Container, LogoContainer, Menu, MenuItem, MobileIcon } from "./Navbar.elements";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper className="navbar">
        <LogoContainer
          onClick={
            showMobileMenu
              ? () => setShowMobileMenu(false)
              : () => setShowMobileMenu(false)
          }
        >
          <NavLink to="/">#hebras</NavLink>
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <VscClose /> : <VscThreeBars />}
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <NavLink to="/">Home</NavLink>
          </MenuItem>

          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <NavLink to="/products">Products</NavLink>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <NavLink to="/about">About Us</NavLink>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <NavLink to="/contact">Contact</NavLink>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
