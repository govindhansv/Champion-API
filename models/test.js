import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
  {
    name: String,
    pswd: String,
  },
);

const Test = mongoose.model("Test", TestSchema);
export default Test;
