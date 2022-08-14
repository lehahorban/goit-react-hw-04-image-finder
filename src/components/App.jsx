import { useState, useEffect } from 'react';
import style from '../../src/styles.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from 'services/services';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [galleryItem, setGalleryItem] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [galleryObject, setGalleryObject] = useState('');
  const [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    if (galleryItem === '' || numberPage === '') {
      return;
    }
    setLoading(true);
    Api.fetchImage(galleryItem, numberPage)
      .then(hits => setImages(prevImages => [...prevImages, ...hits]))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [galleryItem, numberPage]);

  const handleSearchForm = inputValue => {
    setGalleryItem(inputValue);
    setImages([]);
    setNumberPage(1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const hendleClickImage = evt => {
    const isCardImage = evt.target;
    const galleryId = +isCardImage.getAttribute('data-id');
    const hits = images;
    const galleryObject = hits.find(item => item.id === galleryId);
    setGalleryObject(galleryObject);
  };

  const handleIncrementPage = () => {
    setNumberPage(prevState => prevState + 1);
  };

  const hits = images;
  const loadMore = hits.length > 0 && hits.length >= 12;
  return (
    <div className={style.App}>
      <Searchbar onSubmit={handleSearchForm} />
      <ImageGallery>
        <ImageGalleryItem
          onClick={toggleModal}
          hits={hits}
          hendleClickImage={hendleClickImage}
        />
      </ImageGallery>
      {showModal && (
        <Modal
          onClose={toggleModal}
          backDropClick={hendleBackdropClick}
          hits={hits}
          galleryObject={galleryObject}
        ></Modal>
      )}
      {loading && <Loader />}
      {loadMore && <Button incrementPage={handleIncrementPage} />}
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
