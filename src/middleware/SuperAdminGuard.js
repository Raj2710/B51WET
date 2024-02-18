import Auth from '../utils/auth.js'
const SuperAdminGuard = async(req,res,next)=>{
    try {
        let token = req?.headers?.authorization?.split(" ")[1]

        if(token)
        {
            let payload = await Auth.decodeToken(token)
            if(payload.role === 'superAdmin')
                next()
            else    
                res.status(402).send({message:"Permission Denied"})
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

export default SuperAdminGuard