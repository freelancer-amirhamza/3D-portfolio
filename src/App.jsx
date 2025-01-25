
import { BrowserRouter,  } from "react-router-dom";
import {About,Contact, Experience, Feedbacks, Hero, Navbar,
  //  Tech,
    Works, StarsCanvas  } from './components'

const App = () => {
  return (
    <BrowserRouter> 
    
    <div className="relative z-0 bg-primary">
      <div className="relative bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
        <StarsCanvas/>
      </div>
      <About/>
      <Experience/>
      {/* <Tech/> */}
      <Works/>
      <Feedbacks/>
      <div className="relative z-2">
        <Contact/>
        <StarsCanvas/>
      </div>
      <div className="hidden sm:block">
        <StarsCanvas  />
      </div>
      
    </div>
    </BrowserRouter>
  )
}

export default App

// some addition needs 
// About page 
// contact page 
// project page