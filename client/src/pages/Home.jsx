import { useRef } from 'react'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Landing from '../components/Landing'
import Team from '../components/Team'


const Home = () => {

  const homeRef = useRef(null);
  const eventRef = useRef(null);
  const galleryRef = useRef(null);
  const teamRef = useRef(null);
  

  return (
    /* All components to be arranged here */
    <>
    <Landing homeRef={homeRef} eventRef={eventRef} galleryRef={galleryRef} teamRef={teamRef}/>
    <Events eventRef={eventRef}/>
    <Gallery galleryRef={galleryRef}/>
    <Team teamRef={teamRef}/>  
    </>
  )
}

export default Home