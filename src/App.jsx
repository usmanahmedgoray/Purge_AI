// Importing the required libraries
import Navbar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sql from './Pages/Sql'
import TranslateCode from './Pages/TranslateCode'
import EmojiGenerator from './Pages/EmojiGenerator'
import CorrectGrammar from './Pages/CorrectGrammar'
import BugFixer from './Pages/BugFixer'
import Footer  from "./Components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
const App = () => {
  return (
    <>
    <div className="flex flex-col justify-between h-screen">
    <BrowserRouter>
    {/* Add the navbar */}
    <Navbar/>
    {/* Add the routes to navigate */}
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/sql4" exact element={<Sql/>}/>
      <Route path="/translatecode4" element={<TranslateCode/>}/>
      <Route path="/emojigenerator2" element={<EmojiGenerator/>}/>
      <Route path="/correctgrammar2" element={<CorrectGrammar/>}/>
      <Route path="/bugfixe2r" element={<BugFixer/>}/>
      <Route path="/privacypolicy2" element={<PrivacyPolicy/>}/>
      <Route path="/contactme2" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    {/* Add the Footer */}
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App