import { createPortal } from 'react-dom';
import style from '../../../src/styles.module.css';
import PropTypes from 'prop-types';

const modal = document.querySelector('#modal');

function Modal({ backDropClick, galleryObject }) {
  return createPortal(
    <div onClick={backDropClick} className={style.Overlay}>
      <div className={style.Modal}>
        <img src={galleryObject.webformatURL} alt={galleryObject.tags} />
      </div>
    </div>,
    modal
  );
}

Modal.propTypes = {
  galleryObject: PropTypes.object.isRequired,
  backDropClick: PropTypes.func.isRequired,
};

export default Modal;
