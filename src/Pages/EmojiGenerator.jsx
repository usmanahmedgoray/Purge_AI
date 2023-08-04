// Importing the required libraries
import { useState } from "react";
import { AiFillCopy } from "react-icons/ai";
const EmojiGenerator = () => {
  // Declare the useState Hooks
  const [Prompt, setPrompt] = useState("");
  const [Response, setResponse] = useState("")
  const [IsActive, setIsActive] = useState(false)

// Handle the change in textarea
  const handleChange = (e) =>{
    // console.log(e.target.value)
    setPrompt(e.target.value)
  }
// handle the Emoji Generator Button
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setIsActive(true)
    setResponse("")
    // Wrap the API request in try catch
    try {
      const response = await fetch("https://purgeai-server-4e626c2883f7.herokuapp.com/titleToEmoji", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title:Prompt}),
      });

      const result = await response.json();
      setResponse(result)
      setIsActive(false)
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
// handle the paste function
  const handlePaste = async() => {
    let paste =  await navigator.clipboard.readText();
    setPrompt(paste);
  }
// handle the copy function
  const handleCopy  = async() =>{
    return await navigator.clipboard.writeText(Response.content);
  }

  return (
    <>
    <div className=" my-10 container flex justify-center items-center flex-col ">
            {/* Section of page Introduction */}

    <div className="my-4 mt-8 md:mt-0 flex flex-col justify-center items-start h-60 w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[65rem]">
          <h1 className="text-5xl text-gray-700 my-6 font-semibold border-l-pink-900 border-r-pink-900 border-t-pink-900 border p-3 rounded-lg">Emoji Generator</h1>
          <p className="text-xl text-justify text-gray-600">To convert title into an Emoji input te title in prompt section or paste the your content through paste button.</p>
          <p className="text-xl text-justify mt-3 text-gray-600">Convert the titles of Movies, Dramas and Books to an Emoji. Simply input the title and get the emoji of that title through AI.</p>
        </div>
    <div className="my-6 flex flex-col items-center">
      <div className="flex justify-start w-full mt-20 md:mt-0">
    <label htmlFor="large-input" className="block mb-6 text-2xl font-semibold text-gray-900 border border-l-pink-900 border-r-pink-900 border-t-pink-900 p-3 rounded-lg">Prompt</label>
      </div>
    <div className="p-4 text-gray-900 border bay-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-60 w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[65rem] flex flex-col justify-between ">
      {/* textarea for the user input */}
    <textarea placeholder="Enter the Prompt" type="text" id="lorder-grarge-input" name="prompt" value={Prompt} onChange={handleChange} rows={9} className="p-4 text-gray-900 border bay-300 rounded-lg bg-gray-50 sm:text-md resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   outline-none w-[20rem] md:w-[38rem] lg:w-[48rem] xl:w-[63rem] h-[11rem] "/>
            <div className="flex justify-end m-3">
              <i className="fa-regular fa-clipboard cursor-pointer text-2xl hover:animate-pulse " onClick={handlePaste}></i>
            </div>
          </div>
          {/* submit Button */}
          <button onClick={handleSubmit} className="bg-orange-600 p-4 text-white text-xl rounded mt-6 active:bg-orange-700  ">
            Generate Emoji
          </button>
</div>

{/* Add the response Area when is not available set the default statement */}
{Response?
<div className="w-[32rem] border-4 rounded-lg p-3 shadow-lg bg-gray-700 flex justify-between items-center ">
     <h1 className="text-2xl">{Response.content}</h1>
     <AiFillCopy className="text-3xl text-white cursor-pointer active:text-2xl " onClick ={handleCopy}/>
</div>
   :
   <div className="my-6">{IsActive?<i className="fa-solid fa-spinner fa-spin text-4xl"></i>:<p className="text-2xl">There is no content</p>}</div>
   }
</div>
    </>
  )
}

// Export the BugFixer page component

export default EmojiGenerator