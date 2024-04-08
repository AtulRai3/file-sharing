import React from 'react';
import Constant from '../_utils/Constant';

// Footer component
function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <p className="mb-2">&copy; {currentYear} Your Website Name. All rights reserved.</p>
        <p className="text-sm">Built with <a href="https://reactjs.org/" className="underline">React</a> and <a href="https://nextjs.org/" className="underline">Next.js</a></p>
        <p className="text-sm mt-2">Designed by Your Name</p>
      </div>
    </footer>
  );
}

// Hero component
function Hero() {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Upload, Save 
              and easily Share 
              <span className="sm:block"> your files in one place </span>
            </h1>
      
            <p className="mt-4 sm:text-xl/relaxed text-white-500">
              {Constant.desc}
            </p>
      
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/upload"
              >
                Get Started
              </a>
      
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href=""
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Including the Footer component */}
    </div>
  );
}

export default Hero;
