import Skiplinks from '../components/Skiplinks'
import Header from '../components/Header'
import Button from '../components/Button'
import GeneralContent from '../components/GeneralContent'
import Vision from '../components/Vision'
import HomeIcons from '../components/HomeIcons'
import Involved from '../components/Involved'
import Work from '../components/Work'
import Footer from '../components/Footer'

const SharedLayout = () => {
  return (
    <div className="wrapper">
      <div className="minus__wrapper">
        <Skiplinks />
        <Header />
        <GeneralContent />
        <Vision />
        <HomeIcons />
        <Button />
        <Work />
        <Involved />
        <Footer />
      </div>
    </div>
  )
}
export default SharedLayout
