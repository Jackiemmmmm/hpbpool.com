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
const SvgHpbpoolLuckiestWinners = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      width={1100}
      height={120}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <path fill="#7935E8" d="M0 0h1100v119.999H0z" />
      <mask
        id="hpbpool-luckiest-winners_svg__a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={1100}
        height={120}
      >
        <path fill="#2F1658" d="M0 0h1100v119.999H0z" />
      </mask>
      <g
        opacity={0.4}
        stroke="#2F1658"
        strokeOpacity={0.3}
        strokeWidth={2}
        mask="url(#hpbpool-luckiest-winners_svg__a)"
      >
        <path transform="matrix(.91893 .39442 -.61343 .78975 -44.904 6.1)" d="M0-1h950.143" />
        <path transform="matrix(.91894 -.39439 .6134 .78977 -105.237 112.266)" d="M0-1h633.178" />
        <path transform="matrix(.91894 -.39439 .6134 .78977 -115.145 48.285)" d="M0-1h633.178" />
        <path transform="matrix(.91845 -.39553 .6147 .78875 -105.237 180.798)" d="M0-1h944.653" />
        <path transform="matrix(.91885 -.3946 .61364 .78958 -73.664 236.187)" d="M0-1h1063.73" />
        <path transform="matrix(.91948 -.39315 .61197 .79088 -34.514 286.881)" d="M0-1h1196.33" />
        <path transform="matrix(.91948 -.39315 .61197 .79088 -34.514 355.483)" d="M0-1h1196.33" />
        <path transform="matrix(.91928 -.3936 .61249 .79048 -34.514 424.086)" d="M0-1h1328.12" />
        <path transform="matrix(.9187 -.39494 .61403 .78928 -34.514 492.688)" d="M0-1h1311.12" />
        <path transform="matrix(.91874 -.39486 .61394 .78936 -34.514 561.291)" d="M0-1h1310.65" />
        <path transform="matrix(.91896 -.39434 .61335 .78981 -34.514 629.893)" d="M0-1h1310.33" />
        <path transform="matrix(.91993 .39209 -.61074 .79183 10.951 -108.351)" d="M0-1h1246.01" />
        <path transform="matrix(.91964 .39276 -.61152 .79123 90.514 -142.147)" d="M0-1h1173.41" />
        <path transform="matrix(.91964 .39276 -.61152 .79123 90.514 -211.348)" d="M0-1h1173.41" />
        <path transform="matrix(.91964 .39276 -.61152 .79123 90.514 -280.747)" d="M0-1h1173.41" />
        <path transform="matrix(.91964 .39276 -.61152 .79123 90.514 -350.145)" d="M0-1h1173.41" />
        <path transform="matrix(.91964 .39276 -.61152 .79123 90.514 -416.899)" d="M0-1h1173.41" />
        <path transform="matrix(.91743 .3979 -.61741 .78664 -34.235 78.141)" d="M0-1h759.331" />
        <path transform="matrix(.9198 .39238 -.61108 .79156 -44.904 -63.299)" d="M0-1h1130.48" />
        <path d="M50.121 380.849V-81.805M128.363 380.849V-81.805M289.294 380.849V-81.805M370.204 380.849V-81.805M448.447 380.849V-81.805M527.579 380.849V-81.805M609.378 390.103V-81.805M687.621 399.356V-81.805M769.42 408.609V-81.805M850.33 417.862V-81.805M931.24 380.849V-81.805M1009.48 380.849V-81.805M1089.5 380.849V-81.805M209.274 380.849V-81.805" />
      </g>
    </svg>
  );
});
SvgHpbpoolLuckiestWinners.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgHpbpoolLuckiestWinners.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgHpbpoolLuckiestWinners;
