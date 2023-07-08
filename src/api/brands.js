import { createApi } from "@reduxjs/toolkit/query/react";
import GlobalBaseQuery from "./index";
import { providesList } from "./index";

export const brandsApi = createApi({
  reducerPath: "brands",
  baseQuery: GlobalBaseQuery,

  tagTypes: ["Brand"],
  endpoints: (build) => ({
    getBrands: build.query({
      query: () => "brands",
      providesTags: (result) => providesList(result, "Brand"),
    }),
    addBrand: build.mutation({
      query: (body) => ({
        url: "brands",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Brand", id: "LIST" }],
    }),
    editBrand: build.mutation({
      query: ({ id, ...body }) => ({
        url: `brands/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Brand", id: "LIST" }],
    }),
    deleteBrand: build.mutation({
      query: (id) => ({
        url: `brands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Brand", id: "LIST" }],
    }),
  }),
});

export const {
  useGetBrandsQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useEditBrandMutation,
} = brandsApi;
