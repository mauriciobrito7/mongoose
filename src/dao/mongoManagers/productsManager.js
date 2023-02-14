import { productsModel } from "../models/products.model.js";

export default class ProductsManager {
 async getProducts() {
  try {
   return await productsModel.find();
  } catch (error) {
   console.log(error);
   return error;
  }
 }

 async getProductById(id) {
  try {
   return await productsModel.findById(id);
  } catch (error) {
   console.log(error);
   return error;
  }
 }

 async addProduct(product) {
  try {
   return await productsModel.create(product);
  } catch (error) {
   console.log(error);
   return error;
  }
 }

 async updateProduct(id, product) {
  try {
   return await productsModel.findByIdAndUpdate(id, product);
  } catch (error) {
   console.log(error);
   return error;
  }
 }

 async deleteProduct(id) {
  try {
   return await productsModel.findByIdAndDelete(id);
  } catch (error) {
   console.log(error);
   return error;
  }
 }
}
