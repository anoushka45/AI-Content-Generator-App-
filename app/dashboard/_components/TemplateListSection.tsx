import React, { useEffect, useState } from 'react'
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

function TemplateListSection({ userSearchInp }: any) {
  const [templateList, setTemplateList] = useState(Templates); // Initial template list

  // Effect that triggers every time the search input changes
  useEffect(() => {
    if (userSearchInp) {
      // Filter Templates based on the search input
      const filterData = Templates.filter(item =>
        item.name.toLowerCase().includes(userSearchInp.toLowerCase()) // Case-insensitive matching
      );
      setTemplateList(filterData); // Update the template list
    } else {
      // If no input, show all templates
      setTemplateList(Templates);
    }
  }, [userSearchInp]); // Dependency on userSearchInp, triggers effect when it changes

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-5'>
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard {...item} key={index} /> // Render filtered templates
      ))}
    </div>
  );
}

export default TemplateListSection;
