import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <>
    <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">We decentralise stuff</h1>
      <p className="mb-8 leading-relaxed text-xl mr-16">to prosper and maintain product traceability with promise in the agricultural food supply chain</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-gradient-to-r from-lime-500 to-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l from-green-500 to-lime-600 rounded text-lg mr-10">Buy things</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-white-200 rounded text-lg ml-10">Contact</button>
      </div>
    </div>
    <div className="-ml-20">
    {/* Image */}
    <Image src="/veggies.jpg" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>
      {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    </div>
  </div>
</section>
<section class="text-white body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image src="/dummy.png" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>
          {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"> */}
        </a>
        <div class="mt-4">
          <h3 class="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">Ξ 0.005 ETH</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image src="/dummy.png" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>
          {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261"> */}
        </a>
        <div class="mt-4">
          <h3 class="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">Ξ 0.006 ETH</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image src="/dummy.png" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>

          {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262"> */}
        </a>
        <div class="mt-4">
          <h3 class="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">Ξ 0.005 ETH</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image src="/dummy.png" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>

          {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263"> */}
        </a>
        <div class="mt-4">
          <h3 class="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">Ξ 0.005 ETH</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image src="/dummy.png" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>

          {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264"> */}
        </a>
        <div class="mt-4">
          <h3 class="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">Ξ 0.005 ETH</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image src="/dummy.png" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>

          {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265"> */}
        </a>
        <div class="mt-4">
          <h3 class="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">Ξ 0.005 ETH</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image src="/dummy.png" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>

          {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267"> */}
        </a>
        <div class="mt-4">
          <h3 class="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">Ξ 0.005 ETH</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <Image src="/dummy.png" alt="Vegetables" width="600" height="500" className='rounded-2xl'/>

          {/* <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"> */}
        </a>
        <div class="mt-4">
          <h3 class="text-white-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-white-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">Ξ 0.005 ETH</p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Hero