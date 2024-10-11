import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewClass = () => {
    const [data, setData] = useState([]) // all
    const [view, setView] = useState([]) // single
    const [modelView, setModelView] = useState(false) // popup

    useEffect(() => {
        fetch()
    }, []);

    const token = localStorage.getItem('token')

    async function fetch() {
        const res = await axios.get('http://localhost:7001/class', { headers: { "Authorization": `Barier : ${token}` } })
        console.log("> res >>>", res)
        setData(res.data);
    }

    async function singleData(id) {
        console.log("id >> ", id);
        const res = await axios.get(`http://localhost:7001/class/${id}`, { headers: { "Authorization": `Barier : ${token}` } })
        setView(res.data);
        setModelView(true)
    }
    function modelClose() {
        setModelView(false)
    }

    return (
        <div>
            <h1>Class Details</h1>
            <div className='showDataDiv'>
                {(
                    data && data.map((cls, index) => (
                        <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                            <p>{cls.batchName}</p>
                            <p>{cls.timing}</p>
                            <p>{cls.duration}</p>
                            <p>{cls.subjects}</p>
                            <p>{cls.weekOff}</p>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => singleData(cls._id)} >More Details</button>

                        </div>


                    ))
                )}
            </div>

            {/* // popups */}
            {
                modelView && view && (
                    <div>
                        {/* pop up data */}

                        <div id="YOUR_ID" className="fixed z-50 inset-0 overflow-y-auto">
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                    <div className="absolute inset-0 bg-gray-500 opacity-75" />
                                </div>
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                    <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                        <button onClick={modelClose} type="button" data-behavior="cancel" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <span className="sr-only">Close</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                {/* Your Confirmation Message */}
                                                {/* <p>Name: {view.name}</p> */}
                                                {view.name}
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Batch: {view.batchName}
                                                    <br />
                                                    Timings: {view.timing}
                                                    <br />
                                                    Duration: {view.duration}
                                                    <br />
                                                    Subjects: {view.subjects}
                                                    <br />
                                                    Fee: {view.fee}
                                                    <br />
                                                    Week Off: {view.weekOff}
                                                    <br />
                                                    Total seats: {view.totalSeats}
                                                    <br />


                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button type="button" data-behavior="commit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                            Commit
                                        </button>
                                        <button type="button" data-behavior="cancel" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm">
                                            Cancel
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>



                    </div>
                )
            }


        </div>
    )
}

export default ViewClass