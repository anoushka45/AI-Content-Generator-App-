"use client";
import React, { useState } from 'react';
import FormSection from '../_components/FormSection';  // Importing the form section
import OutputSection from '../_components/OutputSection';  // Importing the section where content is displayed
import { TEMPLATE } from '../../_components/TemplateListSection';  // Importing template types
import Templates from '@/app/(data)/Templates';  // Importing the list of templates
import { Button } from '@/components/ui/button';  // Button component for UI
import { ArrowLeft } from 'lucide-react';  // Icon for "Back"
import Link from 'next/link';  // Link for navigation
import { chatSession } from '@/utils/AiModal';
import { AiOutput } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
interface PROPS {
  params: {
    'template-slug': string;  // URL param for selecting a template
  };
}

function CreateNewContent({ params }: PROPS) {
  // Step 1: Find the selected template based on the 'template-slug' from the URL
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params['template-slug']  // Finding the matching template
  );
  
  const [loading,setLoading] = useState(false);
  const [aiOutput, setAiOutput]= useState<string>()
  const {user} = useUser();
  // Step 2: Function to handle form submission, used in the child component
  const GenerateAIcontent = async (formData: any) => {
    try {
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(formData) + "," + SelectedPrompt;
  
      // Send message to AI
      const result = await chatSession.sendMessage(FinalAIPrompt);
  
      // Ensure you're extracting the actual text from the response
      const aiResponse = result?.response.text || "";  // This should be the actual content
  
      // If you need any post-processing or formatting on the response, do it here
      const displayedOutput = aiResponse;  // This is the content that will be shown to the user
  
      console.log(aiResponse);
      setAiOutput(aiResponse);
  
      // Save in DB with both aiResponse and displayedOutput
      await saveInDb(formData, selectedTemplate?.slug, aiResponse, displayedOutput);
  
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error in GenerateAIcontent:", error);
    }
  };
  
  
  const saveInDb = async (
    formData: any,
    slug: string | undefined,
    aiResponse: string,
    displayedOutput: string // New parameter for the displayed output
  ) => {
    if (!slug) {
      throw new Error("Template slug is required.");
    }
  
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("User email not found.");
      return;
    }
  
    const result = await db.insert(AiOutput).values({
      formData: JSON.stringify(formData), // Convert object to string
      templateSlug: slug,
      aiResponse,
      displayedOutput, // Save the actual output displayed to the user
      createdBy: user.primaryEmailAddress.emailAddress, // Fetch email dynamically
      createdAt: new Date().toISOString(), // Current timestamp
    });
  
    console.log("Data saved in DB:", result);
  };
  
  
  
  return (
    <div className='p-10'>
      {/* Back button to go to the dashboard */}
      <Link href='/dashboard'>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
        {/* Step 3: Pass the selected template and the GenerateAIcontent function to FormSection */}
        <FormSection loading={loading} selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIcontent(v)} />
        
        {/* Output section where the generated content will be displayed */}
        <div className='col-span-2'>
          <OutputSection aiOutput = {aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
