import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
      transition: 'opacity 1s linear',
      display: 'inherit',
      '&.loaded': {
        opacity: 1,
      },
    },
  },
  'img-small': {
    filter: 'blur(5px)',
    transform: 'scale(1)',
    position: 'absolute',
    opacity: 0,
    top: 0,
    left: 0,
  },
}));

function Image({ placeholder, src, className, loadedCallback, children, ...otherProps }) {
  const classes = useStyles();
  const [[smallImage, largeImage], setLoaded] = useState([false, false]);
  const [hideSmallImage, setHideSmallImage] = useState(false);

  const handleImageLoaded = (position) => {
    const isLargeImageLoaded = position === 1;
    loadedCallback(position);
    if (isLargeImageLoaded) {
      setTimeout(() => {
        setHideSmallImage(true);
      }, 1200);
      return setLoaded([false, true]);
    }
    return setLoaded((prev) => prev.map((item, idx) => (idx === position ? true : item)));
  };
  return (
    <div {...otherProps} className={classnames(classes.root, { [className]: className })}>
      {!hideSmallImage && (
        <img
          onLoad={() => handleImageLoaded(0)}
          src={placeholder}
          alt={placeholder}
          className={classnames(classes['img-small'], smallImage ? 'loaded' : '')}
        />
      )}
      <img
        onLoad={() => handleImageLoaded(1)}
        src={src}
        alt={src}
        className={`${largeImage ? 'loaded' : ''}`}
      />
      {children}
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rootProps: PropTypes.object,
  className: PropTypes.string,
  loadedCallback: PropTypes.func,
  children: PropTypes.any,
};

Image.defaultProps = {
  loadedCallback: () => {},
};

export default Image;
