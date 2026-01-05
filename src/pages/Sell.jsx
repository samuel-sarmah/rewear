import styled from "styled-components";

const PageWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing.xl};
    max-width: 600px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Subtitle = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.textMuted};
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: ${({ theme }) => theme.fontSizes.base};
`;

const Select = styled.select`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.textMuted};
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: ${({ theme }) => theme.fontSizes.base};
`;

const TextArea = styled.textarea`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.textMuted};
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: ${({ theme }) => theme.fontSizes.base};
    min-height: 100px;
    resize: vertical;
`;

const SubmitButton = styled.button`
    margin-top: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Sell = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Item submitted for review!');
    };

    return (
        <PageWrapper>
            <Title>💰 Sell Your Items</Title>
            <Subtitle>Give Your Clothes a second life and earn some cash</Subtitle>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Item Title</Label>
                    <input 
                        type="text" 
                        placeholder="e.g., Vintage Denim Jacket" 
                        required />
                </FormGroup>
                <FormGroup>
                    <Label>Category</Label>
                    <Select required>
                        <option value="">Select a category</option>
                        <option value="tops">Tops</option>
                        <option value="bottoms">Bottoms</option>
                        <option value="dresses">Dresses</option>
                        <option value="outerwear">Outerwear</option>
                        <option value="shoes">Shoes</option>
                        <option value="accessories">Accessories</option>
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Label>Condition</Label>
                    <Select required>
                        <option value="">Select condition</option>
                        <option value="like-new">Like New</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Label>Price ($)</Label>
                    <input type="number" min="1" placeholder="25" required />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <TextArea placeholder="Describe your item ..." required />
                </FormGroup>
                <SubmitButton type="submit">List Item for Sale</SubmitButton>
            </Form>
        </PageWrapper>
    );
};

export default Sell;