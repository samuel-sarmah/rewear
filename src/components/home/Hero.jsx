import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroWrapper = styled.section`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.heroAccent} 0%, ${({ theme }) => theme.colors.heroBg} 100%);
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
    }
`;

const HeroTitle = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.5rem;
    }
`;

const HeroSubtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.base};
    }
`;

const CTAButton = styled(Link)`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textInverse};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: bold;
    border: none;
    border-radius: ${({ theme }) => theme.radius.md};
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accentDark};
        color: ${({ theme }) => theme.colors.textInverse};
        transform: translateY(-2px);
    }
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroTitle>Give Clothes a Second Life</HeroTitle>
            <HeroSubtitle>Buy & Sell pre-loved fashion. Sustainable style for everyone.</HeroSubtitle>
            <CTAButton to="/shop">Start Shopping</CTAButton>
        </HeroWrapper>
    );
};

export default Hero;