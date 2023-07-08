import { createApi } from "@reduxjs/toolkit/query/react";
import GlobalBaseQuery from "./index";
import { providesList } from "./index";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: GlobalBaseQuery,
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "products",
      providesTags: (result) => providesList(result, "Product"),
    }),
    addProducts:build.mutation({
        query:(body)=>({
            url:"products",
            method:"POST",
            body,
        }),
        invalidatesTags: [{ type: "Product", id: "LIST" }],

    }),
    editProducts:build.mutation({
      query:({id, ...body})=>({
        url:`products/${id}`,
        method:"PATCH",
        body,

      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    delProducts:build.mutation({
      query:(id)=>({
        url:`products/${id}`,
        method:"DELETE",

      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    })
    
  }),
});
export const { useGetProductsQuery,useAddProductsMutation,useEditProductsMutation,useDelProductsMutation } = productsApi;

