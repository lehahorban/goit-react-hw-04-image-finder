import { useState } from 'react';
import { toast } from 'react-toastify';
import style from '../../../src/styles.module.css';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const hendleChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchName.trim() === '') {
      return toast('Треба написати що шукаєте');
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={style.Searchbar}>
      <form onSubmit={handleSubmit} className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          onChange={hendleChange}
          name="searchName"
          className={style.SearchFormInput}
          value={searchName}
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
