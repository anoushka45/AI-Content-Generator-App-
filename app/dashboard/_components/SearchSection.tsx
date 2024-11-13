import { Search } from 'lucide-react'
import React from 'react'

function SearchSection() {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via bg-purple-700 to-blue-600
    flex flex-col justify-center items-center text-white 
    '>
      <h2 className='text-3xl text-white font-bold '>Browse All templates</h2>
      <p>What would you like to create today?</p>
      <div className='flex w-full justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
          <Search className='text-primary' />
          <input type="text" name="" id="" placeholder='Search...' 
          className='bg-transparent outline-none text-black font-semibold'
          />
        </div>
      </div>
    </div>
  )
}

export default SearchSection