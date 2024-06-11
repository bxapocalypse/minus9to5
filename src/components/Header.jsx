import Logo from '../images/minus9-5_2color.svg'
import Video from './Video'
import React, { useState } from 'react'
import Navbar from './Navbar'
import Quicklinks from './Quicklinks'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="minus__header">
      <div className="minus__header__container">
        <div className="minus__header__main" id="navbar">
          <div className="minus__header__main-container">
            <div className="minus__header__main-containerInner">
              <div className="minus__header__main-logoContainer">
                <a href="//www.evms.edu/medical_group/" rel="noreferrer">
                  <img
                    className="minus__header__main-brandImg"
                    src={Logo}
                    alt="EVMS MINUS9to5"
                  />
                </a>
              </div>

              <Navbar />

              <div className="minus__header__main-searchformContainer">
                <button
                  className="search-bar__button"
                  id="btn--search"
                  aria-label="Open search bar"
                  tabIndex="0"
                  type="submit"
                  title="Submit search"
                >
                  <FaMagnifyingGlass className="mag-glass" />
                </button>
                {/* <!--Search Bar Button ends--> */}

                {/* <!--header__main__nav-container--> */}
                <div
                  className="minus__header__main-navContainer"
                  onClick={handleMenuToggle}
                >
                  {/* <!--.header__main__mainNavBtnContainer --> */}
                  <div className="minus__header__main-navBtnContainer">
                    <button
                      className={`minus__header__main-navBtn ${
                        isMenuOpen ? 'hide' : ''
                      }`}
                      tabIndex="0"
                      aria-controls="mainNav"
                      aria-expanded="false"
                      aria-haspopup="true"
                      aria-label="Explore"
                    >
                      <GiHamburgerMenu className="hamburger-menu" />
                    </button>
                  </div>
                  {/* <!-- END .header__main__mainNavBtnContainer --> */}
                </div>
                {/* <!--header__main__navContainer ends-->

                  <!--Search Form--> */}
                <div className="minus__header__main-searchformBtnContainer">
                  <form
                    id="form__search"
                    className="minus__header__main-searchform"
                    name="form-search"
                    role="search"
                    method="get"
                  >
                    <label className="sr-only" htmlFor="search">
                      Search
                    </label>

                    <button
                      className="minus__header__main-searchformBtnInner"
                      id="btn--search"
                      aria-label="Submit Search"
                      tabIndex="0"
                      type="submit"
                      title="Submit search"
                    >
                      <span className="sr-only">Submit search</span>
                    </button>

                    <input
                      id="query"
                      className="minus__header__main-searchformInput"
                      name="q"
                      type="search"
                      placeholder="Search"
                    />

                    <button
                      className="minus__header__main-searchformBtn btn--close--sm"
                      id="btn--close--search"
                      aria-label="Close search"
                      type="button"
                      tabIndex="0"
                      title="Close search"
                    >
                      ×<span className="sr-only"> Close search </span>
                    </button>
                  </form>
                </div>
                {/* <!--Search Form ends--> */}
              </div>
              {/* <!--header__main__searchformContainer ends--> */}
            </div>
          </div>
          {/* <!-- END .header__main__container --> */}
        </div>
        {/* <!-- END .header__main #navbar --> */}

        <div className="minus__header__quicklinks">
          <Quicklinks />

          {/* <!--header__main__navSidebarContainer--> */}
          <div
            className={`minus__header__main-navSidebarContainer ${
              isMenuOpen ? 'menu-open' : ''
            }`}
          >
            <div
              className="minus__header__main-navSidebarContainerInner"
              onClick={handleMenuToggle}
            >
              <button
                href="#"
                rel="noreferrer"
                className={`btn--close--sm ${isMenuOpen ? '' : 'hide'}`}
                id="btn--close--mainNav"
                tabIndex="0"
                aria-label="Close main navigation menu"
              >
                ×
              </button>

              {/* <!-- header__main__navSidebarTitle ends --> */}
              <span className="minus__header__main-navSidebarTitle">
                <a href="//minus9to5.org" rel="noreferrer">
                  <h3 className="h3__heading--sm">MINUS9TO5</h3>
                </a>
              </span>
              {/* <!-- header__main__navSidebarTitle ends --> */}

              <nav className="minus__header__main_-navigationSidebarContainer">
                <ul className="minus__header__main-navigationSidebarUl">
                  <li className="mainNav__sidebar__li">
                    <a
                      href="//www.evms.edu/medical_group/about_us/"
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                    <ul className="mainNav__sidebar__li-ul">
                      <li>
                        <a href="/" rel="noreferrer">
                          Why We Exist
                        </a>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Who We Are
                        </a>
                        <ul
                          className="multilevel-linkul-1"
                          // style="display: none"
                        >
                          <li>
                            <a href="/" rel="noreferrer">
                              Our Staff
                            </a>
                          </li>
                          <li>
                            <a href="/" rel="noreferrer">
                              Our Steering Committee
                            </a>
                          </li>
                          <li>
                            <a href="/" rel="noreferrer">
                              Our Partners
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          How We Work
                        </a>
                        <ul
                          className="multilevel-linkul-1"
                          // style="display: none"
                        >
                          <li>
                            <a href="/" rel="noreferrer">
                              Common Agenda
                            </a>
                          </li>
                          <li>
                            <a href="/" rel="noreferrer">
                              Our Structure
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Our Impact
                        </a>
                        <ul
                          className="multilevel-linkul-1"
                          // style="display: none"
                        >
                          <li>
                            <a href="/" rel="noreferrer">
                              Learning and Evaluation
                            </a>
                          </li>
                          <li>
                            <a href="/" rel="noreferrer">
                              Baseline Data
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="mainNav__sidebar__li">
                    <a
                      href="//www.evms.edu/medical_group/care_partners/"
                      rel="noreferrer"
                    >
                      working groups
                    </a>
                    <ul className="mainNav__sidebar__li-ul">
                      <li>
                        <a href="/" rel="noreferrer">
                          Healthy Homes, Healthy Children
                        </a>
                        <ul className="multilevel-linkul-1">
                          <li>
                            <a href="/" rel="noreferrer">
                              Pathway Through Pregnancy
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Thriving Families
                        </a>
                        <ul className="multilevel-linkul-1">
                          <li>
                            <a href="/" rel="noreferrer">
                              Ready Region Family Councils
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Community Connections
                        </a>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Early Learning and Development
                        </a>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Data and Knowledge Sharing
                        </a>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Policy and Advocacy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mainNav__sidebar__li">
                    <a
                      href="//www.evms.edu/medical_group/compliance_program/"
                      rel="noreferrer"
                    >
                      resources
                    </a>
                    <ul className="mainNav__sidebar__li-ul">
                      <li>
                        <a
                          href="https://planningcouncil.myresourcedirectory.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resources757
                        </a>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Parenting Resources
                        </a>
                        <ul className="multilevel-linkul-1">
                          <li>
                            <a
                              href="https://www.sleeptighthamptonroads.org/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Sleep Tight
                            </a>
                          </li>
                          <li>
                            <a href="/" rel="noreferrer">
                              Support for Parenting and Pregnant Families in
                              Hampton Roads
                            </a>
                          </li>
                          <li>
                            <a href="/" rel="noreferrer">
                              Support Groups
                            </a>
                          </li>
                          <li>
                            <a href="/" rel="noreferrer">
                              Parent Education
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" rel="noreferrer">
                          Pathway Through Pregnancy: Hampton Roads
                        </a>
                      </li>
                      <li>
                        <a
                          href="/resources/the_basics_hampton_roads/"
                          rel="noreferrer"
                        >
                          The Basics Hampton Roads
                        </a>
                      </li>
                      <li>
                        <a href="/resources/training_lists/" rel="noreferrer">
                          Professional Development Training
                        </a>
                      </li>
                      <li>
                        <a
                          href="/resources/family_friendly_businesses/"
                          rel="noreferrer"
                        >
                          Family-Friendly Businesses
                        </a>
                      </li>
                      <li>
                        <a
                          href="/resources/ready_region_southeastern/"
                          rel="noreferrer"
                        >
                          Ready Region Southeastern
                        </a>
                        <ul className="multilevel-linkul-1">
                          <li>
                            <a
                              href="/resources/ready_region_southeastern/about_ready_regions/"
                              rel="noreferrer"
                            >
                              About Ready Regions
                            </a>
                          </li>
                          <li>
                            <a
                              href="/resources/ready_region_southeastern/about_vqb5/"
                              rel="noreferrer"
                            >
                              About VQB5
                            </a>
                          </li>
                          <li>
                            <a
                              href="/resources/ready_region_southeastern/about_ready_region_southeastern/"
                              rel="noreferrer"
                            >
                              About Ready Region Southeastern
                            </a>
                          </li>
                          <li>
                            <a
                              href="/resources/ready_region_southeastern/director_or_family_day_home_providers/"
                              rel="noreferrer"
                            >
                              Director or Family Day Home Providers
                            </a>
                          </li>
                          <li>
                            <a
                              href="/resources/ready_region_southeastern/teachers/"
                              rel="noreferrer"
                            >
                              Teachers
                            </a>
                          </li>
                          <li>
                            <a
                              href="/resources/ready_region_southeastern/class_observer/"
                              rel="noreferrer"
                            >
                              CLASS Observer
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          href="/resources/ready_set_register/"
                          rel="noreferrer"
                        >
                          Ready, Set, Register Southeastern
                        </a>
                        <ul className="multilevel-linkul-1">
                          <li>
                            <a
                              href="/resources/ready_set_register/preschool/"
                              rel="noreferrer"
                            >
                              Infant, Toddler and Preschool Programs
                            </a>
                            <ul className="multilevel-linkul-2">
                              <li>
                                <a
                                  href="/resources/ready_set_register/preschool/eastern_shore/"
                                  rel="noreferrer"
                                >
                                  Eastern Shore Programs
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/resources/ready_set_register/preschool/hampton_roads/"
                                  rel="noreferrer"
                                >
                                  Hampton Roads Programs
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/resources/ready_set_register/preschool/western_tidewater/"
                                  rel="noreferrer"
                                >
                                  Western Tidewater Programs
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              href="/resources/ready_set_register/kindergarten_registration/"
                              rel="noreferrer"
                            >
                              Kindergarten Registration
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/resources/news/">News</a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <hr aria-hidden="true" />
                <ul className="minus__header__main-navigationSidebarUl-logo">
                  <li>
                    <a href="//www.evms.edu/medical_group/" rel="noreferrer">
                      <img
                        className="minus__header__nav-brandImg"
                        src="images/minus9-5_2color.svg"
                        alt="EVMS MINUS9to5"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="//evms.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="minus__header__main-navSidebarLogo"
                        src="//www.evms.edu/media/evms_medical_group_-_2023/assets/logos/evms-50-logo-horizontal.jpeg"
                        alt="EVMS 50 A Legacy and a Promise"
                      />
                    </a>
                  </li>
                </ul>

                <hr aria-hidden="true" />

                <ul className="minus__header__main-navigationSidebarSocialUl">
                  <li className="mainNav__sidebar__socialLi">
                    <a
                      href="https://www.facebook.com/minus9to5ece"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa-brands fa-facebook"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mainNav__sidebar__socialLi">
                    <a
                      href="https://www.instagram.com/m9t5_readyregionsoutheastern/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa-brands fa-square-instagram"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- header__main__navSidebarContainerSidebarInner --> */}
          </div>
          {/* <!-- header__main__navSidebarContainer ends --> */}
        </div>

        <Video />
      </div>
      {/* <!-- END .header__container --> */}
    </header>
  )
}
export default Header
