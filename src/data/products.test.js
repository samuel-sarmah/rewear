import { describe, it, expect } from "vitest";
import { products, categories, conditions } from "./products";

// Data Test

describe('Products Data', () => {
    it('should have at least 10 products', () => {
        expect(products.length).toBeGreaterThanOrEqual(10);
    });

    it('each product should have required fields', () => {
        products.forEach(product => {
            expect(product).toHaveProperty('id');
            expect(product).toHaveProperty('title');
            expect(product).toHaveProperty('price');
            expect(product).toHaveProperty('condition');
            expect(product).toHaveProperty('category');
        });
    });

    it('should have 6 categories', () => {
        expect(categories).toHaveLength(6);
    });

    it('conditions should include standard values', () => {
        expect(conditions).toContain('Like New');
        expect(conditions).toContain('Excellent');
        expect(conditions).toContain('Good');
    });
});