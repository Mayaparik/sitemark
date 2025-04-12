import React from 'react'

function Card2(props) {
    return (
        <div className="space-y-3">
            <p className="text-xs text-[#f5f6fa] cursor-pointer font-semibold">{props.title}</p>
            <div
                className="flex justify-between relative group after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                <p className="text-[19px] font-semibold pb-2 cursor-pointer">{props.heading}</p>
                <i
                    className="bi bi-arrow-right ms-9 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></i>
            </div>
            <div className="space-y-3">
                <div className=" cursor-pointer">
                    <p className="text-[#94a0b8] text-sm cursor-pointer">{props.description}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-items-start space-x-2">
                        <div className="flex justify-items-start">
                            <img src={props.avatarUrl} alt=""
                                className="rounded-full w-[23px] cursor-pointer" />
                        </div>
                        <div>
                            <p className="text-sm">{props.name}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">{props.publishDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2
