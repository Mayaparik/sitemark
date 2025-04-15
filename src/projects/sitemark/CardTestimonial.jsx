import React from 'react'

function CardTestimonial(props) {
    return (
        <div className="border border-[#333b4d99] rounded-lg p-4  space-y-6 text-white flex flex-col justify-between " >
            <p className="text-[#909CB3] text-sm tracking-wide">{props.para}</p>
            <div className="flex justify-items-start space-x-4">
                <div>
                    <img src={props.profile} alt=""
                        className="rounded-full w-[40px] cursor-pointer" />
                </div>
                <div>
                    <p className="cursor-pointer text-sm font-semibold"> {props.name}</p>
                    <p className="text-sm text-[#909CB3] font-semibold">{props.profession}</p>
                </div>
            </div>
        </div>
    )
}

export default CardTestimonial
