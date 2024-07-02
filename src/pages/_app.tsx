import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

import Menu from '@/components/Menu';
import Rodape from '@/components/Rodape';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Menu />}
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      {!isDashboard && <Rodape />}
      <SpeedInsights />
    </div>
  );
}

export default MyApp;
