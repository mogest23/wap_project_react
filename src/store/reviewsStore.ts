import { create } from 'zustand';
import type { ReviewsState } from '../types';
import { reviewsApi } from '../api/api';

export const useReviewsStore = create<ReviewsState>((set) => ({
    reviews: [],
    loading: false,
    error: null,

    fetchReviews: async (productId) => {
        try {
            set({ loading: true, error: null });

            const reviews = await reviewsApi.getProductReviews(productId);

            set({
                reviews,
                loading: false
            });
        } catch (error) {
            set({
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to fetch reviews'
            });
        }
    },

    addReview: async (productId, review) => {
        try {
            set({ loading: true, error: null });

            const newReview = await reviewsApi.addReview(productId, {
                author: review.author,
                rating: review.rating,
                comment: review.comment
            });

            set((state) => ({
                reviews: [...state.reviews, newReview],
                loading: false
            }));
        } catch (error) {
            set({
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to add review'
            });
        }
    },

    updateReview: async (productId, reviewId, reviewData) => {
        try {
            set({ loading: true, error: null });

            const updatedReview = await reviewsApi.updateReview(productId, reviewId, {
                author: reviewData.author,
                rating: reviewData.rating,
                comment: reviewData.comment
            });

            set((state) => ({
                reviews: state.reviews.map((review) =>
                    review._id === reviewId ? updatedReview : review
                ),
                loading: false
            }));
        } catch (error) {
            set({
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to update review'
            });
        }
    },

    deleteReview: async (productId, reviewId) => {
        try {
            set({ loading: true, error: null });

            await reviewsApi.deleteReview(productId, reviewId);

            set((state) => ({
                reviews: state.reviews.filter((review) => review._id !== reviewId),
                loading: false
            }));
        } catch (error) {
            set({
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to delete review'
            });
        }
    }
})); 