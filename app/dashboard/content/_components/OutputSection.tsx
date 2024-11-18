"use client"
import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import React, { useEffect, useRef } from 'react'

interface props{
  aiOutput?:string;
}
function OutputSection({aiOutput}:props) {
  const editorRef:any = useRef();
  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])
  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-bold text-primary text-lg '>Your Result!</h2>
        <Button className='flex gap-2'>
          <Copy className='w-4 h-4' />Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown)}
        initialValue="Your result will appear here"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>

  )
}

export default OutputSection