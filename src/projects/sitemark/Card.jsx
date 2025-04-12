import React from 'react'

function Card(props) {
    return (
        <div className="border border-[#333b4d99] rounded-lg">
            {(props.imageUrl !== null) && <img src={props.imageUr} alt="" className="cursor-pointer rounded-t-lg" />}
            <div className="space-y-12 px-4 pb-5 pt-9">
                <div className="space-y-3">
                    <p className="text-xs text-[#f5f6fa] cursor-pointer font-semibold tracking-wide">{props.title}
                    </p>
                    <p className="text-[19px] font-semibold cursor-pointer">{props.heading}</p>
                    <p className="line-clamp-2 text-[#94a0b8] text-sm cursor-pointer">{props.description}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-items-start space-x-2">
                        <div>
                            <img src={props.avatarUrl} alt={props.name}
                                className="rounded-full w-[23px] cursor-pointer" />
                        </div>
                        <div>
                            <p className="cursor-pointer text-sm">{props.name}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm cursor-pointer">{props.publishDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
