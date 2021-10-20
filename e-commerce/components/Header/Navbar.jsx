import React from "react";
import styled from "styled-components";
import navbarLogo from "../../images/logo.svg";
import shopIcon from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import { NavLink } from "react-router-dom";

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 34px;
  border-bottom: 1px solid #e4e9f2;

  .navbar-logo {
    width: 137.5px;
    height: 20px;
  }
`;

const NavbarLinksStyled = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  margin-left: -250px;

  li {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 26px;
    color: #69707d;
    margin-right: 32px;
    cursor: pointer;
  }
`;

const NavbarControlStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ShopIconStyled = styled.img`
  margin-right: 50px;
`;
const ProfilePhotoStyled = styled.img`
  width: 50px;
  height: 50px;
`;

function Navbar() {
  return (
    <NavbarStyled>
      <img src={navbarLogo} className="navbar-logo" alt="logo" />
      <NavbarLinksStyled>
        <li>Collections</li>
        {/* <NavLink to="/men" activeClassName="selected">
              Men
            </NavLink> */}

        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </NavbarLinksStyled>
      <NavbarControlStyled>
        <ShopIconStyled src={shopIcon} alt="" />
        <ProfilePhotoStyled src={avatar} alt="" />
      </NavbarControlStyled>
    </NavbarStyled>
  );
}

export default Navbar;
