import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-[#1d1d1f] pt-10'>
            <h1 className='text-orange-500 text-center text-3xl lg:text-5xl font-bold'>Light on your mind ? </h1>
            <p className='text-center text-white pt-3'>Let's talk for a hassle free lighting design and product selection experience.</p>
            <div className='grid lg:grid-cols-2 gap-2 my-5 py-5 px-2'>
                <div className='flex justify-center items-center pt-10'>
                    <form>
                        <div>
                            <p className='pb-8 text-white text-3xl'>Book a free light session</p>
                            <div className='flex flex-col gap-2 pb-5'>
                                <label className="label" htmlFor='name' >
                                    <span className="text-base-100 text-white pr-5">Name</span>
                                </label>
                                <input id='name' type="text" name='name' placeholder="Name" required autoComplete='off' className="w-full border border-primary p-[10px] rounded-md focus:outline-orange-300" />
                            </div>
                            <div className='flex gap-3'>
                                <div className='flex flex-col gap-2 pb-5'>
                                    <label className="label" htmlFor='email' >
                                        <span className="text-base-100 text-white pr-5">Email</span>
                                    </label>
                                    <input id='email' type="email" name='email' placeholder="Email" required autoComplete='off' className="w-full border border-primary p-[10px] rounded-md focus:outline-orange-300" />
                                </div>
                                <div className='flex flex-col gap-2 pb-5'>
                                    <label className="label" htmlFor='phone' >
                                        <span className="text-base-100 text-white pr-5">Phone</span>
                                    </label>
                                    <input id='phone' type="number" name='phone' placeholder="Phone" required autoComplete='off' className="w-full border border-primary p-[10px] rounded-md focus:outline-orange-300" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 pb-5'>
                                <label className="label" htmlFor='message' >
                                    <span className="text-base-100 text-white pr-5">Message</span>
                                </label>
                                <textarea name="message" id="message" cols="30" rows="3" placeholder='Message' className="w-full border border-primary p-[10px] rounded-md focus:outline-orange-300"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center items-center pt-10 text-white'>
                    <div>
                        <p className='text-3xl pb-8'>Ping to talk</p>
                        <p>+352 691 566 820</p>
                        <p>moien@kaash.eu</p>
                        <p>41a rue des Romains, 8041 Luxembourg</p>
                        <div className='text-orange-500 text-4xl flex justify-start gap-4 mt-2'>
                            <a href="https://www.instagram.com/kaash.eu/"><AiFillInstagram /></a>
                            <a href="https://www.linkedin.com/company/kaash/"><AiFillLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center bg-orange-500'>
                <img className='w-[120px]' src="https://www.kaash.eu/gallery_gen/b6ea7dd686fa817743d40b1b36475f5f_600x188.png" alt="" />
                <img className='w-[120px]' src="https://www.kaash.eu/gallery_gen/d1f037cce542c04dbc9a078a7e8c3d31_600x147_0x32_600x232.png" alt="" />
            </div>
            <p className='text-sm text-center text-gray-400 mt-2 py-2'>An immersive audiovisual installation created by Cocolab. Commissioned by ARCA, presenting at TagCDMX 2016 Music and sound by Before tigers</p>
        </div>
    );
};

export default Footer;