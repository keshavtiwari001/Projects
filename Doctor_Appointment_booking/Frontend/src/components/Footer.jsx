import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* ------- Left Section -------------- */}
                <div className=''>
                    <img className='mb-5 w-40 ' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium esse, ea rerum ad eum veritatis voluptatum reprehenderit nisi eveniet, dolores perspiciatis iste? Corrupti voluptates placeat tempora consectetur voluptate itaque similique facilis nulla. A distinctio rem.</p>
                </div>

                {/* ------- Center Section -------------- */}
                <div >
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contace Us</li>
                        <li>Privay Policy</li>
                    </ul>
                </div>

                {/* ------- Right Section -------------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91-9898897856</li>
                        <li>keshavtiwari.dev@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* --------- Copywrite Text -------------------- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center '>
                    Copyright 2024@ Prescripto - All Right Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer