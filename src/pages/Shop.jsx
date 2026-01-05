import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { products, categories, conditions } from '../data/products';
import ProductCard from "../components/products/ProductCard";

const PageWrapper = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.xl};
`;

const Sidebar = styled.aside`
    width: 200px;
    flex-shrink: 0;
`;

const FilterSection = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FilterTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
`;

const FilterOption = styled.label`
    display: flex,
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    cursor: pointer;
`;

const MainContent = styled.main`
    flex: 1;
`;

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
`;

const ProductLink = styled(Link)`
    text-decoration: none;
`;

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedCondition, setSelectedCondition] = useState('all');


    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        const conditionMatch = selectedCondition === 'all' || product.condition === selectedCondition;

        return categoryMatch && conditionMatch;
    });

    return (
        <PageWrapper>
            <Sidebar>
                <FilterSection>
                    <FilterTitle>Category</FilterTitle>
                    <FilterOption>
                        <input 
                            type="radio" 
                            name="category" 
                            checked={selectedCategory === 'all'}
                            onChange={() => setSelectedCategory('all')}
                        />
                        All
                    </FilterOption>
                    {categories.map(cat => {
                        <FilterOption key={cat.id}>
                            <input 
                                type="radio" 
                                name="category" 
                                checked={selectedCategory === cat.id} 
                                onChange={() => setSelectedCategory(cat.id)}
                            />
                            {cat.icon} {cat.label}
                        </FilterOption>
                    })}
                </FilterSection>

                <FilterSection>
                    <FilterTitle>Condition</FilterTitle>
                    <FilterOption>
                        <input 
                            type="radio" 
                            name="condition" 
                            checked={selectedCondition === 'all'}
                            onChange={() => setSelectedCondition('all')}
                        />
                        All
                    </FilterOption>
                    {conditions.map(cond => (
                        <FilterOption key={cond}>
                            <input 
                                type="radio" 
                                name="condition" 
                                checked={selectedCondition === cond} 
                                onChange={() => setSelectedCondition(cond)}
                            />
                            {cond}
                        </FilterOption>
                    ))}
                </FilterSection>
            </Sidebar>

            <MainContent>
                <PageTitle>Shop All Items</PageTitle>
                <ProductGrid>
                    {filteredProducts.map(product => (
                        <ProductLink key={product.id} to={`/products/${product.id}`}>
                            <ProductCard product={product} />
                        </ProductLink>
                    ))}
                </ProductGrid>
            </MainContent>
        </PageWrapper>
    )
}

export default Shop;