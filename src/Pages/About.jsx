// importing react icons 
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
const About = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto relative right-4">
                        {/* Add the About gif banner */}
                        <div className="rounded-lg h-64 w-[23.9rem] md:w-[54rem] overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="About Me.gif" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10 md:w-[66rem]">
                            {/* Add the basic intro */}
                            <div className="w-[24rem] px-2 sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-16 h-16 md:w-32 md:h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img className="rounded-full" src="/Profile Picture 03.jpg" alt="usman_ahmed" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Usman Ahmed</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-lg text-justify">I am a B.S(C.S) last yaer student and also a MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer for a 2 years.I have completed a lot of Mern stack apps</p>
                                </div>
                            </div>
                            {/* Bio */}
                            <div className="w-[24rem] md:w-[32rem] p-1 md:p-4 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center">
                                <h1 className="text-2xl mb-4 p-2 w-24 text-center border border-x-pink-700 border-t-pink-900 rounded-lg">Bio</h1>
                                <p className="leading-relaxed text-lg mb-4 text-justify">I am Usman Ahmed, a dedicated and passionate MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer with a strong background in web development. With 2 years of experience, I have honed my skills in designing and implementing efficient and scalable web applications using the MERN stack. </p>

                                <p className="leading-relaxed text-lg mb-4 text-justify">I have a deep understanding of JavaScript (ES6+) and expertise in front-end development with React.js, Redux, HTML, CSS, and popular UI frameworks like Bootstrap and Material-UI. On the back end, I am proficient in Node.js and Express.js, creating RESTful APIs and integrating databases like MongoDB, MySQL, and PostgreSQL.</p>

                                <p className="leading-relaxed text-lg mb-4 text-justify">Throughout my career, I have successfully delivered high-quality projects by collaborating with cross-functional teams and translating client requirements into user-friendly interfaces. I have experience integrating external APIs and third-party services to enhance application functionality.</p>

                                <p className="leading-relaxed text-lg mb-4 text-justify">I am well-versed in version control using Git . I am committed to writing clean and maintainable code, conducting thorough testing, and staying updated with the latest web development trends and best practices.</p>

                                <p className="leading-relaxed text-lg mb-4 text-justify">My problem-solving skills and attention to detail enable me to identify and resolve issues efficiently. I thrive in an Agile development environment, leveraging Scrum or Kanban methodologies to ensure project milestones are met on time.</p>
                                {/* Add the social media links */}
                                <div className="social-icons my-12">
                                    <div className=" p-2 mb-8 w-40 text-center heading text-2xl border border-x-pink-700 border-t-pink-900 rounded-lg">Social Links</div>
                                    <div className="links flex flex-col items-start">
                                        <a className="text-indigo-500 flex items-center my-6" href="https:www.facebook.com/usmanahmedgoray" target="_blank" rel="noreferrer">
                                            <BsFacebook className="text-4xl text-indigo-700" />
                                            <h4 className="text-xl md:text-2xl text-gray-700 ml-4 hover:underline">facebook.com/usmanahmedgoray</h4>
                                        </a>
                                        <a className="text-indigo-500 inline-flex items-center my-6" href="https:www.twitter.com/usmanahmedgoray" target="_blank" rel="noreferrer">
                                            <BsTwitter className="text-4xl text-indigo-500" />
                                            <h4 className="text-xl md:text-2xl text-gray-700 ml-4 hover:underline">twitter.com/usmanahmedgoray</h4>
                                        </a>
                                        <a className="text-indigo-500 inline-flex items-center my-6" href="https:www.github.com/usmanahmedgoray" target="_blank" rel="noreferrer">
                                            <BsGithub className="text-4xl text-gray-800" />
                                            <h4 className="text-xl md:text-2xl text-gray-700 ml-4 hover:underline">github.com/usmanahmedgoray</h4>
                                        </a>
                                        <a className="text-indigo-500 inline-flex items-center my-6" href="https://www.linkedin.com/in/usmanahmedgoray/" target="_blank" rel="noreferrer">
                                            <BsLinkedin className="text-4xl text-blue-700" />
                                            <h4 className="text-xl md:text-2xl text-gray-700 ml-4 hover:underline">linkedin.com/in/usmanahmedgoray</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About