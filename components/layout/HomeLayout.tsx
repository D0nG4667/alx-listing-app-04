import { FC, ReactNode } from 'react';

import HomeHeader from './HomeHeader';
import BaseLayout from './BaseLayout';

const HomeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BaseLayout>
      {/* Page-specific header */}
      <HomeHeader />

      {/* Page content */}
      <main className="min-h-screen">{children}</main>

      {/* Page-specific footer */}
    </BaseLayout>
  );
};

export default HomeLayout;
