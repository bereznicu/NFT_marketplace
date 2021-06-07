import React, {useContext} from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarLink, SidebarRoute} from './SidebarElements';
import { NavigationContext } from '../../providers/NavigationProvider/NavigationContext' 

function Sidebar() {

    const { sidebar, wallet } = useContext(NavigationContext);
    const [isOpen, toggleSidebar] = sidebar;

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggleSidebar}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggleSidebar}>
                        About
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggleSidebar}>
                        About
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggleSidebar}>
                        About
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/authenticate">
                        Authenticate
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
