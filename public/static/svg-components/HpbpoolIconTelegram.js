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
const SvgHpbpoolIconTelegram = React.forwardRef((props, ref) => {
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
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014-.568.226-.866.447-.893.663-.046.366.412.51 1.034.705.085.027.173.054.263.084.613.199 1.437.432 1.865.441.389.008.823-.152 1.302-.48 3.268-2.207 4.955-3.322 5.061-3.346.075-.017.179-.039.249.024.07.062.063.18.056.212-.046.193-1.84 1.862-2.77 2.726-.29.269-.495.46-.537.504-.094.097-.19.19-.282.279-.57.548-.996.96.024 1.632.49.323.882.59 1.273.856.427.291.853.581 1.405.943.14.092.274.187.405.28.497.355.944.673 1.496.623.32-.03.652-.331.82-1.23.397-2.126 1.179-6.73 1.36-8.628a2.112 2.112 0 00-.02-.472.506.506 0 00-.172-.325c-.143-.117-.365-.142-.465-.14-.451.008-1.143.249-4.476 1.635z"
        fill="#fff"
        opacity={0.5}
      />
    </svg>
  );
});
SvgHpbpoolIconTelegram.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgHpbpoolIconTelegram.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgHpbpoolIconTelegram;
