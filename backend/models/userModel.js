import mongoose from "mongoose";

const useSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);


export default mongoose.model("user",useSchema);