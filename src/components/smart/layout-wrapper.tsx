import { Provider } from 'jotai';
import { ThemeProvider } from 'next-themes';

import { SiteFooter } from '@/components/molecules/site-footer';
import { SiteHeader } from '@/components/molecules/site-header';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute='class'>
      <Provider>
        <SiteHeader />
        <main>
          <section className='container'>
            {children}
          </section>
          <Toaster />
        </main>
        <SiteFooter />
      </Provider>
    </ThemeProvider>
  );
}
