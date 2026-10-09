import React from 'react'

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
                <div className="w-6 h-6 rounded-md cursor-pointer dark:bg-slate-600 bg-slate-900" />
                <div className="w-6 h-6 rounded-md cursor-pointer dark:bg-slate-600 bg-slate-900" />
                <div className="w-6 h-6 rounded-md cursor-pointer dark:bg-slate-600 bg-slate-900" />
              </div>
    </div>
  )
}
