import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='bgImage h-screen '>
            <div className='backdrop-blur text-white h-screen grid grid-cols-2 gap-4 items-center'>
                <div className='bg-white/25 backdrop-blur h-screen rounded-r-full flex justify-center items-center'>
                    <div className='p-10'>
                        <h1 className='text-5xl'>KAASH - LIGHT ENGINEERS</h1>
                        <p className='text-sm  mt-4'>A professional lighting consultancy for all things light and bright. Our human-centric lighting designs reflect our commitment to functionality as well as sustainability and are thoughtfully executed to help you create your dream space. </p>
                    </div>

                </div>
                <div>

                    <div>
                        <div className='flex items-center justify-center'>
                            <div className='w-36 h-36 p-5 flex justify-center items-center rounded-full bg-white/30 shadow-md shadow-orange-400 backdrop-blur '>
                                <p className='text-center'>10+ years of <br /> lighting</p>
                            </div>
                            <div className='w-10 border border-orange-500'></div>
                            <div className='w-36 h-36 p-5 flex justify-center items-center rounded-full bg-white/30 shadow-md shadow-orange-400 backdrop-blur '>
                                <p>80+ project</p>
                            </div>
                            <div className='w-10 border border-orange-500'></div>
                            <div className='w-36 h-36 p-5 flex justify-center items-center rounded-full bg-white/30 shadow-md shadow-orange-400 backdrop-blur '>
                                <p>7+ countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;