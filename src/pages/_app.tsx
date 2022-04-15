import { EmotionCache } from '@emotion/cache';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';

import { EmotionCacheProvider } from '@/lib/emotion';
import { PageComponent } from '@/types/next-page';
import { MainThemeProvider } from '~/theme/main-theme-provider';

import 'nprogress/nprogress.css';

// Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

//Binding events.
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());
nProgress.configure({ showSpinner: false });

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: PageComponent;
}

function MyApp({ Component, pageProps, emotionCache }: CustomAppProps) {
  return (
    <EmotionCacheProvider emotionCache={emotionCache}>
      <MainThemeProvider>
        <Component {...pageProps} />
      </MainThemeProvider>
    </EmotionCacheProvider>
  );
}

export default MyApp;
