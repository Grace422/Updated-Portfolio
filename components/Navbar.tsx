import React from 'react'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between px-20 py-8 font-sans text-white bg-[#db4c1a] ">
      <div>
        <h1 className='text-2xl font-arial'>GRACE</h1>
      </div>
      <div className="flex flex-row items-center justify-between gap-8">
        <div className="flex flex-row items-center justify-between gap-16">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact Me</Link>
        </div>
        <div className="flex flex-row items-center">
          <Moon size={20} />
          {/* <Sun /> */}
        </div>
      </div>
    </div>
  )
}
