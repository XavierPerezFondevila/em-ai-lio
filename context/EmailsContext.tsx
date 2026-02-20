// context/EmailsContext.tsx
import { emails as emailTemplates } from '@/lib/emails';
import { EmailTemplate } from '@/types/emailTypes';
import { createContext, useContext, ReactNode, useState } from 'react';

interface EmailsContextProps {
  emails: {
    header: { html: string };
    footer: { html: string };
    templates: Record<number, EmailTemplate>;
  };
  setEmails: React.Dispatch<React.SetStateAction<typeof emailTemplates>>;
}

const EmailsContext = createContext<EmailsContextProps | null>(null);

export function EmailsProvider({ children }: { children: ReactNode }) {
  const [emails, setEmails] = useState(emailTemplates);

  return (
    <EmailsContext.Provider value={{ emails, setEmails }}>
      {children}
    </EmailsContext.Provider>
  );
}

export function useEmails() {
  const context = useContext(EmailsContext);
  if (!context) {
    throw new Error('useEmails debe usarse dentro de un EmailsProvider');
  }
  return context;
}