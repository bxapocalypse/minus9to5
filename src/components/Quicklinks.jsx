import { quickLinks } from '../data'
import React from 'react'

const Quicklinks = () => {
  return (
    <nav className="minus__header__quicklinks-nav">
      <ul>
        {quickLinks.map((quickLink) => {
          const { id, name, href, img } = quickLink
          return (
            <li key={id}>
              <a href={href} rel="noreferrer">
                {name}
                <img src={img} alt={name} />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Quicklinks
