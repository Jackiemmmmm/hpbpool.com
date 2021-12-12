function defaultTemplate({ template }, opts, { imports, componentName, props, jsx, exports }) {
  return template.ast`
import { makeStyles, useTheme } from '@material-ui/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
${imports}

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

const ${componentName} = React.forwardRef((${props}, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  
  return ${jsx};
})

${componentName}.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
${componentName}.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};

${exports}
`;
}

module.exports = {
  template: defaultTemplate,
  ref: false,
  svgProps: {
    className: '{classnames(classes.root, className)}',
    color: '{theme.colors[color] ?? color}',
    ref: '{ref}',
  },
  expandProps: 'start',
};
