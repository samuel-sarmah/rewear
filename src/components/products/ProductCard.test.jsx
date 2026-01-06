import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import ProductCard from "./ProductCard";

// Component Test

const mockProduct = { 
    id: 1, 
    icon: '👕',
    title: 'Vintage Denim Jacket',
    price: 35,
    condition: 'Excellent'
};

const renderWithTheme = (component) => {
    return render(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    );
};

describe('ProductCard', () => {
    it('renders product title', () => {
        renderWithTheme(<ProductCard product={mockProduct} />);
        expect(screen.getByText('Vintage Denim Jacket')).toBeInTheDocument();
    });

    it('renders product price', () => {
        renderWithTheme(<ProductCard product={mockProduct} />);
        expect(screen.getByText('35')).toBeInTheDocument();
    });

    it('renders product condition', () => {
        renderWithTheme(<ProductCard product={mockProduct} />);
        expect(screen.getByText('Excellent')).toBeInTheDocument();
    });

    it('render product icon', () => {
        renderWithTheme(<ProductCard product={mockProduct} />);
        expect(screen.getByText('👕')).toBeInTheDocument();
    });
});