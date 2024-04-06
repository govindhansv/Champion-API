import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // firstName: {
    //   type: String,
    //   required: true,
    //   min: 2,
    //   max: 50,
    // },
    // lastName: {
    //   type: String,
    //   required: true,
    //   min: 2,
    //   max: 50,
    // },
    name: {
      type: String,
      max: 50,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
    },
    pswd: {
      type: String,
      // min: 5,
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
    },
    pincode: {
      type: String,
    },
    longitude: {
      type: String,
      default:" ",
    },
    latitude: {
      type: String,
      default:" "
    },
    deviceid: {
      type: String,
      default:" "
    },
    cpswd: {
      type: String,
    },
    // picturePath: {
    //   type: String,
    //   default: "",
    // },
    savedstores: {
      type: Array,
      default: [],
    },
    // occupation: String,
    // viewedProfile: Number,
    // impressions: Number,
  },
);

const User = mongoose.model("User", UserSchema);
export default User;
