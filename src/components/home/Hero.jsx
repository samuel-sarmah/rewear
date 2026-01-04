import styled from "styled-components";

const HeroWrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.heroBg};
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
    text-align: center;
`;

const HeroTitle = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HeroSubtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CTAButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: bold;
    border: none;
    border-radius: ${({ theme }) => theme.radius.md};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        color: ${({ theme }) => theme.colors.textInverse};
    }
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroTitle>Give Clothes a second Life</HeroTitle>
            <HeroSubtitle>Buy & Sell pre-loved fashion. Sustainable style for everyone.</HeroSubtitle>
            <CTAButton>Start Shopping</CTAButton>
        </HeroWrapper>
    );
};

export default Hero;