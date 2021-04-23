import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductList/ProductListPage';


const routes = [
    {
        path: '/',
        exact: true,
        content: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: true,
        content: () => <ProductListPage />
    },

    {
        path: '/product/add',
        exact: true,
        content: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: true,
        content: ({ match }) => <ProductActionPage a={match} />
    },
    {
        path: '',
        exact: false,
        content: () => <NotFound />
    }
]



export default routes;