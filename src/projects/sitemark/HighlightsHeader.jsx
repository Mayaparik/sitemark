import React from 'react'
import highlightsData from './js/highlightsData'
import CardHighlights from './CardHighlights'



function HighlightsHeader() {

    return (
        <section className="lg:px-14 px-6 bg-slate-950 py-32  border-b border-[#333b4d99]">
            <div className="text-center lg:w-8/12  space-y-2 tracking-wid m-auto mb-10">
                <h1 className="font-semibold text-2xl text-white">Highlights</h1>
                <p className="text-[#909CB3]">Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap gap-4">
                {
                    highlightsData.map((dt, index) => {
                        return (
                            <CardHighlights  key={index}  icon={dt.icon} title={dt.title} description={dt.description} />
                        )
                    })
                }
            </div>
        </ section>
    )
}

export default HighlightsHeader;
