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
      <Route path="/sql" exact element={<Sql/>}/>
      <Route path="/translatecode" element={<TranslateCode/>}/>
      <Route path="/emojigenerator" element={<EmojiGenerator/>}/>
      <Route path="/correctgrammar" element={<CorrectGrammar/>}/>
      <Route path="/bugfixer" element={<BugFixer/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path="/contactme" element={<Contact/>}/>
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