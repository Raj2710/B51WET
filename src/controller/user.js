const user = [{
        id:1,
        name:"Nagarajan",
        email:"naga@gmail.com",
        username:"nag",
        password:"123",
        status:true
    }
]

const findIndex = (array,id)=>{
    for(let i = 0;i<array.length;i++)
    {
        if(array[i].id==id)
            return i
    }
    return -1
}

const getAllUsers = (req,res)=>{
    try {
        res.status(200).send({
            message:"User data fetched successfully",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const getUserById = (req,res)=>{
    try {
        let {id} = req.params
        let index = findIndex(user,id)
        if(index!==-1)
        {
            res.status(200).send({
                message:"User data fetched successfully",
                user:user[index]
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const addUser = (req,res)=>{
    try {
        let id = user.length?user[user.length-1].id + 1:1
        let data = req.body
        data.id = id

        user.push(data)

        res.status(201).send({
            message:"User Created Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const editUserById = (req,res)=>{
    try {
        let {id} = req.params
        let index = findIndex(user,id)
        if(index!==-1)
        {
            req.body.id = Number(id)
            user.splice(index,1,req.body)
            res.status(200).send({
                message:"User data edited successfully",
                user:user[index]
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const deleteUserById = (req,res)=>{
    try {
        let {id} = req.params
        let index = findIndex(user,id)
        if(index!==-1)
        {
            user.splice(index,1)
            res.status(200).send({
                message:"User data deleted successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

export default {
    getAllUsers,
    getUserById,
    addUser,
    editUserById,
    deleteUserById
}