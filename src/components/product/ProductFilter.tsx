import { useProductsStore } from '../../store/productsStore';

// A list of sample categories - in a real app, these would likely come from an API
const categories = [
    'All',
    'Electronics',
    'Clothing',
    'Books',
    'Home & Kitchen',
    'Beauty',
    'Toys',
    'Sports'
];

const ProductFilter = () => {
    const { setCategory, fetchProducts, category, searchTerm } = useProductsStore();

    const handleCategoryChange = (newCategory: string | null) => {
        setCategory(newCategory);
        fetchProducts(1, newCategory || undefined);
    };

    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Categories</h2>

            {searchTerm && (
                <div className="mb-4 text-sm">
                    <span className="text-gray-600">Search results for: </span>
                    <span className="font-medium">"{searchTerm}"</span>
                </div>
            )}

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat === 'All' ? null : cat)}
                        className={`px-3 py-1 rounded-full text-sm ${(cat === 'All' && !category) || (cat === category)
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductFilter; 