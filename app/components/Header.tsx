'use client'
import React from 'react'
import Link from 'next/link'
// import Button from './Button'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const route = useRouter()
  return (
    <>
      <header className='mt-3 backdrop-blur sticky top-0'>
        <nav className="w-[640px] mx-auto md:w-[1170px]">
          <div className="main flex justify-between items-center h-14 ">
            <div className="logo">
              <Link href={"/"}><h1 className='md:text-3xl hover:scale-110 duration-300 hover:text-[#01AECD] font-bold ml-5 md:pl-0 text-xl'>Sahil Yousaf</h1></Link>
            </div>
            {/* list */}
            <div className="space-x-4 hidden md:flex">
              <ul className='flex gap-7 items-center ml-[650px]'>
                <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'><Link href={"/"}>Home</Link></li>
                <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'><Link href={"/project"}>Project</Link></li>
                <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'><Link href={"/about"}>About</Link></li>
              </ul>
            </div>
            <div className='flex items-center'>
              <Button onClick={() => {
                route.push("/contact")
              }} className='hover:scale-110 duration-300 mx-1 hover:text-[#01AECD]' size={"sm"} variant="outline">Contact</Button>
              <div>
                <div className='md:hidden mr-12'>
                  <Sheet>
                    <SheetTrigger>
                      <svg className='w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'></path>
                      </svg>

                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle className='font-bold'>Sahil Yousaf</SheetTitle> 
                        <SheetDescription>
                          <div className="">
                            <ul className='flex flex-col gap-5 items-center'>
                              <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'><Link href={"/"}>Home</Link></li>
                              <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'><Link href={"/project"}>Project</Link></li>
                              <li className='hover:scale-110 duration-300 hover:text-[#01AECD]'><Link href={"/about"}>About</Link></li>
                            </ul>
                          </div>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>

                </div>
              </div>
            </div>
          </div>

        </nav>
      </header>
    </>
  )
}

export default Header





