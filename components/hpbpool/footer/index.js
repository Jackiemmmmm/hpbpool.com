import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import SvgHpbpoolIconDiscord from 'public/static/svg-components/HpbpoolIconDiscord';
import SvgHpbpoolIconExclude from 'public/static/svg-components/HpbpoolIconExclude';
import SvgHpbpoolIconGithub from 'public/static/svg-components/HpbpoolIconGithub';
import SvgHpbpoolIconHome from 'public/static/svg-components/HpbpoolIconHome';
import SvgHpbpoolIconTelegram from 'public/static/svg-components/HpbpoolIconTelegram';
import SvgHpbpoolIconTwitter from 'public/static/svg-components/HpbpoolIconTwitter';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: ({ isMobile }) => (isMobile ? '125px 0' : '78px 0'),
    width: '100%',
    backgroundColor: theme.colors.purple,
    flexDirection: 'column',
    ...theme.flex.center,
    '& button': {
      ...theme.flex.center,
    },
  },
  link: {
    margin: 0,
    listStyle: 'none',
    ...theme.flex.center,
    '& > *': {
      margin: ({ isMobile }) => (isMobile ? '0 25px' : '0px 12px'),
      '&:hover': {
        '& svg ': {
          '& path, & g': {
            opacity: '1',
          },
        },
      },
    },
    '& svg': {
      fontSize: ({ isMobile }) => (isMobile ? 50 : 24),
      '& > path, & > g': {
        transition: '0.3s',
        transform: ({ isMobile }) => (isMobile ? 'scale(2.08)' : 'scale(1)'),
      },
    },
  },
}));

function Footer({ isMobile }) {
  const classes = useStyles({ isMobile });
  return (
    <footer className={classes.footer}>
      <div className={classes.link}>
        <a href="https://www.hpb.io/" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconHome />
        </a>
        <a href="https://medium.com/hpb-foundation" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconExclude />
        </a>
        <a href="https://discord.gg/MxHE9HGm" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconDiscord />
        </a>
        <a href="https://t.me/hpbglobal" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconTelegram />
        </a>
        <a href="https://twitter.com/HPB_Global" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconTwitter />
        </a>
        <a href="https://github.com/hpb-project" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconGithub />
        </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Footer;
