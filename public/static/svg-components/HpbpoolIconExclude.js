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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm4.53-6.448c-.313.299-.78.448-1.402.448H8.872c-.618 0-1.084-.15-1.4-.448C7.159 17.255 7 16.81 7 16.216V7.79c0-.593.158-1.04.473-1.34.315-.3.781-.45 1.399-.45h2.693v4.151c0 .695.369 1.042 1.107 1.042H17v5.023c0 .593-.157 1.038-.47 1.336zm.246-7.51c.087.12.139.243.156.368h-4.204c-.22 0-.33-.104-.33-.312v-4.04a.905.905 0 01.389.154c.13.086.266.198.407.336l3.228 3.103c.149.141.267.271.354.391zm-7.07 3.6h4.607a.409.409 0 00.293-.111.36.36 0 00.118-.27.35.35 0 00-.118-.269.415.415 0 00-.293-.109H9.705c-.12 0-.22.037-.298.11a.35.35 0 00-.118.267c0 .106.039.196.118.27a.417.417 0 00.298.113zm0 2.097h4.607a.415.415 0 00.293-.109.35.35 0 00.118-.268c0-.11-.04-.201-.118-.274a.415.415 0 00-.293-.109H9.705c-.12 0-.22.037-.298.11a.357.357 0 00-.118.273c0 .106.039.195.118.268a.423.423 0 00.298.109z"
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
