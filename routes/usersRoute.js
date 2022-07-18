const express = require("express");
const router = express.Router();
const User = require("../models/user")
router.post("/register", async(req,res)=>{
    const newuser = new User(req.body)
    try{
        const user = await newuser.save()
        res.send('user registered succesfully')
    }catch(error){
        return res.status(400).json({error});

    }

});

router.post("/login",async(req,res)=>{
    const {email,password} =req.body
    try {
        const user =await User.findOne({email : email , password : password})
        if(user){
            const temp ={
                firstname : user.firstname,
                lastname : user.lastname,
                email : user.email,
                branch : user.branch,
                USN : user.USN,
                DOB : user.DOB,
                fathername : user.fathername,
                mothername : user.mothername,
                city : user.city,
                state : user.state,
                impinfo : user.impinfo,
                address : user.address,
                phno : user.phno,
                branch : user.branch,
                isAdmin : user.isAdmin,
                _id : user._id,
            }
            res.send(temp)

        }
        else{
            return res.status(400).json({message : 'login failed'});
        }
        
        
    } catch (error) {
        return res.status(400).json({error});
    }

})


router.get("/getallusers",async(req,res)=>{
    try {
        const users = await User.find()
        res.send(users)
        
    } catch (error) {
        return res.status(400).json({error})
        
    }
})



module.exports=router