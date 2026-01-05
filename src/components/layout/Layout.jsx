import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Header } from './Header';
import { Footer } from './Footer';

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
