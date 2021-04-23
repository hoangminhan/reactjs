// import React from 'react';
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Home from "./Components/Home";
// import Item from './Components/Item';
// import NotFound from "./Components/NotFound";
// import Products from './Components/Products';
import React from 'react'

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Item from './Pages/Item';
import NotFound from "./Pages/NotFound";
import Product from './Pages/Product';

// const Routes = [{
//     path: '/',
//     exact: true,
//     main: () => <Home />
// },
// {
//     path: '/about',
//     exact: false,
//     main: () => <About />
// },
// {
//     path: '/contact',
//     exact: false,
//     main: () => <Contact />
// },
// {
//     path: '/products',
//     exact: true,
//     main: ({ match }) => <Products match={match} />
// },
// {
//     path: '/products/:slug',
//     exact: true,
//     main: ({ match }) => <Item match={match} />
// },
// {
//     path: '',
//     exact: false,
//     main: () => <NotFound />
// }]
// export default Routes





// ==========================================
const Routers = [{
    path: '/',
    exact: true,
    content: () => <Home />
},
{
    path: '/about',
    exact: true,
    content: () => <About />
},
{
    path: '/contact',
    exact: true,
    content: () => <Contact />
},
{
    path: '/product',
    exact: true,
    content: ({ match }) => <Product match={match} />
},
{
    path: '/product/:name',
    exact: true,
    content: () => <Item />
},
{
    path: '',
    exact: false,
    content: () => <NotFound />
}]
export default Routers