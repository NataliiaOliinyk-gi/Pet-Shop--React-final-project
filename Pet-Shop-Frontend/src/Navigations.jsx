import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductsAllPage from './pages/ProductsAllPage/ProductsAllPage';
import SalesAllPage from './pages/SalesAllPage/SalesAllPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import SingleCategoriePage from './pages/SingleCategoriePage/SingleCategoriePage';
import ProductPage from './pages/ProductPage/ProductPage';


const Navigations = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/categories/all' element={<CategoriesPage />} />
                <Route path='/products/all' element={<ProductsAllPage />} />
                <Route path='/sales/all' element={<SalesAllPage />} />
                <Route path='/order/send' element={<ShoppingCartPage />} />

                <Route path='*' element={<NotFoundPage />} />

                <Route path='/categories/:id' element={<SingleCategoriePage />} />
                <Route path='/products/:id' element={<ProductPage />} />
            </Routes>
        </>
    )
};

export default Navigations;