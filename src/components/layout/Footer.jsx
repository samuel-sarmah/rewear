import styled from "styled-components";

const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.footerBg};
    padding: ${({ theme }) => theme.spacing.xl};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.xl};
        align-items: center;
        text-align: center;
    }
`;

const BrandSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const Logo = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textInverse};
`;

const Tagline = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textLight};
`;

const LinksSection = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.xxl};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: ${({ theme }) => theme.spacing.xl};
    }
`;

const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
`;
 
const FooterLink = styled.a`
    font-size: ${({ theme }) =>  theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.textInverse};
    }
`;

const SocialSection = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;

function Footer() {
    return (
        <FooterWrapper>
            <BrandSection>
                <Logo>♻️ ReWear</Logo>
                <Tagline>Sustainable fashion marketplace</Tagline>
            </BrandSection>
            <LinksSection>
                <LinkColumn>
                    <FooterLink href="/help">Help Center</FooterLink>
                    <FooterLink href="/shipping">Shipping Info</FooterLink>
                    <FooterLink href="/returns">Returns</FooterLink>
                </LinkColumn>
                <LinkColumn>
                    <FooterLink href="/seller-guide">Seller Guide</FooterLink>
                    <FooterLink href="/sustainability">Sustainability</FooterLink>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                </LinkColumn>
            </LinksSection>
            <SocialSection>
                <span>📘</span>
                <span>📸</span>
                <span>🐦</span>
            </SocialSection>
        </FooterWrapper>
    )
}

export { Footer };