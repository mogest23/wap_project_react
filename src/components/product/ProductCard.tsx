import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import type { Product } from '../../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link to={`/product/${product._id}`}>
                <div className="h-48 overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/300x200?text=${product.name[0]}`;
                        }}
                    />
                </div>

                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {product.name}
                    </h3>

                    <div className="mt-1">
                        <div className="flex items-center text-yellow-500">
                            <FaStar />
                            <span className="ml-1 text-gray-500 text-sm">
                                {product.averageRating > 0 ? product.averageRating.toFixed(1) : 'No review yet'}
                            </span>
                        </div>
                        <span className="text-gray-500 text-sm mt-1 block">
                            {product.category}
                        </span>
                    </div>

                    <p className="mt-2 text-gray-600 text-sm h-12 overflow-hidden">
                        {product.description.substring(0, 80)}
                        {product.description.length > 80 ? '...' : ''}
                    </p>

                    <div className="mt-3">
                        <span className="text-green-600 font-bold">
                            ${product.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard; 