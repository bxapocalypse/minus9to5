import Skiplinks from '../components/Skiplinks'
import Logo from '../images/minus9-5_2color.svg'
import HomeIcons from '../components/HomeIcons'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="wrapper">
      <Skiplinks />
      <div className="minus9to5-search">
        {/* <form className="form-inline my-2 my-lg-0" id="form-search">
                    			<label aria-label="search">Search</label>
                    			<input className="form-control" type="search" aria-label="Search" name="q" id="searchInput">
                    			<button className="minus9to5-search-btn" type="submit" aria-label="Submit search"><img src="/media/minus_9_to_5_media/images/search-icon-1.svg" alt="Submit search"></button>
               					
                                                			<script>
      								const f = document.getElementById('form-search');
      								const q = document.getElementById('searchInput');
      								const funnelback = 'https://search.evms.edu/s/search.html?collection=evms-search&query=';
      								const restUrl = '&collection=evms-search&profile=_default';

      								function submitted(event) {
        								event.preventDefault();
        								const url = funnelback + q.value + restUrl;
        								const win = window.open(url, '_blank');
        								win.focus();
      								}

      								f.addEventListener('submit', submitted);
    							</script>
                            </form>     */}
        <div className="minus9to5-search-x" aria-label="close search">
          X
        </div>
      </div>
      <div className="secondaryTopbar">
        <div className="secondaryTopbar__inner">
          <div className="secondaryTopbar__inner__logo">
            <a href="/">
              <img
                className="topbar__inner__logo-img"
                src={Logo}
                alt="EVMS Logo"
              />
            </a>
          </div>

          <nav
            className="secondaryTopbar__inner__nav"
            aria-label="Secondary Navigation"
          >
            <ul className="secondaryTopbar__inner__nav__ul">
              <li className="secondaryTopbar__inner__nav__ul-li">
                <a href="/" target="_self" rel="noreferrer">
                  Home
                </a>
              </li>
              {/* <!--secondaryTopbar__inner__nav__ul-li ends--> */}
              <li className="secondaryTopbar__inner__nav__ul-li">
                <a href="/about/" className="secondaryActiveLink">
                  About Us
                </a>
                <ul className="multilevel-linkul-0">
                  <li>
                    <a href="/about/why_we_exist/">Why We Exist</a>
                  </li>
                  <li>
                    <a href="/about/who_we_are/">Who We Are</a>
                    <ul className="multilevel-linkul-1">
                      <li>
                        <a href="/about/who_we_are/our_staff/">Our Staff</a>
                      </li>
                      <li>
                        <a href="/about/who_we_are/our_steering_committee/">
                          Our Steering Committee
                        </a>
                      </li>
                      <li>
                        <a href="/about/who_we_are/our_partners/">
                          Our Partners
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/about/how_we_work/">How We Work</a>
                    <ul className="multilevel-linkul-1">
                      <li>
                        <a href="/about/how_we_work/common_agenda/">
                          Common Agenda
                        </a>
                      </li>
                      <li>
                        <a href="/about/how_we_work/our_structure/">
                          Our Structure
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/about/our_impact/">Our Impact</a>
                    <ul className="multilevel-linkul-1">
                      <li>
                        <a href="/about/our_impact/learning_and_evaluation/">
                          Learning and Evaluation
                        </a>
                      </li>
                      <li>
                        <a href="/about/our_impact/baseline_data/">
                          Baseline Data
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="secondaryTopbar__inner__nav__ul-li">
                <a href="/working_groups/">Working Groups</a>
                <ul className="multilevel-linkul-0">
                  <li>
                    <a href="/working_groups/healthy_homes_healthy_children/">
                      Healthy Homes, Healthy Children
                    </a>
                    <ul className="multilevel-linkul-1">
                      <li>
                        <a href="/working_groups/healthy_homes_healthy_children/pathway_through_pregnancy/">
                          Pathway Through Pregnancy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/working_groups/thriving_families/">
                      Thriving Families
                    </a>
                    <ul className="multilevel-linkul-1">
                      <li>
                        <a href="/working_groups/thriving_families/ready_region_family_councils/">
                          Ready Region Family Councils
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/working_groups/community_connections/">
                      Community Connections
                    </a>
                  </li>
                  <li>
                    <a href="/working_groups/early_learning_and_development/">
                      Early Learning and Development
                    </a>
                  </li>
                  <li>
                    <a href="/working_groups/data_and_knowledge_sharing/">
                      Data and Knowledge Sharing
                    </a>
                  </li>
                  <li>
                    <a href="/working_groups/policy_and_advocacy/">
                      Policy and Advocacy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="secondaryTopbar__inner__nav__ul-li">
                <a href="/resources/">Resources</a>
                <ul className="multilevel-linkul-0">
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
                    <a href="/resources/parenting_resources/">
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
                        <a href="/resources/parenting_resources/home-visiting/">
                          Support for Parenting and Pregnant Families in Hampton
                          Roads
                        </a>
                      </li>
                      <li>
                        <a href="/resources/parenting_resources/support_groups/">
                          Support Groups
                        </a>
                      </li>
                      <li>
                        <a href="/resources/parenting_resources/parent_education_/">
                          Parent Education{' '}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/working_groups/healthy_homes_healthy_children/pathway_through_pregnancy/">
                      Pathway Through Pregnancy: Hampton Roads
                    </a>
                  </li>
                  <li>
                    <a href="/resources/the_basics_hampton_roads/">
                      The Basics Hampton Roads
                    </a>
                  </li>
                  <li>
                    <a href="/resources/training_lists/">
                      Professional Development Training
                    </a>
                  </li>
                  <li>
                    <a href="/resources/family_friendly_businesses/">
                      Family-Friendly Businesses
                    </a>
                  </li>
                  <li>
                    <a href="/resources/ready_region_southeastern/">
                      Ready Region Southeastern
                    </a>
                    <ul className="multilevel-linkul-1">
                      <li>
                        <a href="/resources/ready_region_southeastern/about_ready_regions/">
                          About Ready Regions
                        </a>
                      </li>
                      <li>
                        <a href="/resources/ready_region_southeastern/about_vqb5/">
                          About VQB5
                        </a>
                      </li>
                      <li>
                        <a href="/resources/ready_region_southeastern/about_ready_region_southeastern/">
                          About Ready Region Southeastern
                        </a>
                      </li>
                      <li>
                        <a href="/resources/ready_region_southeastern/director_or_family_day_home_providers/">
                          Director or Family Day Home Providers
                        </a>
                      </li>
                      <li>
                        <a href="/resources/ready_region_southeastern/teachers/">
                          Teachers
                        </a>
                      </li>
                      <li>
                        <a href="/resources/ready_region_southeastern/className_observer/">
                          className Observer
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/resources/ready_set_register/">
                      Ready, Set, Register Southeastern
                    </a>
                    <ul className="multilevel-linkul-1">
                      <li>
                        <a href="/resources/ready_set_register/preschool/">
                          Infant, Toddler and Preschool Programs
                        </a>
                      </li>
                      <li>
                        <a href="/resources/ready_set_register/kindergarten_registration/">
                          Kindergarten Registration
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/resources/news/" rel="">
                      News
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="secondaryTopbar__inner__search"></div>
        </div>
      </div>
      {/* <!--this top bar & nav pops up when it is mobile view--> */}
      <div className="mobilTopBar">
        <div className="mobilTopBar__logo">
          <a
            href="/"
            className="mobilTopBar__logo-link"
            aria-label="Click to go back to the homepage"
          >
            <img
              className="mobilTopBar__logo-link-img"
              src={'/media/minus_9_to_5_media/images/topbar__logo-img.png'}
              alt="EVMSmobile logo"
            />
          </a>
        </div>
        {/* <!--mobilTopBar__logo ends--> */}
        <button className="mobilTopBar__menuToggle">
          <img
            className="mobilTopBar__menuToggle-img"
            src="/media/minus_9_to_5_media/images/three-line-menu-icon-24.jpg"
            aria-label="Open Mobile Menu"
            alt="Menu Toggle"
          />{' '}
          MENU
        </button>
      </div>
      {/* <!--mobilTopBar ends--> */}
      {/* <!--this nav pops up when it is mobile view--> */}
      <nav className="mobil" aria-label="Mobile Navigation">
        <ul className="mobil__ul">
          <li className="mobil__ul-li sub-menu">
            <a href="/" target="_self" rel="noreferrer">
              Home
            </a>
          </li>
          <li className="mobil__ul-li sub-menu">
            <a href="/about/">About Us</a>
            <ul className="multilevel-linkul-0">
              <li>
                <a href="/about/why_we_exist/">Why We Exist</a>
              </li>
              <li>
                <a href="/about/who_we_are/">Who We Are</a>
                <ul className="multilevel-linkul-1">
                  <li>
                    <a href="/about/who_we_are/our_staff/">Our Staff</a>
                  </li>
                  <li>
                    <a href="/about/who_we_are/our_steering_committee/">
                      Our Steering Committee
                    </a>
                  </li>
                  <li>
                    <a href="/about/who_we_are/our_partners/">Our Partners</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/about/how_we_work/">How We Work</a>
                <ul className="multilevel-linkul-1">
                  <li>
                    <a href="/about/how_we_work/common_agenda/">
                      Common Agenda
                    </a>
                  </li>
                  <li>
                    <a href="/about/how_we_work/our_structure/">
                      Our Structure
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/about/our_impact/">Our Impact</a>
                <ul className="multilevel-linkul-1">
                  <li>
                    <a href="/about/our_impact/learning_and_evaluation/">
                      Learning and Evaluation
                    </a>
                  </li>
                  <li>
                    <a href="/about/our_impact/baseline_data/">Baseline Data</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mobil__ul-li sub-menu">
            <a href="/working_groups/">Working Groups</a>
            <ul className="multilevel-linkul-0">
              <li>
                <a href="/working_groups/healthy_homes_healthy_children/">
                  Healthy Homes, Healthy Children
                </a>
                <ul className="multilevel-linkul-1">
                  <li>
                    <a href="/working_groups/healthy_homes_healthy_children/pathway_through_pregnancy/">
                      Pathway Through Pregnancy
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/working_groups/thriving_families/">
                  Thriving Families
                </a>
                <ul className="multilevel-linkul-1">
                  <li>
                    <a href="/working_groups/thriving_families/ready_region_family_councils/">
                      Ready Region Family Councils
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/working_groups/community_connections/">
                  Community Connections
                </a>
              </li>
              <li>
                <a href="/working_groups/early_learning_and_development/">
                  Early Learning and Development
                </a>
              </li>
              <li>
                <a href="/working_groups/data_and_knowledge_sharing/">
                  Data and Knowledge Sharing
                </a>
              </li>
              <li>
                <a href="/working_groups/policy_and_advocacy/">
                  Policy and Advocacy
                </a>
              </li>
            </ul>
          </li>
          <li className="mobil__ul-li sub-menu">
            <a href="/resources/">Resources</a>
            <ul className="multilevel-linkul-0">
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
                <a href="/resources/parenting_resources/">
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
                    <a href="/resources/parenting_resources/home-visiting/">
                      Support for Parenting and Pregnant Families in Hampton
                      Roads
                    </a>
                  </li>
                  <li>
                    <a href="/resources/parenting_resources/support_groups/">
                      Support Groups
                    </a>
                  </li>
                  <li>
                    <a href="/resources/parenting_resources/parent_education_/">
                      Parent Education{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/working_groups/healthy_homes_healthy_children/pathway_through_pregnancy/">
                  Pathway Through Pregnancy: Hampton Roads
                </a>
              </li>
              <li>
                <a href="/resources/the_basics_hampton_roads/">
                  The Basics Hampton Roads
                </a>
              </li>
              <li>
                <a href="/resources/training_lists/">
                  Professional Development Training
                </a>
              </li>
              <li>
                <a href="/resources/family_friendly_businesses/">
                  Family-Friendly Businesses
                </a>
              </li>
              <li>
                <a href="/resources/ready_region_southeastern/">
                  Ready Region Southeastern
                </a>
                <ul className="multilevel-linkul-1">
                  <li>
                    <a href="/resources/ready_region_southeastern/about_ready_regions/">
                      About Ready Regions
                    </a>
                  </li>
                  <li>
                    <a href="/resources/ready_region_southeastern/about_vqb5/">
                      About VQB5
                    </a>
                  </li>
                  <li>
                    <a href="/resources/ready_region_southeastern/about_ready_region_southeastern/">
                      About Ready Region Southeastern
                    </a>
                  </li>
                  <li>
                    <a href="/resources/ready_region_southeastern/director_or_family_day_home_providers/">
                      Director or Family Day Home Providers
                    </a>
                  </li>
                  <li>
                    <a href="/resources/ready_region_southeastern/teachers/">
                      Teachers
                    </a>
                  </li>
                  <li>
                    <a href="/resources/ready_region_southeastern/className_observer/">
                      className Observer
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/resources/ready_set_register/">
                  Ready, Set, Register Southeastern
                </a>
                <ul className="multilevel-linkul-1">
                  <li>
                    <a href="/resources/ready_set_register/preschool/">
                      Infant, Toddler and Preschool Programs
                    </a>
                  </li>
                  <li>
                    <a href="/resources/ready_set_register/kindergarten_registration/">
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
      </nav>
      <section className="blue__header">
        <h1 className="blue__header__title">About Us</h1>
      </section>
      <div className="breadcrumbs" aria-label="breadcrumbs Navigation">
        <ul className="breadcrumbs__ul">
          <ul className="breadcrumbs__ul__li">
            <a href="/">Minus 9 to 5</a>&nbsp; / &nbsp;About Us
          </ul>
        </ul>
      </div>
      <div id="main"></div>
      <section id="generalContentSection" className="generalContent">
        {/* <!--header or title text --> */}

        <h3 className="blk-title-left">Minus 9 to 5</h3>

        {/* <!--header or title text ends -->
              
              <!--General text --> */}
        <div className="sideBorderTitle">
          {/* <!--General text -->
                
                              <!--HTML --> */}
          <p>A New Formula for Hampton Roads’ Youngest Residents</p>
          {/* <!--HTML ends--> */}
        </div>
        {/* <!--General text ends -->
              
                <!--image--> */}
        <figure className="">
          <img src="" alt="" className="" />
        </figure>
        {/* <!--image ends-->
                

              
                     
<!--button--> */}

        {/*               
              <!--hero-title-swatch-->

              <!--hero-title-swatch ends-->
<!--button-->               */}
      </section>{' '}
      <section id="generalContentSection" className="generalContent">
        {/* <!--header or title text -->

              
              
              
              
              <!--header or title text ends -->
              
              <!--General text --> */}
        <div className="generalContent__p">
          {/* <!--General text -->
                
                              <!--HTML --> */}
          <p>
            From the time a <strong>mother finds out she is pregnant</strong>{' '}
            through the <strong>child’s fifth birthday</strong>, there are many
            excellent services and programs that serve nearly{' '}
            <strong>75,000 children and families</strong> throughout Hampton
            Roads. Unfortunately,{' '}
            <strong>access to these programs and services</strong>, and the
            information provided, is{' '}
            <strong>not uniform across all demographics</strong>. Not all of the
            hospitals, clinics, providers, and community services set up to help
            mothers, babies, and families provide the same health care or health
            information.
          </p>
          {/* <!--HTML ends--> */}
        </div>
        {/* <!--General text ends -->
              
                <!--image--> */}
        <figure className="">
          <img src="" alt="" className="" />
        </figure>
        {/* <!--image ends-->
                

              
                     
<!--button--> */}

        {/* <!--hero-title-swatch-->

              <!--hero-title-swatch ends-->
<!--button-->               */}
      </section>{' '}
      <section id="generalContentSection" className="generalContent">
        {/* <!--header or title text -->

              
              
              
              
              <!--header or title text ends -->
              
              <!--General text --> */}
        <div className="generalContentGrey__p">
          {/* <!--General text -->
                
                              <!--HTML --> */}
          <p>
            Our mission is to identify and bridge the gaps in our current
            system, to fill holes where necessary, and to expand services to all
            families in need of reliable prenatal and postpartum health care.
          </p>
          {/* <!--HTML ends--> */}
        </div>
        {/* <!--General text ends -->
              
                <!--image--> */}
        <figure className="">
          <img src="" alt="" className="" />
        </figure>
      </section>
      <section id="generalContentSection" className="generalContent">
        {/* <!--header or title text -->

              
              
              
              
              <!--header or title text ends -->
              
              <!--General text --> */}
        <div className="generalContent__p">
          {/* <!--General text -->
                
                              <!--HTML --> */}
          <p>
            Minus 9 to 5 is a network of multi-disciplinary providers,
            hospitals, clinics, and advocates committed to creating an impact.
            On this site, you will find out more about what challenges we face
            collectively, partnering groups committed to creating uniform health
            care and programs established to help mother, babies and families.
          </p>
          {/* <!--HTML ends--> */}
        </div>
        {/* <!--General text ends -->
              
                <!--image--> */}
        <figure className="">
          <img src="" alt="" className="" />
        </figure>
      </section>
      <HomeIcons />
      <Footer />
    </div>
  )
}
export default About
