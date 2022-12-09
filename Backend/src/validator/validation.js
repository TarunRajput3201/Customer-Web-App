const mongoose = require("mongoose");




const validateNumber = function validateNumber(value) {
  if (typeof value == "number") {
    return true;
  }
  return false;
};

const validateString = function (name) {
  if (typeof name == undefined || typeof name == null) return false;
  if (typeof name == "string" && name.trim().length == 0) return false;

  return true;
};


const validateEmail = function (value) {
  let re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return re.test(value);

  
};

const validatePassword = function (value) {
  
  value.length<8 ? true:false
  value.length>15 ? true:false

  
};

const validateRequest = function (value) {
  if (Object.keys(value).length == 0) {
    return false;
  } else return true;
};
let validateObjectId = function (ObjectId) {
  return mongoose.isValidObjectId(ObjectId)
}
// mongoose.Types.ObjectId.isValid

const passwordLength = function (password) {
  if (password.length >= 8 && password.length <= 15) {
    return true;
  } else return false;
};

const regxName = function (val) {
  let regx = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;
  return regx.test(val);
}

const regexPhoneNumber = function (val) {
  let regx = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
  return regx.test(val);
}

const regxValidator = function (val) {
  let regx = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;
  return regx.test(val);
}

const imageExtValidator = function (val) {
  let regex = /\.(gif|jpe?g|tiff?|png|webp|bmp|jpg|JPG)$/
  return regex.test(val)
}


module.exports = {
  validateString,
  validateEmail,
  validatePassword,
  validateRequest,
  validateNumber,
  validateObjectId,
  passwordLength,
  regxName,
  regexPhoneNumber,
  regxValidator,
  imageExtValidator
};