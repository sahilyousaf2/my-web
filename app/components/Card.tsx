import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CardProps } from '../types/type'
import Link from 'next/link'


const Card = (props:CardProps) => {
    return (
        <>
            <main>
                <div className='w-96 border shadow-md rounded-lg hover:scale-105 duration-300 hover:shadow-2xl '>
                    {/* image */}
                    <div>
                        <Image src={props.imageSrc} alt='Photo' width={400} height={0}  className='rounded-t-lg w--60'></Image>
                    </div>
                    {/* text */}
                    <div className='p-3 text-[13px]'>
                        <h1 className='text-xl font-semibold'>{props.heading}</h1>
                        <p className='text-gray-400 pt-2'>{props.discription}</p>
                    </div>
                    {/* btn */}
                    <div className='mb-5 ml-3 '>
                    <Button variant={'outline'}>
                        <Link href={props.linkURL} target='blank'>{props.btnText}</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Card
