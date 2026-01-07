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
    it('renders announcement bar', () => {
        renderWithProviders(<Home />);
        expect(screen.getByText(/Join 10,000\+ shoppers/i)).toBeInTheDocument();
    });

    it('renders shop now section', () => {
        renderWithProviders(<Home />);
        expect(screen.getByText('Shop Now')).toBeInTheDocument();
    });

    it('renders category pills', () => {
        renderWithProviders(<Home />);
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText(/Tops/i)).toBeInTheDocument();
    });

    it('renders product tabs', () => {
        renderWithProviders(<Home />);
        expect(screen.getByText('Just Dropped')).toBeInTheDocument();
        expect(screen.getByText('Under $25')).toBeInTheDocument();
    });

    it('renders sell banner', () => {
        renderWithProviders(<Home />);
        expect(screen.getByText(/Have clothes you no longer wear/i)).toBeInTheDocument();
    });
});