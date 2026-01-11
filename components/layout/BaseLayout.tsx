import { FC, ReactNode } from 'react';

import BaseHeader from './BaseHeader';
import Footer from './Footer';

const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Shared header */}
      <BaseHeader />

      {/* Page content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Shared footer */}
      <Footer />
    </>
  );
};

export default BaseLayout;
