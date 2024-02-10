import UserModel from '../model/user.js'
import Auth from '../utils/auth.js'

const getAllUsers = async(req,res)=>{
    try {
        let users = await UserModel.find({},{password:0})
        res.status(200).send({
            message:"Data Fetch Successful",
            users
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error: error.message
        })
    }
}

const getUserById = async(req,res)=>{
    try {
        let user = await UserModel.findOne({_id:req.params.id},{password:0})
        res.status(200).send({
            message:"Data Fetch Successful",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error: error.message
        })
    }
}

const signUp = async(req,res)=>{
    try {
        let user = await UserModel.findOne({email:req.body.email})
        if(!user)
        {
            req.body.password = await Auth.hashPassword(req.body.password)
            await UserModel.create(req.body)
            res.status(200).send({
                message:"User Sign Up Successfull"
            })
        }
        else
        {
            res.status(400).send({
                message:`User with ${req.body.email} already exists`
            })
        }

    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error: error.message
        })
    }
}

const login = async(req,res)=>{
    try {
        let user = await UserModel.findOne({email:req.body.email})
        if(user)
        {
            if(await Auth.hashCompare(req.body.password,user.password))
            {
                let token = await Auth.createToken({
                    name:user.name,
                    email:user.email,
                    id:user._id,
                    role:user.role
                })

                res.status(200).send({
                    message:"Login Successfull",
                    name:user.name,
                    role:user.role,
                    token
                })
            }
            else
            {
                res.status(400).send({
                    message:"Incorect Password"
                })
            }
        }
        else
        {
            res.status(400).send({
                message:`User with ${req.body.email} does not exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error: error.message
        })
    }
}

export default {
    getAllUsers,
    getUserById,
    signUp,
    login
}