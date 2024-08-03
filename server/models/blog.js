import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 50,
    },
    body: {
      type: String,
      required: true,
      min: 3,
    },
    category: {
      type: String,
      required: true,
      enum: ["Technology", "Health", "Lifestyle", "Education", "Finance"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
