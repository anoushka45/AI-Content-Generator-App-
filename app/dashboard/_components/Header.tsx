import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className='flex gap-2 p-2 border rounded-md max-w-lg bg-white'>
        <Search />
        <input className='outline-none ' type="text" name="" id="" placeholder='Search...' />
      </div>
      <div>
        <h2 className='bg-primary p-2 rounded-full text-xs font-semibold text-white px-2'> 🔥Membership only $9.99</h2>
      </div>
    </div>
  )
}

export default Header