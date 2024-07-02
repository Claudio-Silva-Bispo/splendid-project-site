import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import '../globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

import Menu from '@/components/Menu';
import Rodape from '@/components/Rodape';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {


  return (
   
          <div className="flex">
          
            <main className="flex-1">
              <Menu/>
              <Component {...pageProps} />
              <Rodape/>
              <SpeedInsights/>
            </main>
          </div>
      
  );
}

export default MyApp;
