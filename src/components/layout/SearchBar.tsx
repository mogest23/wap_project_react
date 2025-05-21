import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useProductsStore } from '../../store/productsStore';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchProducts, fetchProducts } = useProductsStore();

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchTerm.trim().length >= 2) {
                await searchProducts(searchTerm);
            } else if (searchTerm.trim().length === 0) {
                await fetchProducts();
            }
        }, 300); // 300ms delay

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, searchProducts, fetchProducts]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-8">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full py-3 px-4 pl-12 rounded-lg bg-white shadow-sm border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
        </div>
    );
};

export default SearchBar; 