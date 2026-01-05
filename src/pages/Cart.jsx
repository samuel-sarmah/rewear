import styled from "styled-components";
import { Link } from "react-router-dom";

const PageWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing.xl};
    max-width: 800px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const EmptyCart = styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.spacing.xxl};
`;

const EmptyIcon = styled.div`
    font-sizee: 4rem;
    margin-bottom:  ${({ theme }) => theme.spacing.lg};
`;

const EmptyText = styled.p`
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ShopLink = styled(Link)`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    border-radius: ${({ theme }) => theme.radius.md};
    text-decoration: none;
    font-weight: bold;
    
    &:hover { 
        background-color: ${({ theme }) => theme.colors.primaryDark};
        color: ${({ theme }) => theme.colors.textInverse};
    }
`;

const Cart = () => {
    // For now, cart is empty - state management would be added later
    const cartItems = [];

    return (
        <PageWrapper>
            <Title>🛒 Your Cart</Title>
            {cartItems.length === 0 ? (
                <EmptyCart>
                    <EmptyIcon>🛒</EmptyIcon>
                    <EmptyText>Your cart is empty</EmptyText>
                    <ShopLink to="/shop">Start Shopping</ShopLink>
                </EmptyCart>
            ) : (
                <div>Cart items would go here</div>
            )}
        </PageWrapper>
    );
};

export default Cart;