let userModel = require("../models/userModel")

let {uploadFile}=require("./awsController")
const {
    validateString,
    validateRequest,
    validatePassword,
    regexPhoneNumber,
    validateEmail,
    regxValidator,
    imageExtValidator,
    validateObjectId
} = require("../validator/validation");

//  <=================================>[CREATE USER API] <==============================>

const createUser = async function (req, res) {
    try {
        res.setHeader("access-control-allow-origin","*")
        let user = req.body;
        let {username,fname,lname,email,phone,password,cpassword,addressLine1,country,state,city,zipCode}=user
        if (!validateRequest(user)) {
            return res.status(400).json({ status: false, message: "details is required in body" })
        }


        if (!validateString(username)) {
            return res.status(400).json({ status: false, message: "title must be required" })
        }

        let uniqueUsername = await userModel.findOne({ username: username })
            if (uniqueUsername) { return res.status(400).json({ status: false, msg: "This username is already registered" }) }
        
        if (!validateString(fname)) {
            return res.status(400).json({ status: false, message: "name is required" })
        }
        if (!regxValidator(fname)) {
            return res.status(400).json({ status: false, message: "please provide a valid first name" })
        }


        if (!validateString(lname)) {
            return res.status(400).json({ status: false, message: "lname is required" })
        }

        if (!regxValidator(lname)) {
            return res.status(400).json({ status: false, message: "please provide a valid last name" })
        }


        if (!validateString(email)) {
            return res.status(400).json({ status: false, message: "email is required" })
        }
        if (!validateEmail(email)) { return res.status(400).json({ status: false, message: "please provide a valid email" }) }
        let uniqueEmail = await userModel.findOne({ email: email })
        if (uniqueEmail) { return res.status(400).json({ status: false, msg: "This email is already registered" }) }

        if (!validateString(phone)) {
            return res.status(400).json({ status: false, message: "mobile number is required" })
        }
        if (!regexPhoneNumber(phone)) { return res.status(400).json({ status: false, message: "please provide a valid phone number" }) }
        let uniquephone = await userModel.findOne({ phone: phone })
        if (uniquephone) { 
            return res.status(400).json({ status: false, msg: "This phone number is already registered" }) 
        }


        if (!validateString(password)) {
            return res.status(400).json({ status: false, message: "password is required" })
        }
        
        
        if (!validateString(cpassword)) {
            return res.status(400).json({ status: false, message: "confirm password is required" })
        }

        if(password!==cpassword){
            return res.status(400).json({ status: false, message: "password not matched" })
        }

        let profile = req.files;
        if (profile && profile.length > 0) {
            if (!imageExtValidator(profile[0].originalname)) { return res.status(400).json({ status: false, message: "only image file is allowed" }) }
            let uploadedFileURL = await uploadFile(profile[0]);
            user.profileImage = uploadedFileURL
        } 
        
        if (!validateString(addressLine1)) {
            return res.status(400).json({ status: false, message: "address line 1 must be required" })
        }
         
        
        if (!validateString(country)) {
            return res.status(400).json({ status: false, message: "country must be required" })
        }
         
        
        if (!validateString(state)) {
            return res.status(400).json({ status: false, message: "state must be required" })
        }

        if (!validateString(city)) {
            return res.status(400).json({ status: false, message: "state must be required" })
        }

        if (!validateString(zipCode)) {

            return res.status(400).json({ status: false, message: "zipCode must be required" })
        }

        let userCreated = await userModel.create(user)
        res.status(201).json({
            status: true,
            message: "Success",
            data: userCreated
        })

    } catch (error) {
        return res.status(500).json({ status: false, message: error.message })

    }
};

let getUser=async function(req,res){
   try{ res.setHeader("access-control-allow-origin","*")
    let {name,username,country,state,city}=req.query
   let users=await userModel.find({isDeleted:false})
   if(Object.keys(users)===0){
    return res.status(404).json({ status: false, message: "no userdata found" })
   }
   
   if (name) {
    
    users = users.filter(users1 => (users1.fname+" "+users1.lname).includes(name)).map(assign => assign)
    }

    if (username) {
       
        users = users.filter(users1 => users1.username.includes(username)).map(assign => assign)
        }

        if (country) {
           
            users = users.filter(users1 => users1.country.includes(coiuntry)).map(assign => assign)
            }
            if (state) {
                
                users = users.filter(users1 => users1.state.includes(state)).map(assign => assign)
                }
                if (city) {
                   
                    users = users.filter(users1 => users1.city.includes(city)).map(assign => assign)
                    }



    res.status(200).json({ status: true, data: users })
}
catch(err){
    res.status(500).send({status:false,message:err.message})
}
}

let getUserById=async function(req,res){
    res.setHeader("access-control-allow-origin","*")
    let userId=req.params.userId
    if(!validateObjectId){
        return res.status(400).json({ status: false, message: "please provide a avalid userId" })
    }
     let getUser=await userModel.findOne({_id:userId,isDeleted:false})
     if(!getUser){
        return res.status(404).json({ status: false, message: "This customer data not found or deleted" })
    }
     res.status(200).json({status:true,data:getUser})

}


let updateUser=async function(req,res){
    res.setHeader("access-control-allow-origin","*")
    let userId=req.params.userId
    if(!validateObjectId){
        return res.status(400).json({ status: false, message: "please provide a avalid userId" })
    }
    let user=userModel.findOne({_id:userId,isDeleted:false})

    if(!user){
        return res.status(404).json({ status: false, message: "This customer data not found or deleted" })
    }
    let{username,fname,lname,email,phone,password,cpassword,addressLine1,country,state,city,zipCode}=req.body

    if(validateString(username)){
        let uniqueUsername = await userModel.findOne({ username: username })
        if (uniqueUsername) {
             return res.status(400).json({ status: false, msg: "This username is already exists" })
             }
    
        user.username=username
    }
    if(validateString()){
        if (!regxValidator(fname)) {
            return rfnamees.status(400).json({ status: false, message: "please provide a valid first name" })
        }
        user.fname=fname
    }
    if(validateString(lname)){
        if (!regxValidator(lname)) {
            return res.status(400).json({ status: false, message: "please provide a valid last name" })
        }
        user.lname=lname
    }
    if(validateString(email)){
        if (!validateEmail(email)) { 
            return res.status(400).json({ status: false, message: "please provide a valid email" })
            }
            let uniqueEmail = await userModel.findOne({ email: email })
            if (uniqueEmail) {
                 return res.status(400).json({ status: false, msg: "This email is already exists" })
                 }
                 user.email=email
    }
    if(validateString(phone)){
        if (!regexPhoneNumber(phone)) {
             return res.status(400).json({ status: false, message: "please provide a valid phone number" }) 
            }
            let uniquephone = await userModel.findOne({ phone: phone })
            if (uniquephone) {
                 return res.status(400).json({ status: false, msg: "This phone number is already exists" })
                 }
                 user.phone=phone
    }

    
    if(validateString(password)){
        if (!validatePassword(password)) {
            return res.status(400).json({ status: false, message: "pleae provide a valid password" })
        }  
        user.password=password
        if (!validateString(cpassword)) {
            return res.status(400).json({ status: false, message: "confirm password is required" })
        }

        if(password!==cpassword){
            return res.status(400).json({ status: false, message: "password not matched" })
        }
        user.cpassword=cpassword
    }

    if(validateString(addressLine1)){
        user.addressLine1=addressLine1
    }
    if(validateString(country)){
        user.country=country
    }

    if(validateString(state)){
        user.username=username
    }
    if(validateString(city)){
        user.city=city
    }
    if(validateString(zipCode)){
        user.zipCode=zipCode
    }
    user.save()
    res.status(200).json({status:true,data:user})

}

let deleteUser=async function(req,res){
    res.setHeader("access-control-allow-origin","*")
    let userId=req.params.userId
    if(!validateObjectId){
        return res.status(400).json({ status: false, message: "please provide a avalid userId" })
    }
    let deletedUser=userModel.findOneAndUpdate({_id:userId,isDeleted: false }, { $set: { isDeleted: true} })
    if(!deletedUser){
        return res.status(404).json({ status: false, message: "This customer not found or deleted" })
    }
    res.status(200).json({status:true,message:"Customer data deleted succesfully"})
}

module.exports = { createUser, getUser,getUserById , updateUser, deleteUser}