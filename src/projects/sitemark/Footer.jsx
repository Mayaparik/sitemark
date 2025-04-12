import React from 'react'
import { Link } from 'react-router-dom'
import logo from './image/logo.png'

function Footer() {
    return (
        <section className="lg:px-14 px-6">
            <footer className="py-16  border-b border-[#333b4d99]">
                <div className="grid lg:grid-cols-3 grid-cols-1 justify-between space-y-7">
                    <div className="space-y-4">
                        <img src={logo} alt="" className="w-[27%]" />
                        <div className="space-y-1 text-sm tracking-wide font-semibold">
                            <p>Join the newsletter</p>
                            <p className="font-normal text-[#94a0b8]">Subscribe for weekly updates. No spams ever!</p>
                        </div>
                        <div className="space-x-2 space-y-3">
                            <p className="text-[#94a0b8] text-sm font-normal">Email</p>
                            <div className="flex space-x-3">
                                <input type="text" name="email" placeholder="Your email address"
                                    className="ps-4 py-2 w-full text-sm text-[#94a0b8] border border-[#333b4d99] hover:border-[#adb4c399] rounded-lg" />
                                <button
                                    className="!px-3 !py-2 !text-sm !font-medium  !bg-[#f5f6fa] !cursor-pointer !text-black !rounded-lg">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:block hidden"></div>
                    <div className="flex justify-between">
                        <div>
                            <ul className="space-y-1">
                                <li><Link to="product" className="!text-white font-bold text-sm">Product</Link></li>
                                <li>
                                    <Link to="features" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Features
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="testimonials" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Testimonials
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="highlights" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Highlights
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="Pricing" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Pricing
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="faqs" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        FAQs
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-1">
                                <li><Link to="" className="!text-white font-bold text-sm">Company</Link></li>
                                <li>
                                    <Link to="" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        About us
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Careers
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Press
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-1">
                                <li><Link to="" className="!text-white font-semibold text-sm">Legal</Link></li>
                                <li>
                                    <Link to="" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Terms
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Privacy
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="relative !text-slate-500 font-bold pb-1 text-sm group">
                                        Contact
                                        <span
                                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:py-16 py-10 items-center space-y-9">
                <div className="space-y-2">
                    <div>
                        <Link className="relative !text-slate-500 font-semibold pb-1 me-2 text-sm group">
                            Privacy Policy
                            <span
                                className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                        </Link>
                        <Link className="relative !text-slate-500 font-semibold pb-1 text-sm group">
                            Terms Of Services
                            <span
                                className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                        </Link>
                    </div>
                    <p className="text-slate-500 font-semibold text-sm">Copyright © <Link
                        className="relative !text-slate-500 font-semibold pb-1 text-sm group">
                        Sitemark
                        <span
                            className="absolute left-0 bottom-0 w-full h-[1px] bg-slate-500 transition-all duration-300 group-hover:w-0"></span>
                    </Link> 2025</p>
                </div>
                <div className="lg:block hidden"></div>
                <div className="lg:text-end space-x-1">
                    <Link
                        className="border border-[#333b4d99] cursor-pointer hover:border-[#adb4c399] px-2 text-sm py-2 rounded-lg content-center"><i
                            className="bi bi-github px-1 !text-white"></i></Link>
                    <Link
                        className="border border-[#333b4d99] cursor-pointer hover:border-[#adb4c399] px-2 text-sm py-2 rounded-lg content-center"><i
                            className="bi bi-twitter-x px-1 !text-white"></i></Link>
                    <Link
                        className="border border-[#333b4d99] cursor-pointer hover:border-[#adb4c399] px-2 text-sm py-2 rounded-lg content-center"><i
                            className="bi bi-linkedin px-1 !text-white"></i></Link>

                </div>
            </div>
        </section>
    )
}

export default Footer
