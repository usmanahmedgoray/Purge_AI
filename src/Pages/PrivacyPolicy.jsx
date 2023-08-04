
const PrivacyPolicy = () => {
    return (
        <>
        <section className="flex flex-col justify-center items-start m-7">
            {/* Primary heading of the Page */}
            <div className=" w-full my-7 flex justify-center items-center">
            <h1 className="text-3xl font-semibold text-gray-800 p-4 border border-x-pink-800 border-t-pink-800 rounded-lg w-96">Privacy Policy of Purge</h1>
            </div>

            <p className="text-xl my-2">Purge operates the http://localhost:5173/ website, which provides the SERVICE.</p>

            <p className="text-xl my-2 text-justify">This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Purge AI website.</p>

            <p className="text-xl my-2 text-justify">If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>

            <p className="text-xl my-2 text-justify">The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at http://localhost:5173/, unless otherwise defined in this Privacy Policy.</p>

            <h2 className="text-3xl my-4 text-justify p-4 border border-x-pink-800 border-t-pink-800 rounded-lg md:w-[29rem]">Information Collection and Use</h2>

            <p className="text-xl my-2 text-justify">For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>

            <h2 className="text-2xl my-2 text-justify">Log Data</h2>

            <p className="text-xl my-2 text-justify">We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer Internet Protocol (IP) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

            <h2 className="text-2xl my-2 text-justify">Cookies</h2>

            <p className="text-xl my-2 text-justify">Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer hard drive.</p>

            <p className="text-xl my-2 text-justify">Our website uses these cookies to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>

            <h2 className="text-2xl my-2 text-justify">Service Providers</h2>

            <p className="text-xl my-2 text-justify">We may employ third-party companies and individuals due to the following reasons:</p>

            <ul>
                <li className="text-xl">To facilitate our Service;</li>
                <li className="text-xl">To provide the Service on our behalf;</li>
                <li className="text-xl">To perform Service-related services; or</li>
                <li className="text-xl">To assist us in analyzing how our Service is used.</li>
            </ul>
        </section>
        </>
    )
}

// Export the Privacy Policy page component

export default PrivacyPolicy