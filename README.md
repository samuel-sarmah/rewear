# ♻️ ReWear

A sustainable fashion marketplace where you can buy and sell pre-loved clothing. Built with React, Vite, and styled-components.

## 🚀 Features

- **Shop** - Browse pre-loved fashion items with filtering by category and condition
- **Sell** - List your own items for sale
- **Product Details** - View detailed information about each item
- **Shopping Cart** - Add items to your cart (state management coming soon)
- **Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router 7** - Client-side routing with `createBrowserRouter`
- **styled-components** - CSS-in-JS styling
- **ESLint** - Code linting

##  Project Structure

```
src/
├── components/
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── FeaturedItems.jsx
│   │   └── CategoryGrid.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   └── products/
│       └── ProductCard.jsx
├── data/
│   └── products.js          # Mock product data
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetail.jsx
│   ├── Sell.jsx
│   ├── About.jsx
│   ├── Cart.jsx
│   └── ErrorPage.jsx
├── styles/
│   ├── theme.js              # Design tokens
│   └── GlobalStyles.js       # Global CSS
├── routes.jsx                # Route configuration
├── App.jsx
└── main.jsx                  # Entry point
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:samuel-sarmah/rewear.git
cd rewear

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests (see Testing section) |

## 🧪 Testing

This project uses **Vitest** for unit testing and **React Testing Library** for component testing.

### Test Structure

```
src/
├── components/
│   └── products/
│       └── ProductCard.test.jsx    # Component tests
├── data/
│   └── products.test.js            # Data/utility tests
├── pages/
│   ├── Home.test.jsx               # Page tests with routing
│   └── Sell.test.jsx               # Form & user interaction tests
└── test/
    └── setup.js                    # Test setup (jest-dom)
```

### Test Types

| Type | File Pattern | Purpose |
|------|--------------|---------|
| **Component** | `*.test.jsx` | Test UI components render correctly |
| **Data** | `*.test.js` | Test data structures and utilities |
| **Page** | `pages/*.test.jsx` | Test pages with routing context |
| **Integration** | `*.test.jsx` | Test user interactions |

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Writing Tests

**Component Test Example:**
```jsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import ProductCard from "./ProductCard";

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
});
```

**Page Test with Router:**
```jsx
import { MemoryRouter } from "react-router-dom";

const renderWithProviders = (component) => {
    return render(
        <MemoryRouter>
            <ThemeProvider theme={theme}>
                {component}
            </ThemeProvider>
        </MemoryRouter>
    );
};
```

### Testing Best Practices

| Practice | Description |
|----------|-------------|
| **Wrap with providers** | Components using theme/router need proper providers |
| **Use `getByRole`** | Prefer role-based queries for accessibility |
| **Test behavior** | Focus on what users see, not implementation |
| **Use `userEvent`** | Simulate realistic user interactions |

## 🎨 Design System

The app uses a consistent design system defined in `src/styles/theme.js`:

### Colors
- **Primary**: `#51cf66` (green)
- **Primary Dark**: `#2f9e44`
- **Hero Background**: `#d0bfff` (purple)
- **Card Background**: `#fff9db` (yellow)

### Category Colors
| Category | Color |
|----------|-------|
| Tops | `#a5d8ff` |
| Bottoms | `#ffc9c9` |
| Dresses | `#b2f2bb` |
| Outerwear | `#ffec99` |
| Shoes | `#eebefa` |
| Accessories | `#ffd8a8` |

## 📄 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, featured items, categories |
| `/shop` | Shop | Product grid with filters |
| `/product/:id` | ProductDetail | Single product view |
| `/sell` | Sell | Form to list new items |
| `/about` | About | Company info and mission |
| `/cart` | Cart | Shopping cart |

## 🔮 Roadmap

- [ ] Add state management (Context API or Zustand)
- [ ] Implement cart functionality
- [ ] Add user authentication
- [ ] Connect to backend API
- [ ] Add search functionality
- [ ] Implement checkout flow
- [ ] Add image upload for selling items

## 📝 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
