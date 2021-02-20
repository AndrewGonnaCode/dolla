import React, { useEffect, useState } from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'


const Navbar = ({toggle}) => {
    
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[])
     
    return (
        <>
         <Nav scrollNav={scrollNav}>
             <NavbarContainer>
                 <NavLogo onClick={()=>scroll.scrollToTop()} to="/">dolla</NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars/>
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                         <NavLinks
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80}
                         to="about">About</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks  
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80} to="discover">Discover</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-80}
                          to="services">Services</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-80} 
                          to="signup">Sign Up</NavLinks>
                     </NavItem>
                 </NavMenu>
                 <NavBtn>
                     <NavBtnLink to="/signin">Sign In</NavBtnLink>
                 </NavBtn>
             </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar
