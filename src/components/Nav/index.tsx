import React from 'react'
import Router from 'next/router'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles'
import LogoJussi from '../../assets/logoJussiVector.svg'
import Cart from '../../assets/shopping-cart.svg'
import SearchArea from '../SearchArea'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink>
          <LogoJussi className="logo" onClick={() => Router.push('/')} />

          <NavMenu>
            <NavLink>Nossas Soluções</NavLink>
            <NavLink>Conheça a Jüssi</NavLink>
          </NavMenu>
        </NavLink>
        <Bars />
        <NavBtn>
          <SearchArea />
          <NavLink>Login</NavLink>
          <Cart />
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
