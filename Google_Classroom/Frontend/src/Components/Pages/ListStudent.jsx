import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const ListStudent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [qualification, setQualification] = useState("")
    const [fee, setFee] = useState("")
    const [gender, setGender] = useState("")
    const [batch, setbatch] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const data = { name, email, phone, address, qualification, fee, gender, batch }
        console.log("Form data >>", data)
        const res = await axios.post("http://localhost:7001/student", data);
        console.log("Response data >>", res)
        if (res.status === 200) {
            alert("Data submitted successfully : )")
        }


    }


    return (
        <div>

            <div className="mx-auto w-screen max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Student Form</h1>

                    <p className="mt-4 text-gray-500">
                        Fill all the details in the given inpur fields carefully ! Thanks to join us : )
                    </p>
                </div>

                <form action="#" onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-5xl space-y-4  flex flex-wrap justify-between" >

                    {/* name */}
                    <div className='w-1/2 '>
                        <label htmlFor="name" className="sr-only">Name</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg  border border-gray-200 my-4 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* email */}
                    <div className='w-1/2'>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* phone */}
                    <div className='w-1/2'>
                        <label htmlFor="phone" className="sr-only">Phone</label>

                        <div className="relative">
                            <input
                                type="number"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Contact no."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* address */}
                    <div className='w-1/2'>
                        <label htmlFor="address" className="sr-only">Address</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Current Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Qualification */}
                    <div className='w-1/2'>
                        <label htmlFor="qualification" className="sr-only">Qualification</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Highest Qualifications"
                                value={qualification}
                                onChange={(e) => setQualification(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Fee */}
                    <div className='w-1/2'>
                        <label htmlFor="fee" className="sr-only">Course Fee</label>

                        <div className="relative">
                            <input
                                type="number"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="amount of course"
                                value={fee}
                                onChange={(e) => setFee(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className='w-2/3'>
                        <label htmlFor="gender" className="sr-only">Gender</label>

                        <div className="relative">
                            {/* radio tailwind */}
                            <div class="main flex border rounded-full overflow-hidden m-2 select-none">
                                <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Gender</div>
                                <label class="flex radio p-2 cursor-pointer">
                                    <input checked={gender === "male"} onChange={(e) => setGender(e.target.value)} value="male" class="my-auto transform scale-125" type="radio" name="sfg" />
                                    <div class="title px-2">male</div>
                                </label>

                                <label class="flex radio p-2 cursor-pointer">
                                    <input checked={gender === "female"} onChange={(e) => setGender(e.target.value)} value="female" class="my-auto transform scale-125" type="radio" name="sfg" />
                                    <div class="title px-2">female</div>
                                </label>

                                <label class="flex radio p-2 cursor-pointer">
                                    <input checked={gender === "other"} onChange={(e) => setGender(e.target.value)} value="other" class="my-auto transform scale-125" type="radio" name="sfg" />
                                    <div class="title px-2">other</div>
                                </label>
                            </div>
                        </div>
                    </div>    {/* gender ends */}

                    {/* Batch */}
                    <div className='w-1/3'>
                        <label htmlFor="batch" className="sr-only">Batch</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Batch :"
                                value={batch}
                                onChange={(e) => setbatch(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="w-full py-5 flex items-center justify-center">

                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-10 py-3 mx-3 text-sm font-medium text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListStudent