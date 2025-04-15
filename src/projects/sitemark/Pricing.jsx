import React from 'react'

function Pricing() {
  return (
    <section className="lg:px-14 px-6 bg-slate-950  border-b border-[#333b4d99] py-32">
    <div className="text-center lg:w-8/12  space-y-2 tracking-wid m-auto mb-10">
        <h1 className="font-semibold text-2xl text-white">Pricing</h1>
        <p className="text-[#909CB3]">Quickly build an effective pricing table for your potential customers with this layout.
            It's built with default Material UI components with little customization.</p>
    </div>
    <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 items-center">
      <div className="px-4 py-5 border border-[#232A36] rounded-lg bg-[#0B0E14] text-white">
        <div className="border-b border-[#232A36] space-y-2 pb-6">
          <h2 className="font-semibold text-xl">Free</h2>
          <h3 className="font-bold text-4xl">$0 <sub className=" text-lg align-bottom">per month</sub> </h3>
        </div>
        <div className="space-y-2">
           <ul className="space-y-4 font-semibold py-7">
            <li><i className="bi bi-check-circle-fill text-blue-600 me-3"></i>10 users included</li>
            <li><i className="bi bi-check-circle-fill text-blue-600 me-3"></i>2 GB of storage</li>
            <li><i className="bi bi-check-circle-fill text-blue-600 me-3"></i>Help center access</li>
            <li><i className="bi bi-check-circle-fill text-blue-600 me-3"></i>Email support</li>
           </ul>
           <button className="text-sm py-2 font-semibold w-full border border-[#232A36] hover:border-[#909CB3] rounded-lg cursor-pointer">Sign up for free</button>
        </div>
      </div>    
      <div className="px-4 py-5 border border-[#232A36] rounded-lg bg-[#282F3C] text-white">
        <div className="border-b border-[#232A36] space-y-2 pb-6">
          <h2 className="font-semibold text-xl">Professional</h2>
          <h3 className="font-bold text-4xl">$15 <sub className=" text-lg align-bottom">per month</sub> </h3>
        </div>
        <div className="space-y-2">
           <ul className="space-y-4 font-semibold py-7">
            <li><i className="bi bi-check-circle-fill text-blue-500 me-3"></i>20 users included</li>
            <li><i className="bi bi-check-circle-fill text-blue-500 me-3"></i>10 GB of storage</li>
            <li><i className="bi bi-check-circle-fill text-blue-500 me-3"></i>Help center access</li>
            <li><i className="bi bi-check-circle-fill text-blue-400 me-3"></i>Priority Email support</li>
            <li><i className="bi bi-check-circle-fill text-blue-500 me-3"></i>Dedicated team</li>
            <li><i className="bi bi-check-circle-fill text-blue-500 me-3"></i>Best deals</li>
           </ul>
           <button className="text-sm py-2 font-semibold w-full  bg-blue-500 hover:bg-sky-400 rounded-lg cursor-pointer">Start Now</button>
        </div>
      </div>    
      <div className="px-4 py-5 border border-[#232A36] rounded-lg bg-[#0B0E14] text-white">
        <div className="border-b border-[#232A36] space-y-2 pb-6">
          <h2 className="font-semibold text-xl">Enterprice</h2>
          <h3 className="font-bold text-4xl">$30 <sub className=" text-lg align-bottom">per month</sub> </h3>
        </div>
        <div className="space-y-2">
           <ul className="space-y-4 font-semibold py-7">
            <li><i className="bi bi-check-circle-fill text-blue-600 me-3"></i>50 users included</li>
            <li><i className="bi bi-check-circle-fill text-blue-600 me-3"></i>30 GB of storage</li>
            <li><i className="bi bi-check-circle-fill text-blue-600 me-3"></i>Help center access</li>
            <li><i className="bi bi-check-circle-fill text-blue-600 me-3"></i>Phone & Email support</li>
           </ul>
           <button className="text-sm font-semibold w-full py-2 border border-[#232A36] hover:border-[#909CB3] rounded-lg cursor-pointer">Sign up for free</button>
        </div>
      </div>    
    </div>
  </section>
  )
}

export default Pricing
