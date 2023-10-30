const ash = require('express-async-handler')

const User = require('../models/userModel')

const getAllAddressesOfUser = ash( async(req,res) => {
    res.status(200).json({address:req.user.address})
})

const getSingleAddressesOfUser = ash( async(req,res) => {
    const id = req.params.id
    const address = req.user.address.find((item) => item.id === id)
    res.status(200).json({address})
})

// Add User Address
const addUserAddress = ash(async (req, res) => {
    
    const { fullName, mobileNo, pincode,
        state, city, houseNo, street, landmark } = req.body

    if (!fullName || !mobileNo || !pincode || !state || !city ||
        !houseNo || !street || !landmark) {
           return res.status(200).json({ message: "Please Enter The Required Field", isSaved:false})
    } else {
        const address = {name:fullName, mobileNo, houseNo, street, landmark, city, state, pincode}
        req.user.address.push(address)
        await req.user.save()

        return res.status(200).json({ message: "Address Saved Successfully", isSaved:true})
    }
})

//Update user Address
const updateUserAddress = ash( async(req,res) => {
    const { id } = req.params.id
    const { fullName, mobileNo, pincode,
        state, city, houseNo, street, landmark } = req.body

    const updAddress = req.user.address.find((item) => item.id === id)

    updAddress = { fullName, mobileNo, pincode,
        state, city, houseNo, street, landmark }
        
    res.status(200).json({message: "Address Updated Successfully"})
})

//Delete user address
const deleteUserAddress = ash( async(req,res) => {
    const id = req.params.id
    const address = req.user.address.find((item) => item.id === id)
    res.status(200).json({address})
})

module.exports = { getAllAddressesOfUser, getSingleAddressesOfUser, addUserAddress, updateUserAddress, deleteUserAddress }