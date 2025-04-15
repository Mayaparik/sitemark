import React from 'react'

function Faq() {
    return (
        <section className="lg:px-14 px-6 bg-slate-950 py-32  border-b border-[#333b4d99]">
            <div className="text-center lg:w-8/12 tracking-wid m-auto mb-10">
                <h1 className="font-semibold text-2xl text-white">Frequently asked questions</h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-4 text-white ">
                <div className="font-semibold p-4 space-y-3 rounded-lg">
                    <p>How do I contact customer support if I have a question or issue?</p>
                    <p className="text-[#909CB3]">You can reach our customer support team by emailing  or calling our toll-free number. We're here to assist you promptly.</p>
                </div>
                <div className="font-semibol  p-4 space-y-3 rounded-lg">
                    <p>Can I return the product if it doesn't meet my expectations?</p>
                    <p className="text-[#909CB3]">Absolutely! We offer a hassle-free return policy. If you're not completely satisfied, you can return the product within [number of days] days for a full refund or exchange.</p>
                </div>
                <div className="font-semibold p-4 space-y-3 rounded-lg">
                    <p>What makes your product stand out from others in the market?</p>
                    <p className="text-[#909CB3]">Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.</p>
                </div>
                <div className="font-semibold p-4 space-y-3 rounded-lg">
                    <p>Is there a warranty on the product, and what does it cover?</p>
                    <p className="text-[#909CB3]">Yes, our product comes with a [length of warranty] warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.</p>
                </div>
            </div>
        </section>
    )
}

export default Faq
