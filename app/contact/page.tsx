import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <>
      <Header />
      <div>
        <main className="md:max-w-7xl max-w-[1000px] ml-[90px] mx-auto pt-20">
          <div className="flex flex-col md:flex-row justify-center mb-20">
            <div className="w-full md:w-1/2 p-6">
              <form className="mt-4 shadow-2xl rounded-lg p-5" >
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
      </div>
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
                <center>
                  <Button size={"lg"} className="mt-4 hover:text-[#01AECD]" variant="outline">Submit</Button>

                </center>
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