let mongoose = require("mongoose")
let userSchema = new mongoose.Schema({
  username:{ type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: {type:String,required:true, unique: true},
  password: { type: String, required: true },
  cpassword: { type: String, required: true},
  profileImage:{type:String},
  addressLine1:{ type: String, required: true },
  country:{ type: String, required: true },
  state:{ type: String, required: true },
  city:{ type: String, required: true },
  zipCode:{ type: String, required: true },
  isDeleted:{type:Boolean ,default:false}
},
  { timestamps: true })
module.exports = mongoose.model('User', userSchema)