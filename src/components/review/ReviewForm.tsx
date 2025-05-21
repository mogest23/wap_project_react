import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useReviewsStore } from '../../store/reviewsStore';
import type { Review } from '../../types';

interface ReviewFormProps {
    productId: string;
    review?: Review;
    onCancel?: () => void;
}

const ReviewForm = ({ productId, review, onCancel }: ReviewFormProps) => {
    const [author, setAuthor] = useState(review?.author || '');
    const [rating, setRating] = useState(review?.rating || 5);
    const [comment, setComment] = useState(review?.comment || '');
    const [hover, setHover] = useState(0);

    const { addReview, updateReview } = useReviewsStore();

    const isEditMode = !!review;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!author.trim() || !comment.trim()) {
            alert('Please fill in all fields');
            return;
        }

        if (isEditMode && review) {
            await updateReview(productId, review._id, {
                author,
                rating,
                comment
            });
            if (onCancel) onCancel();
        } else {
            await addReview(productId, {
                author,
                rating,
                comment
            });

            // Reset form
            setAuthor('');
            setRating(5);
            setComment('');
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">
                {isEditMode ? 'Edit Review' : 'Add Review'}
            </h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label
                        htmlFor="author"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rating
                    </label>
                    <div className="flex">
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;

                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={`text-2xl ${ratingValue <= (hover || rating)
                                        ? 'text-yellow-500'
                                        : 'text-gray-300'
                                        }`}
                                    onClick={() => setRating(ratingValue)}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(0)}
                                >
                                    <FaStar />
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Your Review
                    </label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    ></textarea>
                </div>

                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        {isEditMode ? 'Update Review' : 'Submit Review'}
                    </button>

                    {onCancel && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ReviewForm; 