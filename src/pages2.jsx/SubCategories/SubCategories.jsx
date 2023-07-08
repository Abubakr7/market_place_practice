import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import { AddCircle, Edit } from "@mui/icons-material";
import * as yup from "yup";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetCategoriesQuery,
} from "../../api/categories";
import Title from "../../Layout2/components/Title";
import MuiCard from "../Categories/components/MuiCard";
import MuiModal from "../Categories/components/MuiModal";
import { useFormik } from "formik";
import { singleFile } from "../../api/files";
import { color } from "@mui/system";
import {
  useAddSubcategoryMutation,
  useDeleteSubcategoryMutation,
  useEditSubcategoryMutation,
  useGetSubCategoriesQuery,
} from "../../api/subCategory";
import { useGetBrandsQuery } from "../../api/brands";

const SubCategories = () => {
  const { data = [], isLoading } = useGetSubCategoriesQuery();
  const [add] = useAddSubcategoryMutation();
  const [edit] = useEditSubcategoryMutation();
  const [del] = useDeleteSubcategoryMutation();
  const { data: data1 = [] } = useGetCategoriesQuery();
  const { data:brands=[] } =useGetBrandsQuery();
  


  console.log(brands);



  const [addModal, setAddModal] = useState(false);
  const [img, setImg] = useState("");
  const [editModal, setEditModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      img: "",
      categoryId: "",
      brands: [],
    },
    validationSchema: yup.object({
      name: yup
        .string("Enter category name")
        .min(3, "Name should be of minimum 3 characters length")
        .required("Name is required"),
        categoryId: yup
        .number("Choose a category")
        .required("Category is required"),
    }),
    onSubmit: async (values) => {
      let category = { ...values };
      let formData = new FormData();
      formData.append("file", img);
      const file = await singleFile(formData);
      category.img = file.img;
      // category.categoryId = age;
      add(category);
      setAddModal(false);
    },
  });
  const formik_update = useFormik({
    initialValues: {
      id: null,
      name: "",
      img: "",
      brands:[]
    },
    validationSchema: yup.object({
      name: yup
        .string("Enter category name")
        .min(3, "Name should be of minimum 3 characters length")
        .required("Name is required"),
    }),
    onSubmit: async (values) => {
      let category = { ...values };
      if (img) {
        let formData = new FormData();
        formData.append("file", img);
        const file = await singleFile(formData);
        category.img = file.img;
        
      }

      edit(category);
      setEditModal(false);
    },
  });

  return (
    <div>
      <Title>Subcategories</Title>

      <Grid container spacing={2} direction="row" >
        {data.length > 0 &&
          data.map((subCategory) => {
            return (
              <Grid key={subCategory.id} item xs={12} sm={6} md={4} lg={3}>
                <MuiCard name={subCategory.name} img={subCategory.img}>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      formik_update.setFieldValue("id", subCategory.id);
                      formik_update.setFieldValue("img", subCategory.img);
                      formik_update.setFieldValue("name", subCategory.name);
                      setEditModal(true);
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      del(subCategory.id);
                    }}
                  >
                    <DeleteIcon sx={{ color: "gray" }} />
                  </IconButton>
                  
                </MuiCard>
              </Grid>
            );
          })}
        <Grid item alignSelf="flex-end">
          <IconButton color="primary" onClick={() => setAddModal(true)}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <MuiModal
        open={addModal}
        handleClose={() => setAddModal(false)}
        title="Add Category"
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
           <TextField
            sx={{ mb: 2 }}
            fullWidth
            className="px-2 my-2"
            variant="outlined"
            name="categoryId"
            id="category"
            select
            label="Category"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
            error={
              formik.touched.categoryId && Boolean(formik.errors.categoryId)
            }
            helperText={formik.touched.categoryId && formik.errors.categoryId}
          >
            <MenuItem key={""} value={""}>
              Choose category
            </MenuItem>
            {data1.length > 0 &&
              data1.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            className="px-2 my-2"
            variant="outlined"
            name="brands"
            id="brands"
            select
            SelectProps={{
              multiple: true,
              value: formik.values.brands,
              onChange: formik.handleChange,
              error: formik.touched.brands && Boolean(formik.errors.brands),
              helperText: formik.touched.brands && formik.errors.brands,
            }}
            label="Brands"
          >
            <MenuItem key={""} value={""}>
              Choose category
            </MenuItem>
            {brands.length > 0 &&
              brands.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>

          <input
            type="file"
            name="img"
            onChange={(event) => {
              setImg(event.target.files[0]);
            }}
          />
          <Button
            color="primary"
            variant="contained"
            sx={{ mt: 3 }}
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </MuiModal>
    
         <MuiModal
        open={editModal}
        handleClose={() => setEditModal(false)}
        title="Edit Category"
      >
        <form onSubmit={formik_update.handleSubmit}>
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            id="name"
            name="name"
            label="Name"
            value={formik_update.values.name}
            onChange={formik_update.handleChange}
            error={
              formik_update.touched.name && Boolean(formik_update.errors.name)
            }
            helperText={formik_update.touched.name && formik_update.errors.name}
          />
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            className="px-2 my-2"
            variant="outlined"
            name="categoryId"
            id="category"
            select
            label="Category"
            value={formik_update.values.categoryId}
            onChange={formik_update.handleChange}
            error={
              formik_update.touched.categoryId &&
              Boolean(formik_update.errors.categoryId)
            }
            helperText={
              formik_update.touched.categoryId &&
              formik_update.errors.categoryId
            }
          >
            <MenuItem key={""} value={""}>
              Choose category
            </MenuItem>
            {data1.length > 0 &&
              data1.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            className="px-2 my-2"
            variant="outlined"
            name="brands"
            id="brands"
            select
            SelectProps={{
              multiple: true,
              value: formik_update.values.brands,
              onChange: formik_update.handleChange,
              error:
                formik_update.touched.brands &&
                Boolean(formik_update.errors.brands),
              helperText:
                formik_update.touched.brands && formik_update.errors.brands,
            }}
            label="Brands"
          >
            <MenuItem key={""} value={""}>
              Choose category
            </MenuItem>
            {brands.length > 0 &&
              brands.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
          <input
            type="file"
            name="img"
            onChange={(event) => {
              setImg(event.target.files[0]);
            }}
          />
          <Button
            color="primary"
            variant="contained"
            sx={{ mt: 3 }}
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </MuiModal>
    </div>
  );
};

export default SubCategories;
