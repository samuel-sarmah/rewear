import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.headerBg};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled(Link)`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
`;

const Nav = styled.nav`
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
    }
`;

const SearchBar = styled.input`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radius.md};
    width: 200px;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    &:hover {
        color: ${({ theme }) => theme.colors.textMuted};
    }
`;

const CartButton = styled(Link)`
    background: none;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.sm};

    &:hover {
        transform: scale(1.1);
        background:none;
    }
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo to="/">♻️ ReWear</Logo>
            <Nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/sell">Sell</NavLink>
                <NavLink to="/about">About</NavLink>
            </Nav>
            <RightSection>
                <SearchBar type="text" placeholder="Search..." />
                <CartButton to="/cart">🛒</CartButton>
            </RightSection>
        </HeaderWrapper>
    );
}

export { Header };
