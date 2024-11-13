import React from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'
export interface TEMPLATE {
  name: string,
  description: string,
  icon: string,
  category: string,
  aiPrompt: string,
  slug: string,
  form?: FORM[],
}
export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean
}
function TemplateListSection() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-5'>
      {Templates.map((item: TEMPLATE, index: number) => (
       
          <TemplateCard {...item} key={index} />
      
      ))}
    </div>
  )
}

export default TemplateListSection