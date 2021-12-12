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
const SvgHpbpoolIconHome = React.forwardRef((props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm.331-18.86l6.511 6.51a.481.481 0 01-.342.82h-1.06V18c0 .551-.449 1-1 1H13.99v-1.998c0-.552-.448-1-1-1h-2c-.553 0-1.001.448-1.001 1V19H7.526c-.552 0-1-.449-1-1v-5.53H5.48a.48.48 0 01-.339-.82l6.51-6.51a.481.481 0 01.68 0z"
        fill="#fff"
        opacity={0.5}
      />
    </svg>
  );
});
SvgHpbpoolIconHome.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgHpbpoolIconHome.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgHpbpoolIconHome;
