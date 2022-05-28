import React, {useState} from 'react'

import { Transition } from "@headlessui/react";

import logo from '../assets/img/veel_logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='pt-8'>
        <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                  <a href="https://veel.app" class="flex items-center">
                    <img srcSet={logo} class="mr-3 h-6 sm:h-9 App-logo" alt="Flowbite Logo" />
                    <span class="self-center text-[24px] font-black App-color">Veel</span>
                  </a>
              </div>
            
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auhref sm:ml-6 sm:pr-0 hidden md:block">
                <div className="grid grid-cols-2">
                    <div className="">
                        <a href="/">
                            About Us
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <buthrefn
                onClick={() => setIsOpen(!isOpen)}
                type="buthrefn"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </buthrefn>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterhref="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leavehref="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </a>

                
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}