import { Routes, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import CategoriesPage from './CategoriesPage/CategoriesPage';
import ProductsAllPage from './ProductsAllPage/ProductsAllPage';
import SalesAllPage from './/SalesAllPage/SalesAllPage';
import ShoppingCartPage from './ShoppingCartPage/ShoppingCartPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

import SingleCategoriePage from './SingleCategoriePage/SingleCategoriePage';
import ProductPage from './ProductPage/ProductPage';

import ScrollToTop from './ScrollToTop';

const Navigations = () => {

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/categories' element={<CategoriesPage />} />
                <Route path='/products' element={<ProductsAllPage />} />
                <Route path='/sales' element={<SalesAllPage />} />
                <Route path='/cart' element={<ShoppingCartPage />} />

                <Route path='*' element={<NotFoundPage />} />

                <Route path='/categories/:id' element={<SingleCategoriePage />} />
                <Route path='/products/:id' element={<ProductPage />} />
            </Routes>
        </>
    )
};

export default Navigations;