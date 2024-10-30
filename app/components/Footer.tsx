import React from 'react'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <footer className=' w-[640px]  md:w-auto mt-44 md:text-base'>
                <div className='mt-4'>
                    {/* <hr className='bg-black h-[2px]'/> */}
                    <hr className="border-t-2 border-[#01AECD]" />
                </div>
                {/* logo */}
                <div className='mt-5 text-3xl'>
                    <center>
                        <Link href={"/"}>
                            <h1 className='hover:text-[#01AECD] hover:scale-110 duration-300'>Sahil Yousaf</h1>
                        </Link>
                    </center>
                </div>
                {/* list */}
                <div>
                    <center>
                        <div className='mt-5'>
                            <ul className=' justify-center gap-10 items-center'>
                                <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'>
                                    <Link href={"/project"}>Project</Link>
                                </li>
                                <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'>
                                    <Link href={"/about"}>About</Link>
                                </li>
                                <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'>
                                    <Link href={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </center>
                </div>
                {/* icon */}
                <div>
                    <div>
                        <center>
                            <div className='mt-5'>
                                <ul className='flex justify-center gap-5 items-center'>
                                    <li className='rounded-full cursor-pointer  hover:scale-125 border-2 hover:border-[#01AECD]  border-black  p-3 duration-500 hover:text-[#01AECD] '>
                                        <Link href={"https://www.facebook.com/uni.moma"} target='black'><FacebookIcon />
                                        </Link>
                                    </li>
                                    <li className='rounded-full cursor-pointer  hover:scale-125 border-2 hover:border-[#01AECD]  border-black  p-3 duration-500 hover:text-[#01AECD]'>
                                        <Link href={"https://web.whatsapp.com/+923112813975"} target='black'><WhatsAppIcon />
                                        </Link>
                                    </li>
                                    <li className='rounded-full cursor-pointer  hover:scale-125 border-2 hover:border-[#01AECD]  border-black  p-3 duration-500 hover:text-[#01AECD]'>
                                        <Link href={"https://github.com/sahilyousaf2"} target='black'><GitHubIcon />
                                        </Link>
                                    </li>
                                    <li className='rounded-full cursor-pointer  hover:scale-125 border-2 hover:border-[#01AECD]  border-black  p-3 duration-500 hover:text-[#01AECD]'>
                                        <Link href={"https://www.linkedin.com/in/sahil-yousaf-02a0a52b5/"} target='black'><LinkedInIcon />
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </center>
                    </div>
                </div>

                <div className='text-sm p-[30px_0px]'>
                    <center>
                        @2024 Copyright Sahil Yousaf
                    </center>

                </div>
            </footer>
        </>
    )
}

export default Footer
