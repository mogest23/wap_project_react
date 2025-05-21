import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import Layout from '../components/layout/Layout';
import Spinner from '../components/layout/Spinner';
import ReviewList from '../components/review/ReviewList';
import ReviewForm from '../components/review/ReviewForm';
import { useProductsStore } from '../store/productsStore';

const ProductDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { product, loading, error, fetchProduct } = useProductsStore();

    useEffect(() => {
        if (id) {
            fetchProduct(id);
        }
    }, [fetchProduct, id]);

    if (loading) {
        return (
            <Layout>
                <Spinner />
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="text-red-500 text-center py-8">{error}</div>
            </Layout>
        );
    }

    if (!product) {
        return (
            <Layout>
                <div className="text-center py-8">
                    <h2 className="text-xl font-semibold text-gray-700">Product not found</h2>
                    <Link to="/" className="text-green-600 hover:underline mt-2 inline-block">
                        Back to Products
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="mb-6">
                <Link to="/" className="text-green-600 hover:underline flex items-center">
                    <FaArrowLeft className="mr-1" /> Back to Products
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-64 overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://via.placeholder.com/600x400?text=${product.name[0]}`;
                            }}
                        />
                    </div>

                    <div className="p-6 md:w-2/3">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                                <p className="text-gray-600 text-sm mt-1">Category: {product.category}</p>
                            </div>
                            <div className="text-2xl font-bold text-green-600">
                                ${product.price.toFixed(2)}
                            </div>
                        </div>

                        <div className="flex items-center mt-2">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={i < Math.round(product.averageRating) ? 'text-yellow-500' : 'text-gray-300'}
                                    />
                                ))}
                            </div>
                            <span className="ml-2 text-gray-600">
                                {product.averageRating.toFixed(1)} ({product.reviews?.length || 0} reviews)
                            </span>
                        </div>

                        <p className="mt-4 text-gray-700">{product.description}</p>

                        <div className="mt-4 text-sm text-gray-500">
                            Added on {new Date(product.dateAdded).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Write a Review</h2>
                <ReviewForm productId={product._id} />
            </div>

            <div className="mt-8">
                <ReviewList productId={product._id} />
            </div>
        </Layout>
    );
};

export default ProductDetailPage; 