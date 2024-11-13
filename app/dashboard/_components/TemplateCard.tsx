import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
function TemplateCard(item:TEMPLATE) {
  return (
    <div className='p-5 shadow-md rounded-md border bg-white flex gap-3 flex-col font-semibold  cursor-pointer
    hover:scale-105 transition-all
    '>
      <Image src={item.icon} alt='icon' width={50} height={50}/>
      <h2 className='font-medium text-lg '>{item.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{item.description}</p>
    </div>
  )
}

export default TemplateCard