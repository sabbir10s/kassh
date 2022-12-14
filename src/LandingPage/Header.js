import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import useResizeObserver from "use-resize-observer";
import './Header.css'
const images = [
    { url: "https://michaelhelm.com/wp-content/uploads/2017/12/Michael-Helm-lighting-desig.jpg" },
    { url: "https://i.ibb.co/HzXkb6M/10.jpg" },
    { url: "https://i.ibb.co/7YfxVfH/best-lights.jpg" },
];
const Header = () => {
    const { ref, width = 1, height = 1 } = useResizeObserver();
    return (
        <div className=' '>
            <div className='flex justify-center items-center bg-black'>
                <div ref={ref} className="relative bg-black" style={{ width: "100vw", height: "100vh" }} >

                    <SimpleImageSlider
                        bgColor='#0000'
                        width={width}
                        height={height}
                        images={images}
                        showBullets={false}
                        showNavs={false}
                        autoPlay={true}
                    />
                </div>
            </div>
            <div className=' absolute top-0 flex items-center justify-cent h-[100vh] '>
                <div className='grid lg:grid-cols-2 justify-center items-center gap-10 mx-5 '>
                    <div className='bg-white/50 backdrop-blur h-[300px] w-full flex justify-center items-center px-5 rounded-[30px]'>
                        <div>
                            <h1 className='text-xl md:text-4xl font-bold'>KAASH - LIGHT ENGINEERS</h1>
                            <p className='pt-3 text-sm lg:text-lg'>Light defines spatial experience, as it falls and reflects. As design consultants, Kaash - light engineers aims to elevate this experience with sustainable and human-centric light planning.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <div className='w-24 md:w-36 h-24 md:h-36 p-5 flex justify-center items-center rounded-full bg-white/60 shadow-md shadow-orange-400 backdrop-blur '>
                            <p className='text-center'>10+ years of <br /> lighting</p>
                        </div>
                        <div className='w-1 md:w-10 border border-orange-500'></div>
                        <div className='w-24 md:w-36 h-24 md:h-36 p-5 flex justify-center items-center rounded-full bg-white/60 shadow-md shadow-orange-400 backdrop-blur '>
                            <p className='text-sm text-center'>80+ project</p>
                        </div>
                        <div className='w-1 md:w-10 border border-orange-500'></div>
                        <div className='w-24 md:w-36 h-24 md:h-36 p-5 flex justify-center items-center rounded-full bg-white/60 shadow-md shadow-orange-400 backdrop-blur '>
                            <p className='text-sm text-center'>7+ countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;