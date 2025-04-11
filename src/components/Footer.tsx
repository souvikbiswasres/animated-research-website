
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Souvik Biswas</h2>
            <p className="text-gray-400 mt-2">Researcher & Computer Scientist</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#research"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Research
            </a>
            <a
              href="#publications"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Publications
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Souvik Biswas. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Google Scholar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.412 16.505l-1.312-1.312c-.706-.706-.292-1.678.527-2.497.82-.82 1.791-1.233 2.497-.527l1.312 1.312c-.706.706-1.791.233-2.497-.527-.706-.706-1.233.214-.527.92.706.706 1.233 1.312.527 2.497l-1.312-1.312c.706-.706.232-1.791-.527-2.497-.76-.76-1.791-.232-2.497.527l1.312 1.312.707.707z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
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
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">ResearchGate</span>
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
    </footer>
  );
};

export default Footer;
