// Importing the required libraries
import { useState } from "react";
import language from "../Constant/LangName";
import { AiFillCopy } from "react-icons/ai";



const TranslateCode = () => {
  // Declare the useState Hooks
  const [Prompt, setPrompt] = useState("");
  const [Response, setResponse] = useState("")
  const [Flang, setFlang] = useState("")
  const [Slang, setSlang] = useState("")
  const [IsActive, setIsActive] = useState(false)

// Handle the change in textarea
  const handleChange = (e) => {
    setPrompt(e.target.value)
  }

  //  handle the Translate Code Button

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("")
    console.log(Flang);
    console.log(Slang);
    setIsActive(true)

    try {
      const response = await fetch("http://localhost:500/translateCode", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: Prompt, Flang: Flang, Slang: Slang }),
      });

      const result = await response.json();
      setIsActive(false)
      setResponse(result)
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }

  }
// handle the 1st language dropdown function
  const handleFlang = (e) => {
    setFlang(e.target.value)
    // console.log(Flang)
  }
  // handle the 2nd language dropdown function
  const handleSlang = (e) => {
    setSlang(e.target.value)
    // console.log(Slang)
  }
// handle the paste function
  const handlePaste = async () => {
    const paste = await navigator.clipboard.readText();
    setPrompt(paste);
  }
  // handle the copy function

  const handleCopy = async () => {
    return await navigator.clipboard.writeText(Response.content);
  }

  return (
    <>
      <div className=" my-10 container flex justify-center items-center flex-col ">
              {/* Section of page Introduction */}
        <div className="my-4 mt-16 md:mt-0 flex flex-col justify-center items-start h-60 w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[65rem]">
          <h1 className="text-5xl text-gray-700 my-6 font-semibold border-l-pink-900 border-r-pink-900 border-t-pink-900 border p-3 rounded-lg">Translate Code</h1>
          <p className="text-xl text-justify text-gray-600">To translate from one programming language to another we can use the comments to specify the source and target languages.</p>
          <p className="text-xl text-justify mt-3 text-gray-600">You can simply provide a piece of code in a particular programming language and You shall be get piece of code in another programming language that are choosed by user through AI</p>
        </div>
        <div className="my-6 flex flex-col items-center  ">
          <div className="flex justify-start w-full mt-24 md:mt-0 md:w-[40rem] lg:w-[50rem] xl:w-[65rem]">
            <label htmlFor="large-input" className="block mb-6 text-2xl font-semibold text-gray-900 border border-l-pink-900 border-r-pink-900 border-t-pink-900 p-3 rounded-lg">Prompt</label>
          </div>
          <div className="p-4 text-gray-900 border bay-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-60 w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[65rem] flex flex-col justify-between ">
            {/* textarea for the user input */}
            <textarea placeholder="Enter the Prompt" type="text" id="lorder-grarge-input" name="prompt" value={Prompt} onChange={handleChange} rows={9} className="p-4 text-gray-900 border bay-300 rounded-lg bg-gray-50 sm:text-md resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   outline-none w-[20rem] md:w-[38rem] lg:w-[48rem] xl:w-[63rem] h-[11rem] " />
            <div className="flex justify-end m-3">
              <i className="fa-regular fa-clipboard cursor-pointer text-2xl hover:animate-pulse " onClick={handlePaste}></i>
            </div>
          </div>


          {/* pagramming languages list dropdown */}
          <div className="flex w-[22rem] md:w-[50rem] md:justify-evenly flex-col md:flex-row ">
            {/* First Language */}
            <div className="relative max-w-xs mx-auto mt-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <select onChange={handleFlang} className="w-60 p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option value=" " >Select the 1st language</option>
                {language.map((e, idx) => {
                  return <option value={e} key={idx}>{e}</option>
                })}
              </select>
            </div>
            {/* Second language */}

            <div className="relative max-w-xs mx-auto mt-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <select onChange={handleSlang} className="w-60 p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option value=" " >Select the 2nd language</option>
                {language.map((e, idx) => {
                  return <option value={e} key={idx}>{e}</option>
                })}
              </select>
            </div>
          </div>
{/* submit Button */}
          <button onClick={handleSubmit} className="bg-orange-600 p-4 text-white text-xl rounded mt-8 active:bg-orange-700">
            Translate Code
          </button>
        </div>

        {/* Add the response Area when is not available set the default statement */}
        {Response ?
          <div className="w-[22rem] md:w-[32rem] border-4 rounded-lg p-5 shadow-lg bg-gray-700 flex flex-col justify-between items-center text-white">
            <h1 className="text-xl">{Response.content}</h1>
            <AiFillCopy className="text-3xl text-white cursor-pointer active:text-2xl relative md:left-[14rem] left-[9rem] " onClick={handleCopy} />
          </div>
          :
          <div className="my-6">{IsActive ? <i className="fa-solid fa-spinner fa-spin text-4xl"></i> : <p className="text-2xl">There is no content</p>}</div>
        }
      </div>
    </>
  )
}
// Export the Translate Code page component
export default TranslateCode