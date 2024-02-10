import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

let hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    return hash
}

let hashCompare = async(password,hash)=>{
    return await bcrypt.compare(password,hash)
}

let createToken = async(payload)=>{
    let token = await jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
    return token
}

let decodeToken = async(token)=>{
    return await jwt.decode(token)
}

export default {
    hashPassword,
    hashCompare,
    createToken,
    decodeToken
}