import React from 'react'
import Slider from '../(component)/slider/Slider'
import Image from 'next/image'

export default function page() {
    return (
        <>
            <Slider />
            <div className='mx-4 md:mx-[7%] mb-[10%] text-sm'>

                <div>
                    <p className='text-lg md:text-xl'>Certification</p>
                    <div className='flex items-center'>
                        <p className='h-px w-12 md:w-16 bg-[#E55A0D]'></p>
                        <p className='h-px w-9 md:w-11 bg-[#E5E5E5]'></p>
                    </div>
                </div>
                <div className='text-sm md:text-base mt-10 '>
                    <p>Mr. Muhammad Ikram Sheikh (C.E.O)</p>
                    <p className='my-2'>E-Mail: <span className='text-[#FDD043] cursor-pointer'>chiefexecutive@aspentextile.com</span></p>
                    <p>Cell: +92</p>
                </div>

                <div className='text-sm md:text-base mt-6 md:mt-10'>
                    <p>Mr. Wasil Irfan Sheikh (Director)</p>
                    <p className='my-2'>E-Mail: <span className='text-[#FDD043] cursor-pointer'>export@aspentextile.com</span></p>
                    <p>Cell: +92 321 956 3636</p>
                </div>

                <div className='text-sm md:text-base mt-6 md:mt-10'>
                    <p>Mr. Imran Mehmood Sheikh (Director)</p>
                    <p>Cell: +92</p>
                </div>

                <div className='text-sm md:text-base mt-6 md:mt-10 border-b-2 border-[#00000081] pb-6 md:pb-[5%]'>
                    <p>ASPEN TEXTILE (Pvt) Ltd</p>
                    <p className='my-2'>Head Office: C-170 Ali Chowk, Dhuddi Wala, Jaranwala Road,</p>
                    <p>Faisalabad, Pakistan.</p>
                    <p className='my-2'>Tel: +92 41 8546136 , +92 41 8547136 , +92 418557290</p>
                    <p>Fax: +92 41 8737636</p>
                    <p className='my-2'>E-Mail: <span className='text-[#FDD043] cursor-pointer'>aspen@aspentextile.com</span></p>
                    <p>URL: www.aspentextile.com</p>
                </div>

                <div className='mt-6 md:mt-10'>
                    <p className='text-xl md:text-2xl'>Contact Us Form:</p>

                    <div className='mt-7 flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                        <label htmlFor="inputname" className="block text-[#FDD043] text-sm md:text-base">First Name: <span className='text-[#FE0000]'>*</span></label>
                        <input
                            type="text"
                            name="inputname"
                            className="mt-1 md:mt-0 block w-full md:w-72 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                    </div>

                    <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                        <label htmlFor="lastname" className="block text-[#FDD043] text-sm md:text-base">Last Name: <span className='text-[#FE0000]'>*</span></label>
                        <input
                            type="text"
                            name="lastname"
                            className="mt-1 md:mt-0 block w-full md:w-72 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                    </div>

                    <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                        <label htmlFor="companyname" className="block text-[#FDD043] text-sm md:text-base">Company Name: <span className='text-[#FE0000]'>*</span></label>
                        <input
                            type="text"
                            name="companyname"
                            className="mt-1 md:mt-0 block w-full md:w-72 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                    </div>

                    <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                        <label htmlFor="email" className="block text-[#FDD043] text-sm md:text-base">Email Address: <span className='text-[#FE0000]'>*</span></label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 md:mt-0 block w-full md:w-72 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                    </div>

                    <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                        <label htmlFor="countryname" className="block text-[#FDD043] text-sm md:text-base">Country Name: <span className='text-[#FE0000]'>*</span></label>
                        <input
                            type="text"
                            name="countryname"
                            className="mt-1 md:mt-0 block w-full md:w-72 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                    </div>

                    <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                        <label htmlFor="companyaddress" className="block text-[#FDD043] text-sm md:text-base">Company Address: <span className='text-[#FE0000]'>*</span></label>
                        <input
                            type="text"
                            name="companyaddress"
                            className="mt-1 md:mt-0 block w-full md:w-72 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                    </div>

                    <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                        <label htmlFor="message" className='block text-[#FDD043] text-sm md:text-base'>Message: <span className='text-[#FE0000]'>*</span></label>
                        <textarea id="message" name="message" rows="4" cols="50" className='mt-1 md:mt-0 block w-full md:w-72 h-32 p-2 outline-[#FDD043] ring-1 ring-inset ring-gray-400 focus:text-gray-800' />
                    </div>

                    <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] justify-between'>
                        <label htmlFor="securitycode" className='block text-[#FDD043] text-sm md:text-base'>Security Code: <span className='text-[#FE0000]'>*</span></label>
                        <div className="flex items-center mt-1 mr-[25%]">
                            <input
                                type="text"
                                name="securitycode"
                                className="block w-20 outline-[#FDD043] rounded-sm h-6 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />
                            <p className='h-6 px-2 bg-black text-white ml-2'>42149</p>
                        </div>
                    </div>

                    <button className='mt-4 md:mt-6 px-4 py-1 bg-gray-200 text-gray-600 hover:bg-gray-400 text-sm rounded-md ml-[25%]'>Submit</button>
                </div>
            </div>
        </>
    )
}
