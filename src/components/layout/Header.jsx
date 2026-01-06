import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.headerBg};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 3px ${({ theme }) => theme.colors.shadow};
    position: sticky;
    top: 0;
    z-index: 100;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing.sm};
    }
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
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: ${({ theme }) => theme.spacing.md};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        order: 3;
        width: 100%;
        justify-content: center;
        gap: ${({ theme }) => theme.spacing.md};
    }
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
    border: 1px solid ${({ theme }) => theme.colors.textMuted};
    border-radius: ${({ theme }) => theme.radius.md};
    width: 200px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 150px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 120px;
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
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
        }
    }

    return (
        <HeaderWrapper>
            <Logo to="/">♻️ ReWear</Logo>
            <Nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/sell">Sell</NavLink>
                <NavLink to="/about">About</NavLink>
            </Nav>
            <RightSection>
                <SearchBar 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                />
                <CartButton to="/cart">🛒</CartButton>
            </RightSection>
        </HeaderWrapper>
    );
}

export { Header };
