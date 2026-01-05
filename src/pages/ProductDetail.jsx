import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { products } from "../data/products";

const PageWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing.xl};
    max-width: 900px;
    margin: 0 auto;
`;

const BackLink = styled(Link)`
    display: inline-block;
    margin-bottom: ${({ theme  }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ProductLayout = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.xl};

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ImageSection = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.headerBg};
    border-radius: ${({ theme }) => theme.radius.md};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    min-height: 350px;
`;

const InfoSection = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.cardBg};
    padding: ${({ theme }) => theme.spacing.xl};
    border-radius: ${({ theme }) => theme.radius.md};
`;

const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Price = styled.div`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const DetailRow = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Label = styled.span`
    color: ${({ theme }) => theme.colors.textMuted};
    min-width: 80px;
`;

const Value = styled.span`
    color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
    margin: ${({ theme }) => theme.spacing.lg} 0;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
`;

const AddToCartButton = styled.button`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-top: ${({ theme }) => theme.spacing.md};
`;

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <PageWrapper>
                <h1>Product not found</h1>
                <BackLink to="/shop">← Back to Shop</BackLink>
            </PageWrapper>
        )
    }

    return (
        <PageWrapper>
            <BackLink to="/shop">← Back to Shop</BackLink>
            <ProductLayout>
                <ImageSection>{product.icon}</ImageSection>
                <InfoSection>
                    <Title>{product.title}</Title>
                    <Price>{product.price}</Price>
                    <DetailRow>
                        <Label>Condition:</Label>
                        <Value>{product.condition}</Value>
                    </DetailRow>
                    <DetailRow>
                        <Label>Size:</Label>
                        <Value>{product.size}</Value>
                    </DetailRow>
                    <DetailRow>
                        <Label>Seller</Label>
                        <Value>{product.seller}</Value>
                    </DetailRow>
                    <Description>{product.description}</Description>
                    <AddToCartButton>Add to Cart 🛒</AddToCartButton>
                </InfoSection>
            </ProductLayout>
        </PageWrapper>
    );
};

export default ProductDetail;