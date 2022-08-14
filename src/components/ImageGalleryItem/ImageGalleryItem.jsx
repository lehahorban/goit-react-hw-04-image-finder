import style from '../../../src/styles.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ hits, hendleClickImage, onClick }) {
  return (
    <>
      {hits &&
        hits.map(item => (
          <li
            onClick={onClick}
            key={item.id}
            className={style.ImageGalleryItem}
          >
            <img
              data-id={item.id}
              onClick={hendleClickImage}
              className={style.ImageGalleryItemImage}
              src={item.largeImageURL}
              alt={item.tags}
            />
          </li>
        ))}
    </>
  );
}

ImageGalleryItem.propTypes = {
  hits: PropTypes.array.isRequired,
  hendleClickImage: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
