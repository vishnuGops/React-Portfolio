import React from 'react';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarMenu,
    SidebarWrapper,
    SidebarLink,
    SideBtnWrap, 
    SidebarRoute} from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen = {isOpen} onClick={toggle}> 
                <Icon onClick = {toggle}>
                    <CloseIcon>

                    </CloseIcon>
                </Icon>

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to = "about" onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to = "discover" onClick={toggle}>
                            Discover
                        </SidebarLink>
                        <SidebarLink to = "Services" onClick={toggle}>
                            Services
                        </SidebarLink>
                        <SidebarLink to = "Signup" onClick={toggle}>
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>

                    <SideBtnWrap>
                        <SidebarRoute to = '/signin'> Sign Up</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
