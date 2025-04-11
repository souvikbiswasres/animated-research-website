
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center animate-on-scroll">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-on-scroll">
          Interested in my research or potential collaborations? Feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
          <div className="md:w-1/2 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-research">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-research bg-opacity-10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-research"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <a
                    href="mailto:contact@souvikbiswas.com"
                    className="text-research hover:underline"
                  >
                    contact@souvikbiswas.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-research bg-opacity-10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-research"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Department of Computer Science, University Research Lab</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-research bg-opacity-10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-research"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Social Profiles</h4>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="https://scholar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-research transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.412 16.505l-1.312-1.312c-.706-.706-.292-1.678.527-2.497.82-.82 1.791-1.233 2.497-.527l1.312 1.312c-.706.706-1.791.233-2.497-.527-.706-.706-1.233.214-.527.92.706.706 1.233 1.312.527 2.497l-1.312-1.312c.706-.706.232-1.791-.527-2.497-.76-.76-1.791-.232-2.497.527l1.312 1.312.707.707z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-research transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.researchgate.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-research transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-12.902 19.554h-2.098v-9.08h2.098v9.08zm-1.049-10.648c-.673 0-1.218-.541-1.218-1.208 0-.667.545-1.208 1.218-1.208.671 0 1.216.541 1.216 1.208 0 .667-.545 1.208-1.216 1.208zm9.049 10.648h-2.098v-4.688c0-1.562-1.772-1.424-1.772 0v4.688h-2.098v-9.08h2.098v1.134c1.24-2.335 5.764-2.251 5.764 2.294v5.652z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-research">
              Send a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-research focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 bg-research text-white rounded-md hover:bg-research-dark transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
