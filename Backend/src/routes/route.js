let express = require("express")
let router = express.Router()
let { createUser, getUser,getUserById, updateUser, deleteUser } = require("../controllers/userController")



router.post("/insertCustomer", createUser)
router.get("/selectCustomers", getUser)
router.get("/selectCustomerById/:userId", getUserById)
router.post("/updateCustomer/:userId", updateUser)
router.post("/deleteCustomer/userId", deleteUser)




module.exports = router;