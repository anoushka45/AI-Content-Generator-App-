"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput:any;
  loading:boolean;
}

function FormSection({ selectedTemplate ,userFormInput ,loading }: PROPS) {

  
  const [formData, setFormData] = useState<any>({}); // Initialize form data state

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // { ...formData } is used to spread the current values of formData into a new object.
   // [name]: value updates the key in the formData object corresponding to the name of the input field, setting it to the new value the user typed.
   // This way, the state is updated with the new input value while keeping the other form data unchanged.
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData); 
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
        <Button type='submit' className='w-full py-6' disabled={loading}> {loading&&<Loader2Icon className='animate-spin'/>} Generate Content!</Button>
      </form>
    </div>
  )
}

export default FormSection
