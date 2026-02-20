"use client";

import { useEmails } from "@/context/EmailsContext";
import SectionTitle from "../SectionTitle";
import { TemplateAccordionItem } from "./TemplateAccordionItem";
import { useState } from "react";

export default function TemplatesList(){
  const [templateOpened, setTemplateOpened] = useState<number | null>(null);

  const { emails } = useEmails();

  const onToggle = (id: number) => {
    setTemplateOpened((prev) => prev === id ? null : id);
  };

  const onContentChange = () => {};
  
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-shrink-0">
        <SectionTitle title="Templates" textContent="Click to expand and edit HTML"/>
      </div>
      <div className="flex flex-col mt-4 overflow-y-auto flex-1">
        {Object.entries(emails.templates).map(([emailId, template]) => (
          <TemplateAccordionItem
            key={emailId}
            id={Number(emailId)} 
            name={template.name}
            subject={template.subject}
            content={template.html}
            isOpen={templateOpened === Number(emailId)} 
            onToggle={onToggle} 
            onContentChange={onContentChange}
          />
        ))}    
      </div> 
    </div>
  );
}