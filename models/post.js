import mongoose from "mongoose";
export const MODEL_NAME = "Post";
var Schema = mongoose.Schema;

let post = new Schema(
  {
    title: { type: String },
    description: { type: String },
    image: {
      type: String,
      default: "/images/users/user.svg",
      trim: true,
      maxLength: 150,
    },
  },
  { timestamps: true }
);

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, post);
