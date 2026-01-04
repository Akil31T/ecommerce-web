import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = { 
    PRODUCTS: '/products',
    CATEGORIES: '/categories',
    ORDERS: '/orders',
    login: '/users/login',
} 

const THEME = typeof window !== "undefined" ? localStorage.getItem("theme") : null;

export const DEFAULT_THEME = THEME === "dark" ? "dark" : "light";

export const HOMESLIDER={
    IMAGES: [
        '/HomeSlider/1.png',
        '/HomeSlider/2.png',
        '/HomeSlider/3.png',
        // '/HomeSlider/4.jpg',
    ]
}
