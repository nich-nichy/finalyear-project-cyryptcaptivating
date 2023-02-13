import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="container flex flex-wrap p-5 pl-10 flex-col text-white md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      {/* Logo */}
      <Image src="/Crypt-logo.png" alt="Crypt logo" height="80" width="80" />
      <span className="ml-3 -mr-14 text-white text-xl">Crypt Captivating</span>
    </a>
    <nav className="ml-96 mr-20 md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">Items</a>
      <a className="mr-5 hover:text-gray-900">Wallet</a>
      <a className="mr-5 hover:text-gray-900">Contact us</a>
    </nav>
    <button className="inline-flex items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-0 -mr-10 py-2 px-5 focus:outline-none hover:bg-gradient-to-l from-fuchsia-500 to-violet-500 rounded text-base mt-4 md:mt-0">Buy Necessity
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
  )
}

export default Navbar