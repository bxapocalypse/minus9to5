import { working } from '../data'
import React, { useState } from 'react'

const Working = () => {
  const [hoveredBox, setHoveredBox] = useState(false)

  const handleMouseEnter = (id) => {
    setHoveredBox(id)
  }

  const handleMouseLeave = () => {
    setHoveredBox(null)
  }

  return (
    <div className="container">
      <h3 className="blueheading">Working Groups</h3>
      <section className="working">
        {working.map((work) => {
          const { id, title, img, href } = work
          return (
            <div
              key={id}
              className="working__box"
              aria-label="mouseover for animation and click to visit working page"
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="working__box-txt" id="working__box-txt">
                <a
                  href={href}
                  rel="noreferrer"
                  className="working__box-txt-link"
                  aria-labelledby="working__box-over"
                >
                  {title}
                </a>
              </div>
              {/* <!--working__box-txt ends--> */}
              <div
                className="working__box-overlay"
                id="working__box-over"
              ></div>
              <a className="working__box-link" href={href} rel="noreferrer">
                <img
                  src={img}
                  alt={title}
                  className={`working__box-img ${
                    hoveredBox === id ? 'hovered' : ''
                  }`}
                />
              </a>
            </div>
          )
        })}
      </section>
    </div>
  )
}
export default Working
