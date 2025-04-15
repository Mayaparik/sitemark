import React from 'react'
import highlightsData from './js/highlightsData'
import "bootstrap-icons/font/bootstrap-icons.css";


function CardHighlights({ icon, title, description, textColor }) {
    return (
        <div className="px-5 py-5 text-white space-y-2 cursor-pointer bg-[#0f151e] hover:bg-[#807d7d29] rounded-lg">
            <p><i className={`bi ${icon} text-white text-lg`}></i></p>
            <h2 className="font-semibold text-md">{title}</h2>
            <p className="text-sm text-[#909CB3]">{description}</p>
        </div>
    )
}

export default CardHighlights
