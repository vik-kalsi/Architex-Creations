import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"


//Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

//Layout
import PageLayout from "./layout/PageLayout.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Architex-Creations/" element={<PageLayout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="faq" element={<FAQ />}/>
      <Route path="contact" element={<Contact />}/>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
); 


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
