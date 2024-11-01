import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <>
      <Header />  
    <div className="flex flex-col items-center justify-center min-h-screen md:w-auto w-[720px] md:mx-auto mr-[50px]">
      <form className="w-full max-w-lg light:bg-white p-8 shadow-md rounded-lg">
        <div className="mb-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className= " resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="message"
            placeholder="Your Message"
            rows={4}
            required
          ></textarea>
        </div>
        <center>
                  <Button size={"lg"} className="mt-4 hover:text-[#01AECD]" variant="outline">Submit</Button>

                </center>
      </form>
    </div>


      {/* <div className="md:mt-10 md:w-[1170px] md:mx-auto ">
        <main >
          <div className="flex flex-col md:flex-row justify-center mb-20">
            <div className="w-full md:w-1/2 p-6">
              <form className="mt-4 shadow-2xl rounded-lg p-5">
                <h1 className="text-3xl font-bold mb-2 text-center p-4">Contact Me</h1>
                <div className="flex flex-col mb-4">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 border"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 border"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none border"
                  />
                </div>
                <center>
                  <Button size={"lg"} className="mt-4 hover:text-[#01AECD]" variant="outline">Submit</Button>
                </center>
              </form>
            </div>
          </div>
        </main>
      </div> */}
      {/* <div>


        <main className="md:max-w-7xl max-w-[640px] mx-auto pt-20">
          <div className="flex flex-wrap justify-center mb-20">
            <div className="w-full md:w-1/2 p-6">
              <form className="mt-4 shadow-2xl rounded-lg p-5">
                
            <h1 className="text-3xl font-bold mb-2 text-center p-4">Contact Me</h1>
                <div className="flex flex-col mb-4">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="py-2 pl-10 text-sm  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 border"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="py-2 pl-10 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 border"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    className="py-2 pl-10 text-sm  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none border"
                  />
                </div>

              </form>
            </div>

          </div>
        </main>

      </div> */}
      <Footer />
    </>
  );
}

export default Contact;