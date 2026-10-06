import React from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between px-20 py-8 font-sans">
      <div>
        <h1 className='text-2xl font-arial'>GRACE</h1>
      </div>
      <div className="flex flex-row items-center justify-between gap-8">
        <div>
          <ul className="flex flex-row items-center justify-between gap-16">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
        </div>
        <div className="flex flex-row items-center">
          <Moon size={20} />
          {/* <Sun /> */}
        </div>
      </div>
    </div>
  )
}
