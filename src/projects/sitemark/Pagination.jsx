import React from 'react'
import { Link } from 'react-router-dom'

function Pagination() {
    return (
        <div className='py-10'>
            <nav>
                <ul className="flex justify-start lg:gap-2 gap-1">
                    <li><Link
                        className=" bg-white !text-black font-bold rounded-full px-3 py-1 transition-all duration-200">1</Link>
                    </li>
                    {
                        ["2", "3", "4", "5", "6", "7", "8", "9", "10"].map((list) => (
                            <li key={list}>
                                <Link
                                    className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">{list}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div >
    )
}

export default Pagination
