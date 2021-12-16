import { makeStyles, styled } from '@material-ui/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  const { text, onClick, isMobile, ...otherProps } = props;
  return (
    <button type="button" onClick={onClick} {...otherProps}>
      {text}
    </button>
  );
};

const StyledButton = styled(Button)((props) => {
  const { theme, isMobile } = props;
  return {
    color: theme.colors.white,
    width: isMobile ? 150 : 120,
    border: `1px solid ${theme.colors.white}`,
    borderRadius: 24,
    padding: isMobile ? '18px 0' : '10px 0',
    ...theme.typography.body1,
    fontSize: isMobile ? 28 : 14,
    background: 'transparent',
    outline: 'none',
  };
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: ({ isMobile }) => (isMobile ? '50px 50px 0' : '16px 0px 0'),
    display: 'flex',
    justifyContent: ({ isMobile }) => (isMobile ? 'space-between' : 'flex-end'),
  },
  locales: {
    color: theme.colors.white,
    ...theme.flex.center,
    fontSize: ({ isMobile }) => (isMobile ? 28 : 14),
    marginLeft: 39,
    '& * + *': {
      paddingLeft: ({ isMobile }) => (isMobile ? 16 : 4),
      marginLeft: ({ isMobile }) => (isMobile ? 16 : 4),
      borderLeft: `1px solid ${theme.colors.white}`,
    },
  },
  operation: {
    '& * + *': { marginLeft: ({ isMobile }) => (isMobile ? 20 : 24) },
  },
}));

function Header({ isMobile }) {
  const { t } = useTranslation('common');
  const classes = useStyles({ isMobile });
  const router = useRouter();
  const handleClick = (value) => window.open(value, '_blank');
  const isZh = router.locale === 'zh';
  return (
    <div className={classes.root}>
      <div className={classes.operation}>
        <StyledButton
          isMobile={isMobile}
          text={t('tutorial')}
          onClick={() =>
            handleClick(
              isZh
                ? 'https://www.hpclub.org/t/no-loss-prize-games-hpbpool/93'
                : 'https://www.hpclub.org/t/no-loss-lottery-comes-to-hpb/97'
            )
          }
        />
        <StyledButton
          isMobile={isMobile}
          text={t('app')}
          onClick={() => handleClick('https://app.hpbpool.com')}
        />
      </div>
      <div className={classes.locales}>
        {router.locales.map((item) => (
          <Link href={router.route} key={item} locale={item}>
            {t(`translation.${item}`)}
          </Link>
        ))}
      </div>
    </div>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
