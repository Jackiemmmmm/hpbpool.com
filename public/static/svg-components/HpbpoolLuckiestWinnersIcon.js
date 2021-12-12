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
      width={46}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <mask
        id="hpbpool-luckiest-winners-icon_svg__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={46}
        height={26}
      >
        <path fill="#C4C4C4" d="M.814.001h45.167v25.5H.814z" />
      </mask>
      <g mask="url(#hpbpool-luckiest-winners-icon_svg__a)">
        <ellipse cx={23.397} cy={3.751} rx={21.078} ry={21} fill="#FFCA42" />
        <path fill="#BE6058" d="M22.949-8.167l12.084 12.04-12.084 12.039-12.084-12.04z" />
      </g>
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
