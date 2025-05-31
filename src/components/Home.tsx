import '../App.css'
import CTA from './CTA'
import Footer from './Footer'
import TopBar from './TopBar'

function Home() {
  return (
    <div>

    <div className="main-bg min-h-screen rounded-3xl">
      <TopBar />
      <CTA/>
    </div>
    <div><Footer/></div>
    </div>
  )
}

export default Home
