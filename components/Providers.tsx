'use client';

import { EmailsProvider } from '@/context/EmailsContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmailsProvider>
      {children}
    </EmailsProvider>
  );
}