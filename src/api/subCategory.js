import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import GlobalBaseQuery from "./index";
import { providesList } from "./index";

export const subCategoiesApi = createApi({
  reducerPath: "subCategoriesApi",
  baseQuery: GlobalBaseQuery,
  tagTypes: ["Subcategory"],
  endpoints: (build) => ({
    getSubCategories: build.query({
      query: () => "subCategories",
      providesTags: (result) => providesList(result, "Subcategory"),
    }),
    addSubcategory: build.mutation({
      query: (body) => ({
        url: "subCategories",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Subcategory", id: "LIST" }],
    }),
    editSubcategory: build.mutation({
      query: ({ id, ...body }) => ({
        url: `subCategories/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Subcategory", id: "LIST" }],
    }),
    deleteSubcategory: build.mutation({
      query: (id) => ({
        url: `subCategories/${id}`,
        method:"DELETE",
      }),
      invalidatesTags: [{ type: "Subcategory", id: "LIST" }],
    }),
  }),
});
export const {
  useGetSubCategoriesQuery,
  useAddSubcategoryMutation,
  useEditSubcategoryMutation,
  useDeleteSubcategoryMutation,
} = subCategoiesApi;
