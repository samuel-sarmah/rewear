import styled from "styled-components";
import ProductCard from "../products/ProductCard";

const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) =>  theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Grid = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
    flex-wrap: wrap;
    justify-content: space-around;
`;

const featuredProducts = [
    { id: 1, icon: '👕', title: 'Vintage Denim Jacket', price: 35, condition: 'Excellent condition' },
    { id: 2, icon: '👗', title: 'Floral Summer Dress', price: 28, condition: 'Good condition' },
    { id: 3, icon: '👟', title: 'Retro Sneakers', price: 45, condition: 'Like new' },
    { id: 4, icon: '👜', title: 'Leather Handbag', price: 52, condition: 'Good condition' },
];

const FeaturedItems = () => {
    return (
        <Section>
            <SectionTitle>Featured Items</SectionTitle>
            <Grid>
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </Section>
    )
}

export default FeaturedItems;