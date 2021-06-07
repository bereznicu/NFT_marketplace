import React, {useContext} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, AccountButton } from './NavbarElements';
import { NavigationContext } from '../../providers/NavigationProvider/NavigationContext';

const Navbar = () => {

    const { sidebar, wallet } = useContext(NavigationContext);
    const [isOpen, toggle] = sidebar;
    const [walletConnected, setWalletConnection] = wallet;
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Artistic</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="random">MapTheList</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gallery">Gallery</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn >
                        <NavBtnLink to="/wallets" $walletConnected={ walletConnected }>Connect wallet</NavBtnLink>
                        <AccountButton $walletConnected={ walletConnected }>
                            { walletConnected }
                        </AccountButton>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
