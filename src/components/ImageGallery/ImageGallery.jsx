import style from '../../../src/styles.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ children }) {
  return <ul className={style.ImageGallery}>{children}</ul>;
}

ImageGallery.propTypes = {
  incrementPage: PropTypes.any,
};

export default ImageGallery;
