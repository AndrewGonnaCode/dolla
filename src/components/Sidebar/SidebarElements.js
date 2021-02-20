import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`
 position:fixed;
 top:${({isOpen})=>(isOpen ? '0':'-100%')};
 left:0;
 width:100%;
 height:100%;
 z-index:999;
 opacity:${({isOpen})=>(isOpen ? '100%' : 0)};
 display:grid;
 align-items:center;
 background:#0d0d0d;
 transition:0.3s ease-in-out;
`

export const CloseIcon = styled(FaTimes)`
 color:#fff;
`

export const Icon = styled.div`
 position:absolute;
 top:1.2rem;
 right:1.5rem;
 background:transparent;
 font-size:2rem;
 cursor: pointer;
 outline-width:0;
`

export const SidebarWrapper = styled.div`
 color:#fff;
`
export const SidebarLink = styled(LinkS)`
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:1.5rem;
 text-decoration:none;
 list-style:none;
 transition:0.2s ease-in-out;
 color:#fff;
 cursor: pointer;
 &:hover{
   transition:0.2s ease-in-out;
   color:#729AD0;
 }
`

export const SideBtnWrap = styled.div`
 display:flex;
 justify-content:center;
`

export const SidebarMenu = styled.ul`
 display:grid;
 grid-template-columns:1fr;
 grid-template-rows:repeat(6, 80px);
 text-align:center;
 @media screen and (max-width:480px){
  grid-template-rows:repeat(6,60px)
 }
`

export const SidebarRoute = styled(LinkR)`
 border-radius:50px;
 background:#729AD0;
 white-space:nowrap;
 padding:16px 64px;
 color:#010606;
 font-size:16px;
 outline:none;
 border:none;
 cursor: pointer;
 transition:all 0.2s ease-in-out;
 text-decoration:none;
 &:hover{
     background:#fff;
     color:#010606;
 }
`