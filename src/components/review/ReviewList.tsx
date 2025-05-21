import { useEffect } from 'react';
import { useReviewsStore } from '../../store/reviewsStore';
import ReviewItem from './ReviewItem';
import Spinner from '../layout/Spinner';

interface ReviewListProps {
    productId: string;
}

const ReviewList = ({ productId }: ReviewListProps) => {
    const { reviews, loading, error, fetchReviews } = useReviewsStore();

    useEffect(() => {
        fetchReviews(productId);
    }, [fetchReviews, productId]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (reviews.length === 0) {
        return <div className="text-gray-500 mt-4">No reviews yet. Be the first to review!</div>;
    }

    return (
        <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold">Customer Reviews ({reviews.length})</h3>

            <div className="space-y-4">
                {reviews.map((review) => (
                    <ReviewItem key={review._id} review={review} productId={productId} />
                ))}
            </div>
        </div>
    );
};

export default ReviewList; 