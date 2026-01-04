import styled from "styled-components";

const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Grid = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.xl};
    flex-wrap: wrap;
    justify-content: space-around;
`;

const CategoryItem = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    &:hover span:first-child {
        transform: scale(1.1)
    }
`;

const CategoryCircle = styled.span`
    width: 80px;
    height: 80px;
    border-radius: ${({ theme }) => theme.radius.full};
    background-color: ${({ $color }) => $color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    border: 2px solid ${({ theme }) => theme.colors.text};
    transition: transform 0.2s;
`

const CategoryLabel = styled.span`
    margin-top: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text};
`;

const categories = [
    { id: 1, icon: '👔', label: 'Tops', color: '#a5d8ff' },
    { id: 2, icon: '👖', label: 'Bottoms', color: '#ffc9c9' },
    { id: 3, icon: '👗', label: 'Dresses', color: '#b2f2bb' },
    { id: 4, icon: '🧥', label: 'Outerwear', color: '#ffec99' },
    { id: 5, icon: '👠', label: 'Shoes', color: '#eebefa' },
    { id: 6, icon: '👜', label: 'Accessories', color: '#ffd8a8' },
];


const CategoryGrid = () => {
    return (
        <Section>
            <SectionTitle>Shop by Category</SectionTitle>
            <Grid>
                {categories.map((cat) => (
                    <CategoryItem key={cat.id} href={`/category/${cat.label.toLocaleLowerCase()}`}>
                        <CategoryCircle $color={cat.color}>{cat.icon}</CategoryCircle>
                        <CategoryLabel>{cat.label}</CategoryLabel>
                    </CategoryItem>
                ))}
            </Grid>
        </Section>
    )
}

export default CategoryGrid;