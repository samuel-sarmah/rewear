import styled from "styled-components";

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

const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Paragraph = styled.p`
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.lg}
    margin: ${({ theme }) => theme.spacing.xl} 0;
    text-align: center;
`;

const StatCard = styled.div`
    background-color: ${({ theme }) => theme.colors.heroBg};
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.radius.md};
`;

const StatNumber = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryDark};
`;

const StatLabel = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
`;

const About = () => {
    return (
        <PageWrapper>
            <Title>♻️ About Rewear</Title>

            <Section>
                <Paragraph>
                    ReWear is a sustainable fashion marketplace where you can buy and sell
                    preloved clothing. We believe that every piece of clothig deservers a 
                    second life, and by extending the lifecycle of fashion, we can reduce 
                    waste and protect our planet.
                </Paragraph>
            </Section>

            <StatGrid>
                <StatCard>
                    <StatNumber>50k+</StatNumber>
                    <StatLabel>Items Listed</StatLabel>
                </StatCard>
                <StatCard>
                    <StatNumber>25k+</StatNumber>
                    <StatLabel>Happy Users</StatLabel>
                </StatCard>
                <StatCard>
                    <StatNumber>100+</StatNumber>
                    <StatLabel>Tons C0₂ Saved</StatLabel>
                </StatCard>
            </StatGrid>

            <Section>
                <SectionTitle>Our Mission</SectionTitle>
                <Paragraph>
                    We're on a mission to make sustainable fashion  acccessible to everyone.
                    By creating a trusted marketplace for second-hand clothing, we're helping to 
                    reduce the environmental impact of the fashion industry while making 
                    style affordable.
                </Paragraph>
            </Section>

            <Section>
                <SectionTitle>How It Works</SectionTitle>
                <Paragraph>
                    <strong>For Buyer:</strong> Browse thousands of unique pre-loved items,
                    filter by size, condition, and price, and find your next favorite piece
                    at a fraction of retail cost.
                </Paragraph>
                <Paragraph>
                    <strong>For Sellers:</strong> Clean out your closet and earn money!
                    Simply list your items, set your price, and we'll handle the rest.
                </Paragraph>
            </Section>
        </PageWrapper>
    );
};

export default About;