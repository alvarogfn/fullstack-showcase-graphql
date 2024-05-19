import mongoose from "mongoose";

export interface ShowcaseType {
  name: string;
  description: string;
  products: string[];
}

const ShowcaseSchema = new mongoose.Schema<ShowcaseType>({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
});

ShowcaseSchema.virtual("id").get(function () {
  return this._id;
});

ShowcaseSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Showcases", ShowcaseSchema);
