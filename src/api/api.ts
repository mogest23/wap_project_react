import axios from 'axios';
import type { Product, ProductsResponse, Review } from '../types';

const API_URL = 'https://wap-project.onrender.com/api';

// Create an axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true
});

// Products API
export const productsApi = {
    // Get all products with optional pagination and category filter
    getProducts: async (page = 1, category?: string): Promise<ProductsResponse> => {
        const params: Record<string, string | number> = { page };
        if (category) params.category = category;

        const response = await api.get('/products', { params });
        return response.data;
    },

    // Search products by name
    searchProducts: async (query: string): Promise<Product[]> => {
        const response = await api.get(`/products/search`, {
            params: { q: query }
        });
        return response.data;
    },

    // Get a single product by ID
    getProductById: async (id: string): Promise<Product> => {
        const response = await api.get(`/products/${id}`);
        return response.data;
    },
};

// Reviews API
export const reviewsApi = {
    // Get all reviews for a product
    getProductReviews: async (productId: string): Promise<Review[]> => {
        const response = await api.get(`/products/${productId}/reviews`);
        return response.data;
    },

    // Add a review to a product
    addReview: async (
        productId: string,
        reviewData: { author: string; rating: number; comment: string }
    ): Promise<Review> => {
        const response = await api.post(`/products/${productId}/reviews`, reviewData);
        return response.data;
    },

    // Update a review
    updateReview: async (
        productId: string,
        reviewId: string,
        reviewData: Partial<{ author: string; rating: number; comment: string }>
    ): Promise<Review> => {
        const response = await api.put(
            `/products/${productId}/reviews/${reviewId}`,
            reviewData
        );
        return response.data;
    },

    // Delete a review
    deleteReview: async (productId: string, reviewId: string): Promise<void> => {
        await api.delete(`/products/${productId}/reviews/${reviewId}`);
    },
}; 