import { del, get, post, put } from "./apiHelpers"

export const getProductsCall = () => get('/api/v1/products')