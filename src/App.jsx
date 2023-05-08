/*import { About, Contact, Experience, Feedbacks, Hero, Navbar, Stars, Tech, Works } from './components'*/
import { Route, Routes } from 'react-router-dom'
import { Initial } from './pages/Home/Initial'
import { Contact, StarsCanvas  } from './components'
/*import { Stars } from '@react-three/drei'*/
const App = () => {
     
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/contact" element={
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas  />
          </div>
        } />
      </Routes>

    </>
  )
}

export default App
