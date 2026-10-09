import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex items-center justify-between gap-10 py-8 px-20">
      <div>
        <h1 className='font-bold'>GRACE</h1>
      </div>
      <div>
        <p className='text-sm text-slate-400 dark:text-slate-500'>© 2026 GRACE. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-2">
        <Image src="/instagram.png" alt="Instagram" width={20} height={20} />
        <Image src="/linkedin.png" alt="Linkedin" width={20} height={20} />
        <Image src="/github.png" alt="GitHub" width={20} height={20} /> 
      </div>
    </div>
  )
}
