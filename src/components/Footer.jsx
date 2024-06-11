import footerLogo from '../images/topbar__logo-img.png'
import { FaFacebook } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a href="/">
          <img src={footerLogo} alt="EVMS logo" className="footer__top-logo" />
        </a>
        <div className="footer__top-txt">
          Minus 9 to 5 is a collective impact initiative of the M. Foscue Brock
          Institute for Community and Global Health, housed in the Department of
          Pediatrics, Eastern Virginia Medical School.
        </div>
        {/* <!--footer__top-txt ends--> */}
      </div>
      <div className="footer__threebox">
        <div className="footer__threebox-box">
          <h5 className="footer__threebox-box-title">NOTEWORTHY NEWS</h5>
          <a href="/" rel="noreferrer" className="footer__threebox-box-link">
            Governor Glenn Youngkin announces that Virginia will make a
            significant investment in early learning and childcare
          </a>

          <a href="/" rel="noreferrer" className="footer__threebox-box-link">
            Despite success, Va. public-private program for early childhood care
            still far from meeting need
          </a>

          <a href="/" rel="noreferrer" className="footer__threebox-box-link">
            Initiative helps close childcare teacher gaps in local daycares
          </a>
          <a href="//evms.edu" target="_blank" rel="noopener noreferrer">
            <img
              className="header__main__navSidebarLogo"
              src="//www.evms.edu/media/evms_medical_group_-_2023/assets/logos/evms-50-logo-horizontal.jpeg"
              alt="EVMS 50 A Legacy and a Promise"
            />
          </a>
        </div>

        <div className="footer__threebox-box">
          <h5 className="footer__threebox-box-title">SOCIAL</h5>
          <p className="footer__threebox-box-p">
            <a
              href="https://www.facebook.com/minus9to5ece"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={30} color="#1a4557" />
            </a>

            <a
              href="https://www.instagram.com/m9t5_readyregionsoutheastern/"
              target="_blank"
              rel="noreferrer"
            >
              <ImInstagram size={30} color="#1a4557" />
            </a>
          </p>

          <h5 className="footer__threebox-box-title">CONTACT US</h5>
          <p className="footer__threebox-box-p">
            <a
              href="https://goo.gl/maps/TXSAkhfD7wmQgMc76"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bold__font">Minus 9 to 5</span>
              Eastern Virginia Medical School
              <br />
              E.V. Williams Hall
              <br />
              855 W. Brambleton Avenue
              <br />
              Norfolk, VA 23510{' '}
            </a>
            <br />
            <br />
            <span className="bold__font">Phone:</span>
            <a
              href="tel:757-446-7468"
              itemProp="tel"
              target="_blank"
              rel="noreferrer"
            >
              757.446.7468
            </a>
          </p>

          <a
            href="https://www.givecampus.com/campaigns/2163/donations/new"
            className="footer__threebox-box-btn"
            aria-labelledby="Make a gift"
          >
            MAKE A GIFT
          </a>
        </div>
        <div
          className="footer__threebox-box"
          aria-labelledby="contact form"
        ></div>
      </div>
      <div className="footer__sub">
        Minus 9 to 5 · © <span className="footer-year">2024</span>
      </div>
    </footer>
  )
}
export default Footer
