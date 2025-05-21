export interface Product {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    dateAdded: string;
    averageRating: number;
    createdAt: string;
    updatedAt: string;
    reviews?: Review[];
}

export interface Review {
    _id: string;
    productId: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
    createdAt: string;
    updatedAt: string;
}

export interface ProductsResponse {
    products: Product[];
    page: number;
    pages: number;
    totalProducts: number;
}

export type ProductsState = {
    products: Product[];
    product: Product | null;
    loading: boolean;
    error: string | null;
    page: number;
    pages: number;
    totalProducts: number;
    category: string | null;
    searchTerm: string | null;
    fetchProducts: (page?: number, category?: string) => Promise<void>;
    fetchProduct: (id: string) => Promise<void>;
    searchProducts: (term: string) => Promise<void>;
    resetProducts: () => void;
    setCategory: (category: string | null) => void;
};

export type ReviewsState = {
    reviews: Review[];
    loading: boolean;
    error: string | null;
    fetchReviews: (productId: string) => Promise<void>;
    addReview: (productId: string, review: Omit<Review, '_id' | 'productId' | 'date' | 'createdAt' | 'updatedAt'>) => Promise<void>;
    updateReview: (productId: string, reviewId: string, review: Partial<Review>) => Promise<void>;
    deleteReview: (productId: string, reviewId: string) => Promise<void>;
}; 