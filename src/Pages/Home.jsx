// Importing the required libraries
import { AiOutlineConsoleSql, AiOutlineCode } from "react-icons/ai"
import { VscDebugAlt } from "react-icons/vsc";
import { RiEmojiStickerLine } from "react-icons/ri";
import { TbBrandGrammarly } from "react-icons/tb";
import { Link } from "react-router-dom"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

//  Edit the animation properties
const boxVariant = {
  visible: { opacity: 1, scale: 1,x:0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0,x:200 }
};

const Home = () => {

// Declare the Hooks for the animations
  const control = useAnimation();
  // hook for track the useInView 
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
      control.set({transition:{duration:0.1}})
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      {/* Section  01 -> Basic introduction of the react app*/}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-500">DO YOUR TASKS WITH -
              <br className="hidden lg:inline-block" />PURGE AI
            </h1>
            <p className="mb-8 leading-relaxed text-xl">There is a lot of little tasks that we need to perform in our daily life and to do that tasks we need tools for each task. Purge AI provides a range of AI tools that cater to different needs and tasks. You can access the multiple AI tools on a single platform </p>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/andrea-de-santis-zwd435-ewb4-unsplash-min_11zon.jpg" />
          </div>
        </div>
      </section>

      {/* Section 02 -> Introduction for the tools of AI provided by react app */}
      <section className="text-gray-600 body-font my-24 flex items-center flex-col">
        <div className="flex items-center flex-col w-1/2 relative right-[2rem] ml-3 md:left-0">
        <motion.div ref={ref} variants={boxVariant} initial={{x:0,opacity:0}} animate={control} className="flex justify-center items-center w-[13rem]">
          <i className="fa-solid fa-screwdriver-wrench text-3xl mx-3"></i>
          <h1 className="text-5xl">TOOLS</h1>
        </motion.div>
        <motion.div ref={ref} variants={boxVariant} initial={{x:0,opacity:0}} animate={control} className="flex justify-center items-center mt-9 w-[13rem] md:w-[50rem]">
          <p className=" text-xl font-normal text-center">There is lot of AI Tools all around the globe
            <br className="hidden lg:inline-block" /> But Tools that is provided by Purge AI is basically 5 Tools that are given below: </p>
        </motion.div>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="object-cover object-center h-full w-full" src="/google-deepmind-rXy5Zlmw3qY-unsplash-min_11zon.jpg" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            {/* Add the basic introduction and provide link for SQL Generator */}
            <div  className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <AiOutlineConsoleSql className="text-2xl" />
              </div>
              <div  className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">SQL Generator</h2>
                <p className="leading-relaxed text-base">You can simply provide your prompt data in text form and get simply SQL Query of that data through AI</p>
                <div className="flex justify-center lg:justify-start">
                <Link to="/bugfixer" className="mt-3 text-indigo-500 flex items-center hover:text-lg">Try Now!
                  <i className="fa-solid fa-arrow-right mx-4 relative top-0.5 hover:mx-6"></i>
                </Link>
                </div>
              </div>
            </div>
            {/* Add the basic introduction and provide link for Python Bug Fixer */}
            <div  className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <VscDebugAlt className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Python Bug Fixer</h2>
                <p className="leading-relaxed text-base">You can simply provide your python code in prompt section and you shall be get simply bug free Python piece of code through AI</p>
                <div className="flex justify-center lg:justify-start">
                <Link to="/bugfixer" className="mt-3 text-indigo-500 flex items-center hover:text-lg">Try Now!
                  <i className="fa-solid fa-arrow-right mx-4 relative top-0.5 hover:mx-6"></i>
                </Link>
                </div>
              </div>
            </div>
            {/* Add the basic introduction and provide link for Code Translator */}
            <div  className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <AiOutlineCode className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Code Translator</h2>
                <p className="leading-relaxed text-base">You can simply provide a piece of code in a particular programming language and Yot shall be get piece of code in another programming language that are choosed by user through AI</p>
                <div className="flex justify-center lg:justify-start">
                <Link to="/bugfixer" className="mt-3 text-indigo-500 flex items-center hover:text-lg">Try Now!
                  <i className="fa-solid fa-arrow-right mx-4 relative top-0.5 hover:mx-6"></i>
                </Link>
                </div>
              </div>
            </div>
            {/* Add the basic introduction and provide link for Correct Grammar */}
            <div  className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <TbBrandGrammarly className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Correct Grammar</h2>
                <p className="leading-relaxed text-base">You can simply provide a paragraph or sentence that you want to correct and You shall get sentence/paragraph in correct form through AI</p>
                <div className="flex justify-center lg:justify-start">
                <Link to="/bugfixer" className="mt-3 text-indigo-500 flex items-center hover:text-lg">Try Now!
                  <i className="fa-solid fa-arrow-right mx-4 relative top-0.5 hover:mx-6"></i>
                </Link>
                </div>
              </div>
            </div>
            {/* Add the basic introduction and provide link for Emoji Generator */}
            <div  className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <RiEmojiStickerLine className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Emoji Generator</h2>
                <p className="leading-relaxed text-base">Convert the titles of Movies, Dramas and Books to an Emoji. Simply input the title and get the emoji of that title through AI</p>
                <div className="flex justify-center lg:justify-start">
                <Link to="/bugfixer" className="mt-3 text-indigo-500 flex items-center hover:text-lg">Try Now!
                  <i className="fa-solid fa-arrow-right mx-4 relative top-0.5 hover:mx-6"></i>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
// Export the Home page component

export default Home