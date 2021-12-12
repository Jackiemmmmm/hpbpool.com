import { makeStyles } from '@material-ui/styles';
import Tippy from '@tippyjs/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: 100,
    borderTop: '1px solid #eaeaea',
    ...theme.flex.center,
    '& button': {
      ...theme.flex.center,
    },
  },
  logo: {
    height: '1em',
    marginLeft: '0.5rem',
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

function Footer() {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <footer className={classes.footer}>
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

Footer.propTypes = {};

export default Footer;
