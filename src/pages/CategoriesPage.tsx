import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useProductsStore } from '../store/productsStore';

// A list of sample categories with icons/emojis
const categories = [
    { name: 'Electronics', emoji: '📱' },
    { name: 'Clothing', emoji: '👕' },
    { name: 'Books', emoji: '📚' },
    { name: 'Home & Kitchen', emoji: '🏠' },
    { name: 'Beauty', emoji: '💄' },
    { name: 'Toys', emoji: '🧸' },
    { name: 'Sports', emoji: '⚽' },
    { name: 'Food', emoji: '🍔' }
];

const CategoriesPage = () => {
    const navigate = useNavigate();
    const { setCategory, fetchProducts, resetProducts } = useProductsStore();

    const handleCategoryClick = (category: string) => {
        // Reset any existing filters first
        resetProducts();
        // Then set the new category
        setCategory(category);
        fetchProducts(1, category);
        navigate('/');
    };

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-6">Categories</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => handleCategoryClick(category.name)}
                        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
                    >
                        <span className="text-4xl mb-2">{category.emoji}</span>
                        <span className="font-medium">{category.name}</span>
                    </button>
                ))}
            </div>
        </Layout>
    );
};

export default CategoriesPage; 