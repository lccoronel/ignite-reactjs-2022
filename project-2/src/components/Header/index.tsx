import React from 'react'
import { Scroll, Timer } from 'phosphor-react'

import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
