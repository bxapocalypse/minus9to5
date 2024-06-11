import { Link } from 'react-router-dom'
import { mainNav } from '../data'

const Navbar = () => {
  return (
    <nav className="minus__header__shortNav">
      <ul className="minus__header__shortNavUl">
        {mainNav.map((item) => {
          const { id, name, href } = item
          return (
            <li className="minus__header__shortNavUlLi" key={id}>
              <Link to={href}>
                <span className="minus__header__shortNavUlLiSpan">{name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar
