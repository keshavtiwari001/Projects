import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const ListClass = () => {
    const [batchName, setBatchName] = useState("")
    const [timing, setTiming] = useState("")
    const [duration, setDuration] = useState("")
    const [subjects, setSubjects] = useState("")
    const [fee, setFee] = useState("")
    const [weekOff, setWeekOff] = useState("")
    const [totalSeats, setTotalSeats] = useState("")


    async function handleSubmit(e) {
        e.preventDefault()
        const data = {
            batchName, timing,
            duration,
            subjects,
            fee,
            weekOff,
            totalSeats
        }
        const response = await axios("")


    }


    return (
        <div>

            <div className="mx-auto w-screen max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Create Class</h1>

                    <p className="mt-4 text-gray-500">
                        Fill all the details in the given inpur fields carefully ! Thanks to join us : )
                    </p>
                </div>

                <form action="#" onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-5xl space-y-4  flex flex-wrap justify-between" >

                    {/* batchName */}
                    <div className='w-1/2 '>
                        <label htmlFor="batchName" className="sr-only">Batch Name</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border  border-gray-200 my-4 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Batch Name"
                                value={batchName}
                                onChange={(e) => setBatchName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* timing */}
                    <div className='w-1/2'>
                        <label htmlFor="email" className="sr-only">Timing</label>

                        <div className="relative">
                            <input
                                type="time"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                value={timing}
                                onChange={(e) => setTiming(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* duration */}
                    <div className='w-1/2'>
                        <label htmlFor="duration" className="sr-only">Duration</label>

                        <div className="relative">
                            <input
                                type="number"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="duration"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* subjects */}
                    <div className='w-1/2'>
                        <label htmlFor="subjects" className="sr-only">Subjects</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="subjects"
                                value={subjects}
                                onChange={(e) => setSubjects(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* fee */}
                    <div className='w-1/2'>
                        <label htmlFor="qualification" className="sr-only">Fee</label>

                        <div className="relative">
                            <input
                                type="number"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="total fee"
                                value={fee}
                                onChange={(e) => setFee(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* weekOff */}
                    <div className='w-2/3'>
                        <label htmlFor="weekOff" className="sr-only">Week Off</label>

                        <div className="relative">
                            {/* checkbox tailwind */}
                            <div class="main flex border rounded-full overflow-hidden m-2 select-none">
                                <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Week Off</div>
                                <label class="flex radio p-2 cursor-pointer">
                                    <input class="my-auto transform scale-125" type="checkbox" name="sfg" />
                                    <div class="title px-2">Sunday </div>
                                </label>

                                <label class="flex radio p-2 cursor-pointer">
                                    <input class="my-auto transform scale-125" type="checkbox" name="sfg" />
                                    <div class="title px-2">Saturday</div>
                                </label>

                            </div>
                        </div>
                    </div>    {/* gender ends */}


                    {/* totalSeats */}
                    <div className='w-1/4 ml-2'>
                        <label htmlFor="totalSeats" className="sr-only">Total Seats</label>

                        <div className="relative">
                            <input
                                type="number    "
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="total seats"
                                value={totalSeats}
                                onChange={(e) => setTotalSeats(e.target.value)}
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

export default ListClass