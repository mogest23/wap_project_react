import { useState } from 'react';
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa';
import { useReviewsStore } from '../../store/reviewsStore';
import type { Review } from '../../types';
import ReviewForm from './ReviewForm';

interface ReviewItemProps {
    review: Review;
    productId: string;
}

const ReviewItem = ({ review, productId }: ReviewItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const { deleteReview } = useReviewsStore();

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            await deleteReview(productId, review._id);
        }
    };

    if (isEditing) {
        return (
            <ReviewForm
                productId={productId}
                review={review}
                onCancel={() => setIsEditing(false)}
            />
        );
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center">
                        <h4 className="font-semibold">{review.author}</h4>
                        <div className="ml-2 flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                        {new Date(review.date).toLocaleDateString()}
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-gray-500 hover:text-green-600"
                        aria-label="Edit review"
                    >
                        <FaEdit />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="text-gray-500 hover:text-red-500"
                        aria-label="Delete review"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>

            <p className="mt-3 text-gray-700">{review.comment}</p>
        </div>
    );
};

export default ReviewItem; 