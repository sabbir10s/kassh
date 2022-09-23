import React from 'react';

const Service = () => {
    return (
        <div className='bg-white '>
            <div className='backdrop-blur bg-white/20 py-20'>
                <div className='container mx-auto'>
                    <div className='text-center'>
                        <h1 className='text-orange-500 text-5xl font-bold capitalize'>Services customized to your need</h1>
                        <p className='my-3 text-xl font-bold'>Light + Sustainability + Technology</p>
                    </div>
                    <div className='pt-10 '>
                        <div className='grid grid-cols-2 items-center  bgImage2'>
                            <div></div>
                            <div className='backdrop-blur bg-white/50 h-full text-center py-48'>
                                <h2 className='text-4xl font-bold text-orange-500'>HUMAN-CENTRIC LIGHTING</h2>
                                <p className='font-bold text-xl my-3'>Designing with light for people, their space and its architecture</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-10'>
                            <div className='flex justify-center items-center h-[500px] bgImage3 '>
                                <div className='backdrop-blur bg-white/50 mx-10 py-24 px-4'>
                                    <h2 className=' text-4xl font-bold text-orange-500'>SUSTAINABILITY</h2>
                                    <p className='text-black font-bold my-3'>Reducing LIGHT CARBON of cities and buildings with our sustainable solutions to create a healthier planet and its ecosystem.</p>
                                    <p>Know your green potential</p>
                                </div>
                            </div>

                            <div className='flex justify-center items-center h-[500px] bgImage4'>
                                <div className='backdrop-blur bg-white/50 mx-10 py-24 px-4'>
                                    <h2 className=' text-4xl font-bold text-orange-500'>TECHNOLOGY</h2>
                                    <p className='text-black font-bold my-3'>Maximising potential of  LIGHT TECHNOLOGY with inclusive designs to build future proof smart infrastructure.</p>
                                    <p>Explore your solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;