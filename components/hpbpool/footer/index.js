import { makeStyles } from '@material-ui/styles';
import Tippy from '@tippyjs/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
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
  tippyRoot: {
    '&.tippy-box': {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.small,
      position: 'relative',
      boxShadow: theme.shadow.componentDark,
      '&& > .tippy-arrow': {
        color: theme.colors.white,
      },
      '& > .tippy-content': {
        padding: 0,
      },
    },
  },
  tippyItem: {
    margin: 0,
    padding: 10,
    cursor: 'pointer',
  },
}));

function Footer({ isMobile }) {
  const classes = useStyles({ isMobile });
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <footer className={classes.footer}>
      <div className={classes.link}>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconHome />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconExclude />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconDiscord />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconTelegram />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconTwitter />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <SvgHpbpoolIconGithub />
        </a>
      </div>
      <Tippy
        offset={[0, 4]}
        arrow={false}
        className={classes.tippyRoot}
        content={router.locales.map((item) => (
          <Link href={router.route} key={item} locale={item}>
            <p
              className={classes.tippyItem}
              style={{ color: item === router.locale ? 'blue' : 'black' }}
              key={item}
            >
              {t(`translation.${item}`)}
            </p>
          </Link>
        ))}
        interactive
        trigger="click"
        popperOptions={{
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                altAxis: true,
                padding: 8,
              },
            },
          ],
        }}
      >
        <button>Locale: {router.locale}</button>
      </Tippy>
    </footer>
  );
}

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Footer;
