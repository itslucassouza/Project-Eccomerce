import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

export const Nav = styled.nav`
    background: ${props => props.theme.colors.background};
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    /* Third Nav */
    /* justify-content: flex-start; */
`

export const NavLink = styled.a`
    .logo {
        padding: 0 1rem;
    }
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: black;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 24px;

    @media (max-width: 600px) {
        width: auto;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled.a`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
