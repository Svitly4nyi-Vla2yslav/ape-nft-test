import React from 'react';

import {
  BurgerMenuButton,
  ButtonMenu,
  ContainerMenu,
  ContainerNetworks,
  Image,
  Link,
  MenuItem,
  TextButton,
  Wrapper,
} from './BurgerMenu.styled';
import discord from "../../assets/icons/discord_logo.svg"
import ship from "../../assets/icons/ship.svg"
import x from "../../assets/icons/X.svg"

export interface BurgerMenuProps {
  isopen?: boolean ;
  toggleMenu?: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isopen, toggleMenu }) => {
  return (
    <Wrapper>
      <BurgerMenuButton onClick={toggleMenu}>
        <TextButton> {isopen ? 'CLOSE' : 'MENU'}</TextButton>
      </BurgerMenuButton>
      <ContainerMenu isopen={isopen}>
        <ButtonMenu>
          <MenuItem><a href="#about" target='_self'>ABOUT</a> </MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem ><a href="#mind-map" target='_self'>MIND-MAP</a> </MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem id="faq">FAQ</MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem id="arts">ARTS</MenuItem>
        </ButtonMenu>
        <ButtonMenu>
          <MenuItem id="mint">MINT</MenuItem>
        </ButtonMenu>
      </ContainerMenu>
      <ContainerNetworks>
        <Link href='#'><Image src={discord} alt='📱' /></Link>
        <Link href='#'><Image src={ship} alt='🚢'/></Link>
        <Link href='#'><Image src={x} alt='✖️' /></Link>
      </ContainerNetworks>
    </Wrapper>
  );
};

export default BurgerMenu;