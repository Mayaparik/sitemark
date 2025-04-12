import React from 'react'

function CardFirst() {
    return (
        <div>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
                <div class="border border-[#333b4d99] rounded-lg">
                    <img src="image/hero1.png" alt="" class="cursor-pointer rounded-t-lg" />
                    <div class="space-y-12 px-4 pb-5 pt-9">
                        <div class="space-y-3">
                            <p class="text-xs text-[#f5f6fa] cursor-pointer font-semibold tracking-wide">Engineering
                            </p>
                            <p class="text-[19px] font-semibold cursor-pointer">Revolutionizing software development
                                with cutting-edge tools</p>
                            <p class="line-clamp-2 text-[#94a0b8] text-sm cursor-pointer">Our latest engineering
                                tools are
                                designed
                                to streamline workflows and boost productivity. Discover how these innovations
                                are
                                transforming the software development landscape.</p>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex justify-items-start space-x-2">
                                <div>
                                    <img src="image/avatar1.png" alt=""
                                        class="rounded-full w-[23px] cursor-pointer" />
                                </div>
                                <div>
                                    <p class="cursor-pointer text-sm">Remy Sharp, Travis Howard</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-sm cursor-pointer">july 14, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFirst
