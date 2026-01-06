import styled from "styled-components";

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: ${({ theme }) => theme.radius.md};
    padding: ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
    width: 180px;
    transition: transform 0.2s, box-shadow 0.2s;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadow};
    }
`;

const ImagePlaceholder = styled.div`
    background-color: ${({ theme }) => theme.colors.pageBg};
    border-radius: ${({ theme }) => theme.radius.sm};
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Price = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
`;

const Condition = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textMuted};
    display: block;
    margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ProductCard = ({ product }) => {
    return (
        <Card>
            <ImagePlaceholder>{product.icon}</ImagePlaceholder>
            <Title>{product.title}</Title>
            <Price>{product.price}</Price>
            <Condition>{product.condition}</Condition>
        </Card>
    )
}

export default ProductCard;