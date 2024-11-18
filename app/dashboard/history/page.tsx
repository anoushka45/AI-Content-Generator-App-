"use client";

import { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import { AiOutput } from '@/utils/schema';
import { eq, desc } from 'drizzle-orm'; 

import OutputSection from '../content/_components/OutputSection';// Import the OutputSection component

interface ChatHistory {
  id: number;
  formData: string;
  aiResponse: string | null;
  createdAt: string | null;
  templateSlug: string;
}

const History = () => {
  const { user } = useUser();
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) {
        setError('Unable to fetch user email.');
        setLoading(false);
        return;
      }

      try {
        const email = user.primaryEmailAddress.emailAddress;
        
        const result = await db
          .select()
          .from(AiOutput)
          .where(eq(AiOutput.createdBy, email))
          .orderBy(desc(AiOutput.createdAt));

        const transformedResult = result.map((chat) => ({
          ...chat,
          aiResponse: chat.aiResponse || "No response available",
          createdAt: chat.createdAt ? new Date(chat.createdAt).toISOString() : new Date().toISOString(),
        }));

        setChatHistory(transformedResult);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching chat history:', err);
        setError('Failed to load chat history.');
        setLoading(false);
      }
    };

    fetchChatHistory();
  }, [user]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  if (chatHistory.length === 0) {
    return <div className="text-center text-xl">No past chats found.</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Chat History</h1>
      <div className='bg-white'>
        <ul className="space-y-6">
          {chatHistory.map((chat) => (
            <li key={chat.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Template: {chat.templateSlug}</h2>
              <p className="text-gray-700"><strong>Form Data:</strong> {chat.formData}</p>
              <p className="text-gray-700"><strong>Created At:</strong> {chat.createdAt ? new Date(chat.createdAt).toLocaleString() : "No date available"}</p>
              
              {/* Display OutputSection here, passing aiResponse */}
              <OutputSection aiOutput={chat.aiResponse ?? undefined} />
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
