import './App.css';

import React, {Fragment, useState} from 'react'
import celebration from './assets/img/celebration.svg';
import wink from './assets/img/wink.svg';
import art from './assets/img/art.svg';
import instagram from './assets/img/instagram_icon.svg';
import twitter from './assets/img/twitter_icon.svg';
import facebook from './assets/img/facebook_icon.svg';
import sampleImage from './assets/img/sample_image.png';
import Navbar from './components/Navbar';
import { Dialog, Transition } from "@headlessui/react";

function App() {
  const [searchText, setSearchText] = useState('');
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className="App min-h-screen relative ">
        <Navbar/>
      <div  className=" mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:block md:flex items-center justify-between">
            <div className="flex-auto">
              <p className="flex text-[14px] font-medium">Coming Soon <span><img src={celebration} className="pl-2"/></span></p>
              <h1 className="text-[40px] font-bold leading-[54px] mt-2.5">Get Notified <br/>When We Launch</h1>
              <p className="mt-4 max-w-[300px]">We are connecting like-minds in the same physical environment</p>

              <div className='md:block'>
                <div className='flex mt-20 md:mt-8'>
                  <div className='h-[60px] content-start grid grid-flow-row-dense border-2 border-[#376AED] px-2  rounded-[15px] lg:min-w-[400px] md:max-w-[400px] min-w-[200px] py-[2px] bg-[#fff]' >
                    <input
                      onChange={(e)=>setSearchText(e.target.value)}
                      value={searchText}
                      type="email"
                      className='text-left content-start h-[52px]  col-span-2 focus:outline-none pr-2 font-medium bg-[#fff]'
                      placeholder='Enter your email'
                      />
                      
                  </div>
                  <div className='ml-2 relative'>
                    <button
                      onClick={openModal}
                      className='App-background-primary h-[58px] text-white rounded-[15px] px-[22px] min-w-[130px]'
                      >
                      <p className='mx-auto font-medium'>
                        Notify me
                      </p>
                    </button>
                    <img srcSet={art} className='absolute bottom-[-33px] right-[-34px] hidden md:block'/>
                  </div>
                </div>
              </div>

              <p className='flex mt-2 text-[#6F6F6F] italic'>Don't worry we won't spam you <span><img src={wink} className="pl-2"/></span></p>
            </div>
            <div className="flex-auto justify-items-center mt-20 pb-32 md:pb-0 md:mt-0 pl-0 md:pl-[50px]">
              <img srcSet={sampleImage} className='max-h-[500px] no-pointer-event' />
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[33px] w-full'>
        <div className='flex justify-center'>
                <button className=' bg-white h-[50px] w-[50px] mr-[50px] rounded-[100px] grid place-content-center '>
                  <img srcSet={instagram}/>
                </button>
                <button className='bg-white h-[50px] h-[50px] w-[50px] mr-[50px] rounded-[100px] grid place-content-center '>
                  <img srcSet={twitter}/>
                </button>
                <button className='bg-white h-[50px] h-[50px] w-[50px] rounded-[100px] grid place-content-center '>
                  <img srcSet={facebook}/>
                </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <p className="flex text-[18px] font-medium">That was successful <span><img src={celebration} className="pl-2"/></span></p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Thank you for your interest, we'll keep you up to date while we work hard to get this in your hands.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}


export default App;
