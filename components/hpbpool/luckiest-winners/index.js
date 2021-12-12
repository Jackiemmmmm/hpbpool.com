import { makeStyles } from '@material-ui/styles';
import getConfig from 'next/config';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { HpbpoolLuckiestWinnersIcon } from '~svg-components';
import toThousands from '~utils/to-thousands';
import ScrollList from './scroll-list';

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme) => ({
  '@keyframes move1': {
    '0%': { transform: 'rotateY(0deg)' },
    '33%': { transform: 'rotateY(180deg)' },
    '66%': { transform: 'rotateY(0deg)' },
    '100%': { transform: 'rotateY(0deg)' },
  },
  '@keyframes move2': {
    '0%': { transform: 'rotateY(0deg)' },
    '22%': { transform: 'rotateY(-180deg)' },
    '44%': { transform: 'rotateY(0deg)' },
    '100%': { transform: 'rotateY(0deg)' },
  },
  '@keyframes move3': {
    '0%': { transform: 'rotateY(0deg)' },
    '40%': { transform: 'rotateY(180deg)' },
    '80%': { transform: 'rotateY(0deg)' },
    '100%': { transform: 'rotateY(0deg)' },
  },
  root: {
    padding: '120px 0',
    maxWidth: ({ isMobile }) => (isMobile ? 650 : 1100),
    margin: '0 auto',
  },
  header: {
    width: '100%',
    height: ({ isMobile }) => (isMobile ? 173 : 120),
    position: 'relative',
    backgroundImage: `url(${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/static/svgs/hpbpool-luckiest-winners.svg)`,
    overflow: 'hidden',
    ...theme.flex.center,
    '& h2': {
      color: theme.colors.yellow,
      ...theme.typography.h1,
      lineHeight: '42px',
      fontWeight: 'bold',
    },
    '& span': {
      display: 'inline-block',
      position: 'absolute',
      '& svg': {
        width: 26,
        height: 26,
      },
    },
  },
  headerIcon1: {
    top: -10,
    left: ({ isMobile }) => (isMobile ? 27 : 202),
    animation: '$move1 5s linear infinite',
    '& svg': {
      transform: ({ isMobile }) => (isMobile ? 'scale(1.384)' : 'scale(1.615)'),
    },
  },
  headerIcon2: {
    top: 10,
    right: ({ isMobile }) => (isMobile ? 53 : 234),
    animation: '$move2 5s linear infinite',
    '& svg': {
      transform: ({ isMobile }) => (isMobile ? 'scale(1.92)' : 'scale(0.923)'),
    },
  },
  headerIcon3: {
    bottom: -10,
    left: ({ isMobile }) => (isMobile ? 312 : 507),
    animation: '$move3 5s linear infinite',
    '& svg': {
      transform: ({ isMobile }) => (isMobile ? 'scale(3)' : 'scale(0.923)'),
    },
  },
  content: {
    marginTop: 4,
    padding: ({ isMobile }) => (isMobile ? '27px 0' : '24px 0 32px'),
    background: 'linear-gradient(178.9deg, #1B0068 -4.07%, #60009B 99.1%)',
  },
}));
function LuckiestWinners({ isMobile }) {
  const classes = useStyles({ isMobile });
  const { t } = useTranslation('common');
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <span className={classes.headerIcon1}>
          <HpbpoolLuckiestWinnersIcon />
        </span>
        <span className={classes.headerIcon2}>
          <HpbpoolLuckiestWinnersIcon />
        </span>
        <span className={classes.headerIcon3}>
          <HpbpoolLuckiestWinnersIcon />
        </span>
        <h2>{t('luckiest_winners')}</h2>
      </div>
      <div className={classes.content}>
        <ScrollList
          data={Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            contractId: `0xc12c0xc12c0xc12c${i + 1}`,
            money: toThousands(Math.random() * 10000, 0),
            canDeposit: toThousands(Math.random() * 1000, 0),
          }))}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

LuckiestWinners.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default LuckiestWinners;
