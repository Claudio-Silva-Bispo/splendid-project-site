import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

        
import Navbar from '@/components/Navbar';
import Rodape from '@/components/Footer';
import Menu from '../components/Menu'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
      <PrimeReactProvider value={{ unstyled: true }}>
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        {!isDashboard && <Rodape />}
        <SpeedInsights />
      </PrimeReactProvider>

    </div>
  );
}

export default MyApp;
