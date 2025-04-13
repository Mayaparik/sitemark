import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../sitemark/image/logo.png'


function Signup() {

    const [fullName, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState("")
    let navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem("fullname", fullName)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

        alert('You have successfully logged in ')

        setFullname("")
        setEmail("")
        setMobile("")
        setPassword("")

        navigate("/signin")


    }

    return (
        <section className="text-white py-30 md:px-0 px-7 bg-radial-[at_10%] from-slate-950 via-slate-900 to-slate-950 to-90% ">
            <div className="grid bg-slate-950 border border-[#333b4d99] shadow-md shadow-slate-900 rounded-lg px-8 py-8 lg:w-4/12 md:w-6/12 w-full space-y-4 m-auto transition-shadow ">
                <img src={logo} alt="" className="w-[28%]" />
                <h1 className="text-4xl font-semibold">Sign up</h1>
                <form className='space-y-4' method='POST' onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <p className="text-[#dbe1ef99] font-medium text-sm">Fullname</p>
                        <input placeholder="Username" type="name" required value={fullName} onChange={(e) => setFullname(e.target.value)}
                            className="text-sm bg-black border px-3 mx-0 py-2 border-[#333b4d99] focus:outline-2 focus:outline-sky-700 rounded-lg w-full" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-[#dbe1ef99] font-medium text-sm">Email</p>
                        <input placeholder="Your@email.com" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                            className="text-sm bg-black border px-3 mx-0 py-2 border-[#333b4d99] focus:outline-2 focus:outline-sky-700 rounded-lg w-full" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-[#dbe1ef99] font-medium text-sm">Mobile Number</p>
                        <input placeholder="Enter your number" type="number" required value={mobile} onChange={(e) => setMobile(e.target.value)}
                            className="text-sm bg-black border px-3 mx-0 py-2 border-[#333b4d99] focus:outline-2 focus:outline-sky-700 rounded-lg w-full" />
                    </div>
                    <div className="space-y-2 relative">
                        <p className="text-[#dbe1ef99] font-medium text-sm">Password</p>
                        <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder=". . . . . ."
                            className="bg-black text-sm border px-2 py-2 border-[#333b4d99] rounded-lg w-full focus:outline-2 focus:outline-sky-700" />
                        <div className='absolute top-[34px] right-[17px]'>
                            <button onClick={() => setShowPassword(!showPassword)} type='button'>{showPassword ? (<i className="bi bi-eye"></i>) : (<i className="bi bi-eye-slash"></i>)}</button>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <button type='submit'
                            className="w-full text-center py-2 text-sm font-medium  bg-[#f5f6fa] cursor-pointer hover:bg-[#c8cedc] text-black rounded-lg">Sign
                            in</button>
                        <p className="text-center ">if you have an acoount <Link className="underline cursor-pointer" to='/signin'>Sign in</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Signup
