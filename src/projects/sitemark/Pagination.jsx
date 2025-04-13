import React from 'react'
import { Link } from 'react-router-dom'

function Pagination() {
    return (
        <div className='py-10'>
            <nav>
                <ul className="flex justify-start lg:gap-2 gap-1">
                    <li><Link to="1"
                        className=" bg-white !text-black font-bold rounded-full px-3 py-1 transition-all duration-200">1</Link>
                    </li>
                    <li><Link to="2"
                        className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">2</Link>
                    </li>
                    <li><Link to="3"
                        className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">3</Link>
                    </li>
                    <li><Link to="4"
                        className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">4</Link>
                    </li>
                    <li><Link to="5"
                        className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">5</Link>
                    </li>
                    <li><Link to="6"
                        className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">6</Link>
                    </li>
                    <li><Link to="7"
                        className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">7</Link>
                    </li>
                    <li><Link to="8"
                        className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">8</Link>
                    </li>
                    <li><Link to="9"
                        className=" bg-transparent !text-white rounded-full px-3 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">9</Link>
                    </li>
                    <li><Link to="10"
                        className=" bg-transparent !text-white rounded-full px-2 py-1 hover:bg-[#161d2efa] text-base transition-all duration-200">10</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
