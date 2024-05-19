import mongoose from "mongoose";

export interface ProductType {
  name: string;
  description: string;
  price: Number;
  image: string;
}

const ProductSchema = new mongoose.Schema<ProductType>({
  name: { required: true, type: String },
  description: { required: true, type: String },
  price: { required: true, type: Number },
  image: String,
});

ProductSchema.virtual("id").get(function () {
  return this._id;
});

ProductSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Products", ProductSchema);
