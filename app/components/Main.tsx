'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Main = () => {
    const route = useRouter()
    return (
        <>
            <main className="md:w-[1170px] mx-auto md:mt-48 w-[640px] mt-16">
                <div className="grid md:grid-cols-[60%_40%] gap-10 grid-flow-row ">
                    {/* text div */}
                    <div className='mx-5 md:mx-10'>
                        {/* heading */}
                        <div className="heading leading-snug text-4xl mb-5  ">
                            <h1>Hello I'am <span className='font-semibold hover:text-[#01AECD] cursor-pointer'>Sahil Yousaf <br /></span> Frontend Developer.
                                </h1>
                        </div>
                        <div className="para">
                            <p>I Frontend Developer | ❇️ 1+ year of Tech Experience | ✨ Building products with HTML, CSS, Typescript and CLI Application | 🌱 Contributing open-source | 🤖 Learning Cloud Native Applied Generative AI | I'm students on-site at GIAIC.</p>
                        </div>
                        <div className="btn mt-5" >
                            <Button className='hover:scale-110 duration-300 hover:text-[#01AECD]' onClick={() => { route.push("/contact") }} variant={'outline'}>Contact</Button>
                        </div>
                    </div>
                    {/* image div */}
                    <div className=''>
                        <Image className='mx-auto rounded-md hover:scale-105 duration-300 hover:shadow-2xl' src={"/men.jpg"} height={100} width={300} alt='men'></Image>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Main
