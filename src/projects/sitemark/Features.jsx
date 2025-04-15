import React from 'react'
import auraImage from './image/auraImage.png'


function Features() {
 

  return (
    <section className="lg:px-14 px-6 bg-slate-950 pt-32 pb-20  border-b border-[#333b4d99]">
    <div className="text-sm pb-9 space-y-2 tracking-wide text-white lg:w-7/12">
        <h1 className="font-semibold text-2xl">Product features</h1>
        <p className="text-[#909CB3]">Provide a brief overview of the key features of the product. For example, you could list the number of features, their types or benefits, and add-ons.</p>
    </div>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        <div className="border border-[#333b4d99] rounded-lg">
            <img src={auraImage} alt="" className="w-[70%] m-auto transition-transform duration-700  hover:scale-110 "/>
        </div>
        <div className="space-y-3">
            <div className="px-5 py-5 text-white space-y-2 cursor-pointer bg-[#171e28] hover:bg-[#66616129] rounded-lg">
                <p><i className="bi bi-grid-1x2-fill text-white"></i></p>
                <h2 className="font-semibold text-lg">Dashboard</h2>
                <p className="text-md">This item could provide a snapshot of the most important metrics or data points related to the product.</p>
            </div>    
            <div className="px-5 py-5 text-[#909CB3] space-y-2 cursor-pointer  hover:bg-[#66616129] rounded-lg">
                <p><i className="bi bi-phone-vibrate-fill text-[#94a0b8] text-xl"></i></p>
                <h2 className=" font-semibold text-lg">Mobile integration</h2>
                <p className="">This item could provide information about the mobile app version of the product.</p>
            </div>    
            <div className="px-5 py-5 text-[#909CB3] space-y-2 cursor-pointer hover:bg-[#66616129] rounded-lg">
                <p><i className="bi bi-laptop-fill text-xl text-[#94a0b8]"></i></p>
                <h2 className=" font-semibold text-lg">Available on all platforms</h2>
                <p className="">This item could let users know the product is available on all platforms, such as web, mobile, and desktop.</p>
            </div>    
        </div>
    </div>
  </section>
  )
}

export default Features
