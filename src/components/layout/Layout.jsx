import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { Header } from './Header';
import { Footer } from './Footer';

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Main = styled.main`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.pageBg};
`;

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LayoutWrapper>
                <Header />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </LayoutWrapper>
        </ThemeProvider>
    );
};

export default Layout;
