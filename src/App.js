import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Component/Layout';
import Home from "./Pages/Home"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

import Slider from './Pages/Slider';
import Index2 from './Pages/index2';
import Readmore from "./Pages/Readmore"
import NewBlog from './new/NewBlog';
import Image8 from './new/Image8';
import Image1 from './new/Image1';
import Image2 from './new/Image2';
import Image3 from './new/Image3';
import Image4 from './new/Image4';
import Image5 from './new/Image5';
import Image6 from './new/Image6';
import Image7 from './new/Image7';
import Image9 from './new/Image9';
import ExportSearchpage from './Pages/ExportSearchPages';
import Import from './Pages/Import';
import Export from './Pages/Export';




function App() {
 
  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='services' element={ <Services />}/>
            <Route path='blog' element={ <Slider />}/>
            <Route path='index2' element={ <Index2 />}/>
            <Route path='readmore' element={ <Readmore /> }/>
            <Route path='blog1' element={ <NewBlog /> }/>
            <Route path='blog2' element={ <Image8 /> }/>
            <Route path='img1' element={ <Image1 /> }/>
            <Route path='img2' element={ <Image2 /> }/>
            <Route path='img3' element={ <Image3 /> }/>
            <Route path='img4' element={ <Image4 /> }/>
            <Route path='img5' element={ <Image5 /> }/>
            <Route path='img6' element={ <Image6 /> }/>
            <Route path='img7' element={ <Image7 /> }/>
            <Route path='img8' element={ <Image8 /> }/>
            <Route path='img9' element={ <Image9 /> }/>
            <Route path='exportSearchPage' element={ <ExportSearchpage /> }/>
            <Route path='viewimport' element={ <Import /> }/>
            <Route path='viewexport' element={ <Export /> }/>
            

          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
