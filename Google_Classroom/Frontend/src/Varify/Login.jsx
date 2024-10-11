import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        const data = { email, password }
        console.log(email, password) // remove this line before live it
        const response = await axios.post("http://localhost:7001/new/login", data);
        console.log(response.data.existinguser.name)
        const userName = response.data.existinguser.name;
        sessionStorage.setItem("userName", userName);


        if (response.status === 200) {
            const token = response.data.token;
            console.log("token >>", token)
            localStorage.setItem('token', token);
            alert("Login Successful !!")
        }
        if (response.data.userRole === "student") {
            navigate("/liststudent")
        }
        if (response.data.userRole === "trainer") {
            navigate("/listtrainer")
        }
        if (response.data.userRole === "admin") {
            navigate("/dashboard")
        }
        setPassword("")
        setEmail("")




    }



    return (
        <div className='login w-full'>
            {/* code start */}

            <form action="" onSubmit={handleSubmit} >
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Login here</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative">
                                            <button className="bg-blue-500 text-white rounded-md px-2 py-1" type='submit' >Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </form>

            {/* code ends */}
        </div>
    )
}

export default Login