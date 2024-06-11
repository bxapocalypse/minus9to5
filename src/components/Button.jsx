const Button = () => {
  return (
    <section className="btnContainer" id="btnContainer">
      <div className="btnContainer__one">
        <div className="bigtext-ctr">
          <p>
            Stay updated with Minus 9 to 5 and all of our community partners by
            subscribing to our monthly newsletter.
          </p>
        </div>
        <div className="btnContainer__btns">
          <button className="btn-desc-container">
            <a
              href="
            http://eepurl.com/isRXOA"
              rel="noreferrer"
              className="btnContainer__btn"
              aria-labelledby="btnContainer"
            >
              Subscribe to Minus 9 to 5 Monthly Memos
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Button
