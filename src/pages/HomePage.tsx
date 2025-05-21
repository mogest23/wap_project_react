import Layout from '../components/layout/Layout';
import ProductList from '../components/product/ProductList';
import ProductFilter from '../components/product/ProductFilter';
import SearchBar from '../components/layout/SearchBar';
import { useProductsStore } from '../store/productsStore';

const HomePage = () => {
    const { category } = useProductsStore();

    return (
        <Layout>
            <SearchBar />
            <div className="mb-8">
                <h1 className="text-3xl font-light tracking-wide text-gray-800">
                    {category ? (
                        <span className="relative">
                            {category}
                            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-800/20"></span>
                        </span>
                    ) : (
                        <span className="relative">
                            All Products
                            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-800/20"></span>
                        </span>
                    )}
                </h1>
            </div>
            <ProductFilter />
            <ProductList />
        </Layout>
    );
};

export default HomePage; 