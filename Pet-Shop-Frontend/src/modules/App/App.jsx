import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigations from '../../pages/Navigations';

import { fetchCategoriesAll } from '../../redux/categories/categories-thunks';

import '../../shared/styles/style.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAll())
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigations />
      <Footer />
    </>
  )
}

export default App
