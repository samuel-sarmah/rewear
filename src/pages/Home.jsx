import styled from "styled-components";
import ProductCard from "../components/products/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { products, categories } from "../data/products";

// Slim announcement banner
const AnnouncementBar = styled.div`
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    color: white;
    text-align: center;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    display: ${({ $dismissed }) => ($dismissed ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

const DismissedButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: 0;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        background: none;
    }
`;

// Category pills - horizontal scroll
const CategoryPills = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    overflow-x: auto;
    background: ${({ theme }) => theme.colors.cardBg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    }
`;

const CategoryPill = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background: ${({ $active, theme }) => $active ? theme.colors.text : theme.colors.pageBg};
    color: ${({ $active, theme }) => $active ? theme.colors.textInverse : theme.colors.text};
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s;

    &:hover {
        background: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.textInverse};
    }
`;

// Main content area
const MainContent = styled.main`
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.md};
    }
`;

// Product secction with tabs
const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.text};
`;

const Tablist = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.xs};
`;

const Tab = styled.button`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background: ${({ $active, theme }) => $active ? theme.colors.accent : 'transparent'};
    color: ${({ $active, theme }) => $active ? theme.colors.textInverse : theme.colors.textMuted};
    border: none;
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: ${({ $active, theme }) => $active ? theme.colors.accentDark : theme.colors.pageBg};
        color: ${({ $active, theme }) => $active ? theme.colors.textInverse : theme.colors.text};
    }
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(2, 1fr);
        gap: ${({ theme }) => theme.spacing.md};
    }
`;

const ProductLink = styled(Link)`
    text-decoration: none;
`;

const ViewAllLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

// Value props section
const ValueProps = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.pageBg};
    margin: ${({ theme }) => theme.spacing.xl} 0;
    border-radius: ${({ theme }) => theme.radius.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

const ValueProp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xs};
`;

const ValueIcon = styled.span`
    font-size: 1.5rem;
`;

const ValueTitle = styled.span`
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text};
`;

const ValueDesc = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textMuted};
`;

// Sell CTA banner
const SellBanner = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.heroAccent}, ${({ theme }) => theme.colors.heroBg});
    border-radius: ${({ theme }) => theme.radius.lg};
    margin-top: ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        text-align: center;
        gap: ${({ theme }) => theme.spacing.md};
    }
`;

const SellText = styled.div`
    h3 { 
        font-size: ${({ theme }) => theme.fontSizes.lg};
        margin-bottom: ${({ theme }) => theme.spacing.xs};
    }
    p {
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;

const SellButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textInverse};
    border-radius: ${({ theme }) => theme.radius.md};
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
        background: ${({ theme }) => theme.colors.primaryDark};
        transform: translateY(-2px);
    }
`;

const Home = () => {
    const [dismissed, setDismissed] = useState(false);
    const [activeTab, setActiveTab] = useState('new');

    // Get products based on active tab
    const getFilteredProducts = () => {
        switch(activeTab) {
            case 'new':
                // Newest first (by id descending)
                return [...products].sort((a, b) => b.id - a.id).slice(0, 8);
            case 'trending':
                // Shuffle for "trending" effect
                return [...products].sort(() => 0.5 - Math.random()).slice(0, 8);
            case 'under25':
                return products.filter(p => p.price < 25).slice(0, 8);
            case 'picks':
                // Staff picks - just featured for now
                return products.filter(p => p.featured).slice(0, 8);
            default:
                return products.slice(0, 8)
        }
    };

    const displayProducts = getFilteredProducts();

    return (
        <>
            {/**Slim announcement bar */}
            <AnnouncementBar $dismissed={dismissed}>
                <span>♻️ Join 10,000+ shoppers saving fashion from landfills • Free shipping over $50</span>
                <DismissedButton onClick={() => setDismissed(true)}>x</DismissedButton>
            </AnnouncementBar>

            {/** Quick category pills */}
            <CategoryPills>
                <CategoryPill to="/shop" $active>All</CategoryPill>
                {categories.map(cat => (
                    <CategoryPill
                        key={cat.id}
                        to={`/shop?category=${cat.id}`}
                    >
                        {cat.icon} {cat.label}
                    </CategoryPill>
                ))}
            </CategoryPills>
            {/** Main Product area */}
            <MainContent>
                <SectionHeader>
                    <SectionTitle>Shop Now</SectionTitle>
                    <Tablist>
                        <Tab $active={activeTab === 'new'} onClick={() => setActiveTab('new')}>
                            Just Dropped
                        </Tab>
                        <Tab $active={activeTab === 'trending'} onClick={() => setActiveTab('trending')}>
                            Trending
                        </Tab>
                        <Tab $active={activeTab === 'under25'} onClick={() => setActiveTab('under25')}>
                            Under $25
                        </Tab>
                        <Tab $active={activeTab === 'picks'} onClick={() => setActiveTab('picks')}>
                            Staff Picks
                        </Tab>
                    </Tablist>
                </SectionHeader>

                <ProductGrid>
                    {displayProducts.map(product => (
                        <ProductLink key={product.id} to={`/products/${product.id}`}>
                            <ProductCard product={product} />
                        </ProductLink>
                    ))}
                </ProductGrid>

                <div style={{ textAlign: 'center', marginTop: '2rem'}}>
                    <ViewAllLink to="/shop">
                        View all {products.length} items →
                    </ViewAllLink>
                </div>

                {/** Value props - After Products */}
                <ValueProps>
                    <ValueProp>
                        <ValueIcon>🔒</ValueIcon>
                        <ValueTitle>Secure Checkout</ValueTitle>
                        <ValueDesc>SSL encrypted payments</ValueDesc>
                    </ValueProp>
                    <ValueProp>
                        <ValueIcon>🚚</ValueIcon>
                        <ValueTitle>Free Shipping</ValueTitle>
                        <ValueDesc>On orders over $50</ValueDesc>
                    </ValueProp>
                    <ValueProp>
                        <ValueIcon>↩️</ValueIcon>
                        <ValueTitle>Easy Returns</ValueTitle>
                        <ValueDesc>30-day return policy</ValueDesc>
                    </ValueProp>
                    <ValueProp>
                        <ValueIcon>🌱</ValueIcon>
                        <ValueTitle>Sustainable</ValueTitle>
                        <ValueDesc>100% pre-loved items</ValueDesc>
                    </ValueProp>
                </ValueProps>

                {/** Sell CTA - positioned after engagement */}
                <SellBanner>
                    <SellText>
                        <h3>Have clothes you no longer wear?</h3>
                        <p>Turn your closet into cash. List items in under 60 seconds</p>
                    </SellText>
                    <SellButton to="/sell">
                        Start Selling
                    </SellButton>
                </SellBanner>
            </MainContent>
        </>
    );
};

export default Home;