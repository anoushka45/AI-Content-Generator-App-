"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  const [userSearchInp , setUserSearchInp] = useState<string>();
  return (
    <div>
      <SearchSection onSearchInput={(value:string)=>setUserSearchInp(value)} />
      <TemplateListSection userSearchInp = {userSearchInp} />
    </div>

  )
}

export default Dashboard