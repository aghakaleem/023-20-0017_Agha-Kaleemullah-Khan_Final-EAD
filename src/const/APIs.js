export const BASE_URL_SERVER="https://fakestoreapi.com"
export const APIs = {
        ECOMMERCE: {
            PRODUCTS: {
                GET_ALL_PRODUCT: `${BASE_URL_SERVER}/products`,
                ADD_PRODUCT: `${BASE_URL_SERVER}/products`,
                GET_SINGLE_PRODUCT: `${BASE_URL_SERVER}/products`,
                GET_RELATED_PRODUCTS: `${BASE_URL_SERVER}/products/category`
            },
            CART: {},

        },
        // PORTFOLIO: {
        //     REVIEWS: {
        //         GET_ALL_REVIEWS: `${BASE_URL_SERVER_FAHAD}/api/reviews`
        //     }
        // },

        USERS: {}
}
