import React from 'react'


export default function Contact() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col min-h-screen gap-10 my-20 mx-auto max-w-3xl">
        <div className="flex flex-col gap-4 items-center">
        <h1>Get In Touch</h1>
        <p>Let's Connect, Let's Create - Reach Out and Ignite Possibilities!</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-2'>
        <div className="border-2 border-slate-400 rounded-xl py-4 px-8">
          <form action="/submit-contact-form" method="POST">
            <div className="flex flex-col gap-4">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required className="font-medium border rounded p-2"/>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required className="font-medium border rounded p-2"/>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="font-medium border rounded p-2" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 my-4 rounded hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
        <div className="border-2 border-slate-400 rounded-xl p-4">
          <h2>Chatbot</h2>
          <p>Ask me anything!</p>
        </div>
      </div>
      </div>
    </div>
  )
}
