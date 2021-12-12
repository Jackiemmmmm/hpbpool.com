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
const SvgHpbpoolLuckiestWinnersIcon = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <ellipse
        cx={12.937}
        cy={12.795}
        rx={12.399}
        ry={12.353}
        transform="rotate(-180 12.937 12.795)"
        fill="#FFCA42"
      />
      <path fill="#BE6058" d="M13.2 19.806l-7.107-7.082L13.2 5.642l7.108 7.082z" />
    </svg>
  );
});
SvgHpbpoolLuckiestWinnersIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgHpbpoolLuckiestWinnersIcon.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgHpbpoolLuckiestWinnersIcon;
