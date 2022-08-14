import style from '../../../src/styles.module.css';
import PropTypes from 'prop-types';

function Button({ incrementPage }) {
  return (
    <button onClick={incrementPage} type="button" className={style.Button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};

export default Button;
