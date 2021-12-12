import { makeStyles, styled } from '@material-ui/styles';
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
    padding: ({ isMobile }) => (isMobile ? '16px 32px 0' : '16px 5px 0'),
    ...theme.flex.mainEnd,
    '& * + *': { marginLeft: ({ isMobile }) => (isMobile ? 20 : 24) },
  },
}));

function Header({ isMobile }) {
  const { t } = useTranslation('common');
  const classes = useStyles({ isMobile });
  return (
    <div className={classes.root}>
      <StyledButton isMobile={isMobile} text={t('tutorial')} onClick={() => {}} />
      <StyledButton isMobile={isMobile} text={t('app')} onClick={() => {}} />
    </div>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
