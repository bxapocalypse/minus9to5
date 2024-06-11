import { homeIcons } from '../data'

const HomeIcons = () => {
  return (
    <section className="homeIcons">
      {homeIcons.map((homeIcon) => {
        const { id, icon, text, btnTxt, href } = homeIcon
        return (
          <div className="icons__box" id="icons__box" key={id}>
            <div className="icons__box-icon">
              <img src={icon} alt={btnTxt} className="icons__box-icon-img" />
            </div>
            <p className="icons__box-icon-p">{text}</p>
            <button
              className="icons__box-icon-btn"
              aria-labelledby="icons__box"
            >
              <a
                href={href}
                rel="noreferrer"
                aria-labelledby="icons__box"
                className="icons__box-icon-a"
              >
                {btnTxt}
              </a>
            </button>
          </div>
        )
      })}
    </section>
  )
}
export default HomeIcons
