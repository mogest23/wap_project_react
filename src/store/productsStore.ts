import { create } from 'zustand';
import type { ProductsState } from '../types';
import { productsApi } from '../api/api';

export const useProductsStore = create<ProductsState>((set) => ({
    products: [],
    product: null,
    loading: false,
    error: null,
    page: 1,
    pages: 1,
    totalProducts: 0,
    category: null,
    searchTerm: null,

    fetchProducts: async (page = 1, category) => {
        try {
            set({ loading: true, error: null });

            // Always update the category state when provided
            if (category !== undefined) {
                set({ category });
            }

            const data = await productsApi.getProducts(page, category || undefined);

            set({
                products: data.products,
                page: data.page,
                pages: data.pages,
                totalProducts: data.totalProducts,
                loading: false
            });
        } catch (error) {
            set({
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to fetch products'
            });
        }
    },

    fetchProduct: async (id) => {
        try {
            set({ loading: true, error: null });

            const product = await productsApi.getProductById(id);

            set({
                product,
                loading: false
            });
        } catch (error) {
            set({
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to fetch product'
            });
        }
    },

    searchProducts: async (term) => {
        try {
            set({ loading: true, error: null, searchTerm: term });

            const products = await productsApi.searchProducts(term);

            set({
                products,
                loading: false,
                // Reset pagination when searching
                page: 1,
                pages: 1,
                totalProducts: products.length
            });
        } catch (error) {
            set({
                loading: false,
                error: error instanceof Error ? error.message : 'Failed to search products'
            });
        }
    },

    resetProducts: () => {
        set({
            products: [],
            page: 1,
            pages: 1,
            totalProducts: 0,
            category: null,
            searchTerm: null
        });
    },

    setCategory: (category) => {
        set({ category });
    }
})); 