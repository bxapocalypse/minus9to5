import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import How from './pages/about/How'
// import Agenda from './pages/about/how/Agenda'
// import Structure from './pages/about/how/Structure'

// import Why from './pages/about/Why'
// import Who from './pages/about/Who'
// import Partners from './pages/about/who/Partners'
// import Staff from './pages/about/who/Staff'
// import Steering from './pages/about/who/Steering'

// import Impact from './pages/about/Impact'
// import Data from './pages/about/impact/Data'
// import Learn from './pages/about/impact/Learn'

import Resources from './pages/Resources'
// import ParentEducation from './pages/resources/parenting/ParentEducation'
// import SleepTight from './pages/resources/parenting/SleepTight'
// import Support from './pages/resources/parenting/Support'
// import ReadyRegionSouthEast from './pages/resources/ReadyRegionSouthEast'
// import AboutReadyRegions from './pages/resources/readyregionsoutheast/AboutReadyRegions'
// import AboutReadyRegionSouthEast from './pages/resources/readyregionsoutheast/AboutReadyRegionSouthEast'
// import AboutVqb5 from './pages/resources/readyregionsoutheast/AboutVqb5'
// import ClassObserver from './pages/resources/readyregionsoutheast/ClassObserver'
// import DirectorFamilyDayProviders from './pages/resources/readyregionsoutheast/DirectorFamilyDayProviders'
// import Teachers from './pages/resources/readyregionsoutheast/Teachers'
// import ReadySetRegisterSoutEast from './pages/resources/ReadySetRegisterSouthEast'
// import EasternShorePrograms from './pages/resources/readysetregistersoutheast/infanttoddlerpreschool/EasternShorePrograms'
// import HamptonRoadsPrograms from './pages/resources/readysetregistersoutheast/infanttoddlerpreschool/HamptonRoadsPrograms'
// import WesternTidewaterPrograms from './pages/resources/readysetregistersoutheast/infanttoddlerpreschool/WesternTidewaterPrograms'
// import InfantToddlerPreschool from './pages/resources/readysetregistersoutheast/InfantToddlerPreschool'
// import KindergratenRegistration from './pages/resources/readysetregistersoutheast/KindergratenRegistration'
// import Basics from './pages/resources/Basics'
// import FamilyFriendly from './pages/resources/FamilyFriendly'
// import News from './pages/resources/News'
// import ParentingResources from './pages/resources/ParentingResources'
// import Pathways from './pages/resources/Pathways'
// import ProfessionalDevelopment from './pages/resources/ProfessionalDevelopment'
// import Resources757 from './pages/resources/Resources757'

// import Work from './components/Work'
// import Health from './pages/work/Health'
// import Pathway from './pages/work/health/Pathway'
// import Thriving from './pages/work/Thriving'
// import Councils from './pages/work/thriving/Councils'
// import Community from './pages/work/Community'
// import DataKnowledge from './pages/work/DataKnowledge'
// import EarlyLearning from './pages/work/EarlyLearning'
// import PolicyAdvocacy from './pages/work/PolicyAdvocacy'
import Working from './pages/Working'

import Error from './pages/Error'
// import SharedLayout from './pages/SharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="working" element={<Working />} />
        <Route path="resources" element={<Resources />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
