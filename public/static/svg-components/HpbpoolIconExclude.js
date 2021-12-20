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
const SvgHpbpoolIconExclude = React.forwardRef((props, ref) => {
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
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.857 6.796l-1.093 1.047a.317.317 0 00-.123.305v7.707a.313.313 0 00.123.305l1.072 1.047v.233h-5.379v-.222l1.106-1.074c.11-.11.11-.142.11-.306V9.603l-3.08 7.81h-.415l-3.584-7.81v5.236a.713.713 0 00.2.6l1.442 1.744v.233H5.143v-.233l1.44-1.744a.699.699 0 00.188-.6V8.786a.52.52 0 00-.174-.448l-1.28-1.542v-.234h3.978l3.07 6.737 2.702-6.731h3.79v.228z"
        fill="#fff"
        opacity={0.5}
      />
    </svg>
  );
});
SvgHpbpoolIconExclude.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgHpbpoolIconExclude.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgHpbpoolIconExclude;
