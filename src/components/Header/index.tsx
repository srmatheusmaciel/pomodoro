import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'
import logoNewsFeed from '../../assets/logo-newsfeed.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoNewsFeed} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}