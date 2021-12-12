import { makeStyles, useTheme } from '@material-ui/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
const useStyles = makeStyles({
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
  },
});
const SvgHpbpoolIconTwitter = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.767 9.046c.008.125.008.257.008.385 0 3.932-2.995 8.462-8.467 8.462a8.437 8.437 0 01-4.57-1.334c.241.027.472.037.718.037a5.968 5.968 0 003.694-1.27 2.976 2.976 0 01-2.78-2.062c.458.067.87.067 1.342-.053a2.973 2.973 0 01-2.382-2.92v-.037c.394.222.857.359 1.342.377a2.977 2.977 0 01-.921-3.975 8.445 8.445 0 006.134 3.11c-.42-2.022 1.09-3.659 2.906-3.659a2.97 2.97 0 012.172.938 5.877 5.877 0 001.889-.716 2.96 2.96 0 01-1.307 1.637c.6-.064 1.178-.23 1.714-.463a6.235 6.235 0 01-1.492 1.543z"
        fill="#fff"
        opacity={0.5}
      />
    </svg>
  );
});
SvgHpbpoolIconTwitter.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgHpbpoolIconTwitter.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgHpbpoolIconTwitter;
