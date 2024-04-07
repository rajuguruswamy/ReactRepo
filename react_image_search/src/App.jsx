import { Form, Button } from 'react-bootstrap';
import './index.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const IMAGE_PER_SIZE = 20;
function App() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setErrorMessage('');
        const url = `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGE_PER_SIZE}&client_id=${API_KEY}`;

        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        setImages(data.results);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      setErrorMessage('Error fetching images. Try again later.');
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const reserSearch = () => {
    fetchImages();
    setPage(1);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    reserSearch();
  };

  const handleSelection = (selction) => {
    searchInput.current.value = selction;
    reserSearch();
  };

  console.log(page);
  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      {errorMessage && <p className="error-msg">{errorMessage}</p>}
      <div className="search-section">
        <Form onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Type something to search..."
            className="search-input"
            ref={searchInput}
          />
        </Form>
      </div>
      <div className="filters">
        <div
          onClick={() => {
            handleSelection('nature');
          }}
        >
          Nature
        </div>
        <div
          onClick={() => {
            handleSelection('birds');
          }}
        >
          Birds
        </div>
        <div
          onClick={() => {
            handleSelection('cats');
          }}
        >
          Cats
        </div>
        <div
          onClick={() => {
            handleSelection('shoes');
          }}
        >
          Shoes
        </div>
      </div>
      {!errorMessage && (
        <div>
          <div className="images">
            {images.map((image) => {
              return (
                <img
                  src={image.urls.small}
                  key={image.id}
                  alt={image.alt_description}
                  className="image"
                />
              );
            })}
          </div>
          <div className="buttons">
            {page > 1 && (
              <Button onClick={() => setPage(page - 1)}>Previous</Button>
            )}
            {page < totalPages && (
              <Button onClick={() => setPage(page + 1)}>Next</Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
