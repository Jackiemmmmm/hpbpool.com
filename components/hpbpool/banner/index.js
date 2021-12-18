import { makeStyles } from '@material-ui/styles';
import getConfig from 'next/config';
import { Trans, useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import DynamicImage from '~components/image';
const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: ({ isMobile }) => (isMobile ? 200 : 140),
    paddingBottom: ({ isMobile }) => (isMobile ? 200 : 120),
    maxWidth: ({ isMobile }) => (isMobile ? 585 : 970),
    margin: '0 auto',
    flexDirection: 'column',
    ...theme.flex.center,
  },
  logo: {
    width: 300,
    marginBottom: 32,
  },
  h1: {
    ...theme.typography.h1,
    textAlign: 'center',
    margin: 0,
    color: theme.colors.white,
    fontWeight: 400,
  },
}));

function Banner({ isMobile }) {
  const classes = useStyles({ isMobile });
  const { t } = useTranslation('common');
  return (
    <div className={classes.root}>
      <DynamicImage
        className={classes.logo}
        src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/hpb_pool_logo.png`}
        placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/hpb_pool_logo.png`}
      />
      <h1 className={classes.h1}>{t('description')}</h1>
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
