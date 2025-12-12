import mongoose from "mongoose";

interface IUser {
  _id?: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  mobile?: string;
  role: "user" | "deliveryBoy" | "admin";
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "deliveryBoy", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
