import styled from "styled-components";
import React from "react";

const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.headerBg};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.a`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
`;

const Nav = styled.nav`
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled.a`
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

const CartButton = styled.button`
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
            <Logo href="/">♻️ ReWear</Logo>
            <Nav>
                <NavLink href="/shop">Shop</NavLink>
                <NavLink href="/sell">Sell</NavLink>
                <NavLink href="/about">About</NavLink>
            </Nav>
            <RightSection>
                <SearchBar type="text" placeholder="Search..." />
                <CartButton>🛒</CartButton>
            </RightSection>
        </HeaderWrapper>
    );
}

export { Header };
