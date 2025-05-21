import { useEffect } from 'react';
import { useProductsStore } from '../../store/productsStore';
import ProductCard from './ProductCard';
import Spinner from '../layout/Spinner';
import Pagination from '../layout/Pagination';

const ProductList = () => {
    const {
        products,
        loading,
        error,
        page,
        pages,
        fetchProducts,
        category,
        searchTerm
    } = useProductsStore();

    useEffect(() => {
        fetchProducts(page, category || undefined);
    }, [fetchProducts, page, category]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">{error}</div>;
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-8">
                <h2 className="text-xl font-semibold text-gray-700">
                    {searchTerm ? `No results found for "${searchTerm}"` : 'No products found'}
                </h2>
                <p className="text-gray-500 mt-2">
                    Try adjusting your search or filter criteria.
                </p>
            </div>
        );
    }

    return (
        <div>
            {searchTerm && (
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Search results for "{searchTerm}"
                </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {pages > 1 && <Pagination currentPage={page} totalPages={pages} />}
        </div>
    );
};

export default ProductList; 