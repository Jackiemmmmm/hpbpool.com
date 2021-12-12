import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/styles';
import MobileDetect from 'mobile-detect';
import { appWithTranslation } from 'next-i18next';
import React from 'react';
import { Authorization } from '~utils/env-config';
import withApollo from '~utils/with-apollo';
import theme from '../theme';

function App(props) {
  const { Component, pageProps, token, isMobile, renderingIsBrowser } = props;
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const appProps = { ...pageProps, isMobile, renderingIsBrowser };
  return (
    <ThemeProvider theme={theme}>
      <Component {...appProps} token={token} />
    </ThemeProvider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let token = null;
  if (ctx.req?.headers.cookie) {
    const decodedCookie = decodeURIComponent(ctx.req?.headers.cookie);
    const splitCookie = decodedCookie.split(';');
    const name = `${Authorization}=`;
    for (let i = 0; i < splitCookie.length; i += 1) {
      let cookieItem = splitCookie[i];
      while (cookieItem.charAt(0) === ' ') {
        cookieItem = cookieItem.substring(1);
      }
      if (cookieItem.indexOf(name) === 0) {
        token = cookieItem.substring(name.length, cookieItem.length);
      }
    }
  }

  let userAgent = ctx.req?.headers['user-agent'];
  if (process.browser) {
    userAgent = window?.navigator?.userAgent;
  }
  const userDevice = new MobileDetect(userAgent);

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    token,
    pageProps,
    isMobile: Boolean(userDevice.mobile()),
    renderingIsBrowser: Boolean(process.browser),
  };
};

export default withApollo(appWithTranslation(App));
