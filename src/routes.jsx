import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Sell from './pages/Sell';
import About from './pages/About';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "product/:id",
                element: <ProductDetail />,
            },
            {
                path: "sell",
                element: <Sell />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
];

export default routes;