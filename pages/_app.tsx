import { PageComponent } from '@/types/next-page';
import { EmotionCacheProvider } from '@/lib/emotion';
import { MainThemeProvider } from '~/theme/main-theme-provider';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';

import { EmotionCache } from '@emotion/cache';
import type { AppProps } from 'next/app';

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
