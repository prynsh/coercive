import '../App.css'
import CTA from './CTA'
import TopBar from './TopBar'

function Home() {
  return (
    <div className="main-bg min-h-screen m-2 p-4 rounded-3xl">
      <TopBar />
      <CTA/>
    </div>
  )
}

export default Home
