'use client';

import { EmailsProvider } from '@/context/EmailsContext';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <EmailsProvider>
        {children}
      </EmailsProvider>
    </SessionProvider>
  );
}