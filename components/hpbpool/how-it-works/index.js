import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { HpbpoolHowItWork } from '~svg-components';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.purple,
    padding: ({ isMobile }) => (isMobile ? '200px 0' : '120px 0'),
    '& > div': {
      maxWidth: ({ isMobile }) => (isMobile ? 650 : 1010),
      margin: '0 auto',
      flexDirection: ({ isMobile }) => (isMobile ? 'column' : 'row'),
      ...theme.flex.mainSpaceBetween,
      alignItems: ({ isMobile }) => (isMobile ? 'center' : 'flex-start'),
    },
    '& ol': {
      listStyleType: 'decimal',
    },
  },
  contentLeft: {
    width: 400,
    height: 255,
    transform: ({ isMobile }) => (isMobile ? 'scale(1.625)' : 'scale(1)'),
    margin: ({ isMobile }) => (isMobile ? '120px 0 133px' : 0),
  },

  h3: {
    ...theme.typography.h3,
    fontSize: ({ isMobile }) => (isMobile ? 36 : 24),
    color: theme.colors.yellow,
    margin: ({ isMobile }) => (isMobile ? 0 : '33px 0 0'),
    width: ({ isMobile }) => (isMobile ? '100%' : 'auto'),
  },
  contentRight: {
    '& ol': {
      '& li': {
        marginBottom: ({ isMobile }) => (isMobile ? 51 : 10),
        ...theme.typography.bodyLarge,
        color: theme.colors.white,
        fontSize: ({ isMobile }) => (isMobile ? 36 : 19),
        '&::marker': {
          fontSize: 38,
          fontWeight: 'bold',
          lineHeight: '44px',
        },
        '& span': { position: 'relative', top: ({ isMobile }) => (isMobile ? 0 : -6) },
        '&:last-child': { marginBottom: 0 },
      },
    },
  },
}));

function HowItWorks({ isMobile }) {
  const classes = useStyles({ isMobile });
  const { t } = useTranslation('common');
  return (
    <div className={classes.root}>
      <div>
        {isMobile && <h3 className={classes.h3}>{t('how_it_work')}</h3>}
        <HpbpoolHowItWork className={classes.contentLeft} />
        <div className={classes.contentRight}>
          {!isMobile && <h3 className={classes.h3}>{t('how_it_work')}</h3>}
          <ol>
            <li>
              <span>{t('step_1')}</span>
            </li>
            <li>
              <span>{t('step_2')}</span>
            </li>
            <li>
              <span>{t('step_3')}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

HowItWorks.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default HowItWorks;
