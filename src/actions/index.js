import{ FETCH_PRODUCTS ,FETCH_PRODUCTS_SUCCESS , FETCH_PRODUCTS_FAILURE} from './actionType';

export const fetchProducts = () => ({
        type: FETCH_PRODUCTS,
    })

export const fetchProductsSuccess = (products) => ({
        type: FETCH_PRODUCTS_SUCCESS,
        products,
    })

export const fetchProductsFailure = (error) => ({
        type: FETCH_PRODUCTS_FAILURE,
        error,
    })
