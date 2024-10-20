import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

    const { speciallity } = useParams()
    const [filterDoc, setFilterDoc] = useState([])
    const navigate = useNavigate()

    const { doctors } = useContext(AppContext)


    const applyFilter = () => {
        if (speciallity) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciallity))
        } else {
            setFilterDoc(doctors)
        }
    }

    useEffect(() => {
        applyFilter()
    }, [doctors, speciallity])

    return (
        <div>
            <p className='text-gray-600 '>Browse through the doctors specialist.</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-4 text-sm text-gray-600'>
                    <p onClick={() => speciallity === 'General physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciallity === "General physician" ? "bg-indigo-100 text-black" : ""}`}  >General physician</p>
                    <p onClick={() => speciallity === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciallity === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}            >Gynecologist</p>
                    <p onClick={() => speciallity === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciallity === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}          >Dermatologist</p>
                    <p onClick={() => speciallity === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciallity === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}          >Pediatricians</p>
                    <p onClick={() => speciallity === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciallity === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}              >Neurologist</p>
                    <p onClick={() => speciallity === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciallity === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
                </div>
                <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                    {
                        filterDoc.map((item, index) => (
                            <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                                <img className='bg-blue-50' src={item.image} alt="" />
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                        <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
                                    </div>
                                    <p className='text-gray-900 text-lg font-medium '>{item.name}</p>
                                    <p className='text-gray-600 text-sme'>{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Doctors