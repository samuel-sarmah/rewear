import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Home from "./Home";

// Page Test with Router

const renderWithProviders = (component) => {
    return render(
        <MemoryRouter>
            <ThemeProvider theme={theme}>
                {component}
            </ThemeProvider>
        </MemoryRouter>
    )
}

describe('Home Page', () => {
    it('renders hero section', () => {
        renderWithProviders(<Home />);
        expect(screen.getByText(/Give Clothes a second Life/i)).toBeInTheDocument();
    });

    it('renders featured items section', () => {
        renderWithProviders(<Home />);
        expect(screen.getByText('Featured Items')).toBeInTheDocument();
    });

    it('renders category section', () => {
        renderWithProviders(<Home />);
        expect(screen.getByText('Shop by Category')).toBeInTheDocument();
    });
});