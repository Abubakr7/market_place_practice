import { configureStore } from "@reduxjs/toolkit";
import { brandsApi} from "../api/brands";
import { categoriesApi } from "../api/categories";
import { productsApi } from "../api/products";
import { subCategoiesApi } from "../api/subCategory";

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [subCategoiesApi.reducerPath]: subCategoiesApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      categoriesApi.middleware,
      subCategoiesApi.middleware,
      brandsApi.middleware,
      productsApi.middleware,
    );
  },
});
