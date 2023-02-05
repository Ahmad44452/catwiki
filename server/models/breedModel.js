const mongoose = require("mongoose");


const breedSchema = new mongoose.Schema({
  breedId: {
    type: String,
  },
  referenceImageId: {
    type: String,
  },
  searches: {
    type: Number,
    default: 0
  }
})

userSchema.pre("save", async function (next) {
  let user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }
  next();
})

userSchema.methods.generateToken = function () {
  let user = this;
  const userObj = { _id: user._id.toHexString(), email: user.email };
  const token = jwt.sign(userObj, process.env.DB_SECRET, { expiresIn: '1d' });
  return token;
}

userSchema.methods.comparePassword = async function (enteredPassword) {
  let user = this;
  const match = await bcrypt.compare(enteredPassword, user.password);
  return match;
}

userSchema.statics.isEmailTaken = async function (enteredEmail) {
  const user = await this.findOne({ email: enteredEmail });
  return !!user;
}


const User = mongoose.model("User", userSchema);
module.exports = { User };