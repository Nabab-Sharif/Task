import Navbar from "./components/Navbar"
import Banner from "./pages/Banner"
import Collaborate from "./pages/Collaborate"
import Connect from "./pages/Connect"
import User from "./pages/User"
import Work from "./pages/Work"
import Report from "./pages/Report"
import Built from "./pages/Built"
import KindsTeam from "./pages/KindsTeam"
import BestTeam from "./pages/BestTeam"
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <User />
      <Collaborate />
      <Work />
      <Connect />
      <Report />
      <Built />
      <KindsTeam />
      <BestTeam />
      <Footer />
    </>
  )
}

export default App