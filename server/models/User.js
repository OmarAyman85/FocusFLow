import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//Introducing the user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      require: true,
      min: 8,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    tasks: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
    //A flag indicating the admin for the multiple people tasks
    isAdmin: {
      type: Boolean,
      default: false,
    },
    //A flag indicating the activity for deactivating accounts
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    bio: {
      type: String,
      default: "",
    },
    socialLinks: {
      type: Map,
      of: String,
    },
  },
  { timestamps: true }
);

// Pre-save middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  // Hash the password with a salt rounds value of 10
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
  next();
});

// Comparing passwords during login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//exporting the database and creating the mongo model
const User = mongoose.model("User", userSchema);
export default User;
