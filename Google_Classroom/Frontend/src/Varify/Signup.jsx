import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Signup = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    var [role, setRole] = useState("")

    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        const data = { name, email, phone, password, role }
        console.log(">>>>", data)

        const responsee = await axios.post("http://localhost:7001/new/signup", data)
        try {
            console.log(" >>>>", responsee)
            console.log(" >>>>", responsee.status)
            setName("");
            setEmail("");
            setPassword("");
            setPhone("");
            setRole("");

            navigate("/login")

        } catch (error) {
            if (responsee.status === 201) {
                alert('data save successfully')
            } if (responsee.status === 400) {
                alert('user already exist, please login !!')
            } if (responsee.status === 500) {
                alert('Server error !')
                console.log("error in signin data >>", error);
            }

        }



    }



    return (
        <div className='signUP w-full'>
            <form action="" onSubmit={handleSubmit}>

                {/* code  */}
                <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div>

                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">SignUp here..</p>
                                        <p>Please fill out all the fields.</p>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="full_name">Full Name</label>
                                                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Password</label>
                                                <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*****" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Phone</label>
                                                <input type="number" name="phone" id="phone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 000 111 2345" />
                                            </div>

                                            {/* dropdown role */}

                                            <select >
                                                <option selected>Select Role:</option>
                                                <option value={role = "admin"} onChange={(e) => setRole(e.target.value)}>Admin</option>
                                                <option value={role = 'trainer'} onChange={(e) => setRole(e.target.value)}>Trainer</option>
                                                <option value={role = 'student'} onChange={(e) => setRole(e.target.value)}>Student</option>
                                            </select>



                                            {/* radio buttonss */}

                                            {/* <div className=' '>
                                                <div className="flex items-center mb-4">
                                                    <input checked={role === 'student'} onChange={(e) => setRole(e.target.value)} id="default-radio-1" type="radio" value="student" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                                                </div>
                                                <div className="flex items-center mb-4">
                                                    <input checked={role === 'trainer'} onChange={(e) => setRole(e.target.value)} id="default-radio-2" type="radio" value="trainer" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trainer</label>
                                                </div>
                                                <div className="flex items-center mb-4">
                                                    <input checked={role === 'admin'} onChange={(e) => setRole(e.target.value)} id="default-radio-3" type="radio" value="admin" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
                                                </div>
                                            </div> */}



                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
                {/* end here */}
            </form >
        </div >
    )
}

export default Signup;