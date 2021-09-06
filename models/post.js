import mongoose from "mongoose";
export const MODEL_NAME = "Post";
var Schema = mongoose.Schema;

let post = new Schema(
  {
    title: { type: String },
    description: { type: String },
    public_id: String,
    url: String,
  },
  { timestamps: true }
);

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, post);
