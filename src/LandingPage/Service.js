import React from 'react';

const Service = () => {
    return (
        <div className='bgImage3'>
            <div className='container mx-auto'>
                <div className='text-center pt-14'>
                    <h1 className='text-5xl font-bold capitalize text-white'>Services customized to your need</h1>
                    <p className='my-3 text-xl font-bold text-orange-500'>Light + Sustainability + Technology</p>
                </div>
                <div className='grid grid-cols-3 gap-10 py-14'>
                    <div className='h-[400px] backdrop-blur bg-white/20 p-5 rounded-lg shadow-lg shadow-orange-300 flex justify-center items-center'>
                        <div className='grid grid-rows-2'>
                            <div>
                                <img className='w-24 rounded-full mx-auto' src="https://www.glamox.com/globalassets/pbs/human-centric-lighting/light-and-human-biology-05.jpg?width=480&height=480&focalpoint=(0,0,0,0),(0.5,0.5,1,1)&format=jpg" alt="" />
                                <h2 className=' text-2xl font-bold text-white py-2 text-center'>HUMAN-CENTRIC LIGHTING</h2>
                            </div>
                            <div>

                                <p className='text-black font-bold my-3 text-sm text-center'>Designing with light for people, their space and its architecture</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[400px] backdrop-blur bg-white/20 p-5 rounded-lg shadow-lg shadow-orange-300 flex justify-center items-center '>
                        <div className='grid grid-rows-2'>
                            <div>
                                <img className='w-24 rounded-full mx-auto bg-white' src="https://velcdn.azureedge.net/-/media/marketing/sustainability/icons/14-share-sustainable-innovations.svg" alt="" />
                                <h2 className=' text-2xl font-bold text-white py-2 text-center'>SUSTAINABILITY</h2>
                            </div>
                            <div className='text-center'>

                                <p className='text-black font-bold my-3 text-sm'>Reducing LIGHT CARBON of cities and buildings with our sustainable solutions to create a healthier planet and its ecosystem.</p>
                                <p className='font-bold hover:text-white cursor-pointer'>Know your green potential</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-[400px] backdrop-blur bg-white/20 p-5 rounded-lg shadow-lg shadow-orange-300  flex justify-center items-center'>
                        <div className='grid grid-rows-2'>
                            <div>
                                <img className='w-24 rounded-full mx-auto' src="https://static.vecteezy.com/system/resources/previews/005/893/682/original/technology-innovation-line-icon-creativity-solution-concept-light-bulb-and-gear-linear-pictogram-lightbulb-and-cog-wheel-outline-icon-isolated-illustration-vector.jpg" alt="" />
                                <h2 className=' text-2xl font-bold text-white py-2 text-center'>TECHNOLOGY</h2>
                            </div>
                            <div className='text-center'>

                                <p className='text-black font-bold my-3 text-sm'>Maximising potential of  LIGHT TECHNOLOGY with inclusive designs to build future proof smart infrastructure.</p>
                                <p className='font-bold hover:text-white cursor-pointer'>Explore your solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;