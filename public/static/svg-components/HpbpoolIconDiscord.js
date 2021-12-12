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
const SvgHpbpoolIconDiscord = React.forwardRef((props, ref) => {
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
      <g opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="#fff">
        <path d="M13.308 14.1c.18.228.396.486.396.486 1.326-.042 1.836-.912 1.836-.912 0-1.932-.864-3.498-.864-3.498-.864-.648-1.686-.63-1.686-.63l-.084.096c1.02.312 1.494.762 1.494.762a4.891 4.891 0 00-3.018-.564.505.505 0 00-.089.01l-.013.002c-.21.018-.72.096-1.362.378a6.37 6.37 0 00-.354.174s.498-.474 1.578-.786l-.06-.072s-.822-.018-1.686.63c0 0-.864 1.566-.864 3.498 0 0 .504.87 1.83.912 0 0 .222-.27.402-.498-.762-.228-1.05-.708-1.05-.708s.06.042.168.102a.243.243 0 00.051.033l.027.015c.15.084.3.15.438.204.246.096.54.192.882.258a4.203 4.203 0 002.424-.252c.21-.078.444-.192.69-.354 0 0-.3.492-1.086.714zm-3.006-1.65c0-.366.27-.666.612-.666.342 0 .618.3.612.666 0 .366-.27.666-.612.666-.336 0-.612-.3-.612-.666zm2.19 0c0-.366.27-.666.612-.666.342 0 .612.3.612.666 0 .366-.27.666-.612.666-.336 0-.612-.3-.612-.666z" />
        <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM6.75 7.986c0-.684.552-1.236 1.23-1.236h8.04c.678 0 1.23.552 1.23 1.236V18.75l-1.29-1.14-.726-.672-.768-.714.318 1.11H7.98c-.678 0-1.23-.552-1.23-1.236V7.986z" />
      </g>
    </svg>
  );
});
SvgHpbpoolIconDiscord.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgHpbpoolIconDiscord.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgHpbpoolIconDiscord;
