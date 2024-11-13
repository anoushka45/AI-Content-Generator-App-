"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput:any;
}

function FormSection({ selectedTemplate ,userFormInput }: PROPS) {

  
  const [formData, setFormData] = useState<any>({}); // Initialize form data state

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // Update form data when input changes
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    userFormInput(formData); // Fixed typo here, it should be preventDefault()
  }


  return (
    <div className='border rounded-lg p-5 shadow-lg bg-white'>
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} width={70} height={70} alt='icon' />
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.description}</p>
      <form action="" className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-bold' htmlFor="">{item.label}</label>
            {item.field === 'input' ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : item.field === 'textarea' ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}
        <Button type='submit' className='w-full py-6'>Generate Content!</Button>
      </form>
    </div>
  )
}

export default FormSection
