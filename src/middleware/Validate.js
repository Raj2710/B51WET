import Auth from '../utils/auth.js'
import userModel from '../model/user.js'
const Validate = async(req,res,next)=>{
    try {
        let token = req?.headers?.authorization?.split(" ")[1]

        if(token)
        {
            let payload = await Auth.decodeToken(token)

            let userData = await userModel.findById(payload.id)
            
            if(Math.round(+new Date()/1000)<payload.exp && userData.role === payload.role)
            {
                req.userData = userData
                next()
            }
            else    
                res.status(402).send({message:"Token Expired"})
        }
        else
        {
            res.status(402).send({
                message:"Token Not Found"
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error: error.message
        })
    }
}

export default Validate