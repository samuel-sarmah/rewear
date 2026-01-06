import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Sell from "./Sell";

// User Interaction test

const renderWithTheme = (component) => {
    return render(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    );
};

describe('Sell Page', () => {
    it('rendres teh sell form', () => {
        renderWithTheme(<Sell />);
        expect(screen.getByText('Sell Your Items')).toBeInTheDocument();
    });

    it('has all required form fields', () => {
        renderWithTheme(<Sell />);
        expect(screen.getByLabelText(/Item Title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Condition/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    });

    it('shows alert on form submission', async () => {
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
        const user = userEvent.setup();

        renderWithTheme(<Sell />);

        // Fill out form(you'd need to add proper labels to the Sell form)
        await user.click(screen.getByRole('button', { name: /List Item/i }));

        // Check if validation prevents submission (form requires fields)
        alertMock.mockRestore();
    });
});