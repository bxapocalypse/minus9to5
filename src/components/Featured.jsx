const Featured = () => {
  return (
    <div>
      <h3 className="page__title">Featured Initiatives</h3>

      <section className="imageContainer">
        <div className="imageContainer__inner">
          <div className="imageContainer__inner__box">
            <a
              className="imageContainer__inner__box-link"
              href="/"
              target="_blank"
            >
              <img
                src="images/register.jpeg"
                alt="kindergartenregistration"
                className="imageContainer__inner__box-link-img"
              />
            </a>
          </div>
          <div className="imageContainer__inner__box">
            <a
              className="imageContainer__inner__box-link"
              href="https://www.sleeptighthamptonroads.org/ "
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/sleeptight.png"
                alt="sleep tight hampton roads logo"
                className="imageContainer__inner__box-link-img"
              />
            </a>
          </div>
          <div className="imageContainer__inner__box">
            <a
              className="imageContainer__inner__box-link"
              href="https://www.resources757.org/ "
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/resources757.png"
                alt="resources 757 logo"
                className="imageContainer__inner__box-link-img"
              />
            </a>
          </div>
          <div className="imageContainer__inner__box">
            <a
              className="imageContainer__inner__box-link"
              href="/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="images/The_Basics_Hampton-768x381.png"
                alt="The Basics HR"
                className="imageContainer__inner__box-link-img"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Featured
