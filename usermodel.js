const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please enter the user name"] },
    city:{
        type: String
    }

  }
);
const user = mongoose.model("user", UserSchema);
module.exports = user;