import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from './image/logo.png'
import SignButtons from './auth/SignButtons'
import { useNavigate } from 'react-router-dom'


function Header() {

    const [isOPen, setIsOpen] = useState(false)
    let navigate = useNavigate()
    return (
        <section className="lg:px-14 px-6">
            <header className="fixed top-7 left-0 w-full  lg:px-14 px-6  z-50 shadow-2xl">
                <div
                    className="grid grid-cols-2 justify-between bg-black/90 rounded-2xl px-4 py-2 items-center border border-[#333b4d99]">
                    <div className="flex space-x-5 justify-start">
                        <div className="content-center min-w-[100px]">
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <ul className="lg:flex hidden space-x-1">
                                {["Features", "Testimonials", "Highlights", "Pricing", "FAQ", "Blog"].map((list) => (
                                    <li
                                        key={list}
                                        className="px-3 py-2 text-sm w-full font-medium hover:bg-[#333b4d] rounded-lg">
                                        <Link to={`/${list.toLowerCase() === "blog" ? "" : list.toLowerCase()} `} style={{ color: "#f5f6fa" }}>{list}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div >
                    <div className='lg:block hidden'>
                        <SignButtons />
                    </div>
                    <div className="text-end">
                        <button className="lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOPen)}>
                            {isOPen ? <i className="bi bi-x text-xl"></i> : <i className="bi bi-list text-xl"></i>}
                        </button>
                    </div>
                </div>
                {isOPen && (
                    <div className="bg-black/90 mt-3 rounded-lg px-6 py-4 lg:hidden flex-wrap">
                        <nav className="flex flex-col space-y-3">
                            {["Features", "Testimonials", "Highlights", "Pricing", "FAQ", "Blog"].map((list) => (
                                <li
                                    className="px-3 py-2 text-sm w-full font-medium hover:bg-[#333b4d] rounded-lg">

                                    <Link key={list} to="" style={{ color: "#f5f6fa" }}>{list}</Link>
                                </li>
                            ))}
                        </nav>
                        {/* <!-- Sign-in & Sign-up Buttons (Mobile) -->  */}
                        <div class="mt-4 flex flex-col space-y-2">
                            <button type='button'
                                className="px-4 py-2 text-sm font-medium hover:bg-[#333b4d] rounded-lg"
                                onClick={() => navigate("signin")}
                            >Sign in</button>
                            <button type='button'
                                className="px-4 py-2 text-sm font-medium bg-[#f5f6fa] text-black hover:bg-[#c8cedc] rounded-lg"
                                onClick={() => navigate("signup")}
                            >Sign
                                up</button>
                        </div>
                    </div>
                )}
            </header>
        </section >
    )
}

export default Header
