import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";

const PageWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing.xl};
    max-width: 800px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Section = styled.section`
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Paragraph = styled.p`
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ErrorPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <PageWrapper>
                <Title>Oh no, this route doesn't exist!</Title>
                <Section>
                    <Link to="/">
                        <Paragraph>Let's get you back to the shop, though!</Paragraph>
                    </Link>
                </Section>
            </PageWrapper>
        </ThemeProvider>
    );
};

export default ErrorPage;