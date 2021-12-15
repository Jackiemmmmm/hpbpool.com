import MobileDetect from 'mobile-detect';
// import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import React from 'react';
import Banner from '~components/hpbpool/banner';
import Footer from '~components/hpbpool/footer';
import Header from '~components/hpbpool/header';
import HowItWorks from '~components/hpbpool/how-it-works';
// import LuckiestWinners from '~components/hpbpool/luckiest-winners';

// const useStyles = makeStyles((theme) => ({}));

function PartnerLandingPage() {
  // const classes = useStyles();

  let userAgent = typeof window !== 'undefined' ? window?.navigator?.userAgent : '';
  const userDevice = new MobileDetect(userAgent);
  const isMobile = Boolean(userDevice.mobile());

  return (
    <div style={{ backgroundColor: '#2f1957' }}>
      <Head>
        <meta content="width=device-width, initial-scale=0.5" name="viewport" />
      </Head>
      <Header isMobile={isMobile} />
      <Banner isMobile={isMobile} />
      <HowItWorks isMobile={isMobile} />
      {/* <LuckiestWinners isMobile={isMobile} /> */}
      <Footer isMobile={isMobile} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

PartnerLandingPage.propTypes = { isMobile: PropTypes.bool.isRequired };

export default PartnerLandingPage;
