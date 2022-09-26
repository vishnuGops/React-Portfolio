import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  /* ff 3.6+ */
  background:-moz-radial-gradient(circle at 100% 100%, rgba(39, 122, 176, 1) 0%, rgba(32, 0, 36, 1) 100%);

  /* safari 5.1+,chrome 10+ */
  background:-webkit-radial-gradient(circle at 100% 100%, rgba(39, 122, 176, 1) 0%, rgba(32, 0, 36, 1) 100%);

  /* opera 11.10+ */
  background:-o-radial-gradient(circle at 100% 100%, rgba(39, 122, 176, 1) 0%, rgba(32, 0, 36, 1) 100%);

  /* ie 10+ */
  background:-ms-radial-gradient(circle at 100% 100%, rgba(39, 122, 176, 1) 0%, rgba(32, 0, 36, 1) 100%);

  /* global 92%+ browsers support */
  background:radial-gradient(circle at 100% 100%, rgba(39, 122, 176, 1) 0%, rgba(32, 0, 36, 1) 100%);


  height: 70px;
  margin-top: -80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top:0;
  z-index:10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR) `
  color:#fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;
  text-decoration: none;
`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkS)`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 95%;
  cursor: pointer;

  &.active {
    border-bottom: 6px solid #00e6e6
  }
`
// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `
// export const NavBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `
