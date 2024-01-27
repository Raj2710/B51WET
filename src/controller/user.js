import mongodb,{ MongoClient } from 'mongodb'
import dbConfig from '../config/dbConfig.js'

const client = new MongoClient(dbConfig.DB_URL)

const getAllUsers = async(req,res)=>{
    await client.connect()
    try {
        const db = await client.db(dbConfig.DB_NAME)
        let users = await db.collection('users').find().toArray()
        res.status(200).send({
            message:"Data fetch successfull",
            users
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    finally{
        client.close()
    }
}

const getUserById = async(req,res)=>{
    await client.connect()
    try {
        const db = await client.db(dbConfig.DB_NAME)
        let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(req.params.id)})
        res.status(200).send({
            message:"Data fetch successfull",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    finally{
        client.close()
    }
}

const createUser = async(req,res)=>{
    await client.connect()
    try {
        const db = await client.db(dbConfig.DB_NAME)
        let user = await db.collection('users').findOne({email:req.body.email})
        if(!user)
        {
            await db.collection('users').insertOne(req.body)
            res.status(201).send({
                message:"User created successfully"
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
            message:error.message || "Internal server error"
        })
    }
    finally{
        client.close()
    }
}

const editUserById = async(req,res)=>{
    await client.connect()
    try {
        const db = await client.db(dbConfig.DB_NAME)
        let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(req.params.id)})
        if(user)
        {
            await db.collection('users').updateOne({_id:new mongodb.ObjectId(req.params.id)},{$set:req.body})
            res.status(200).send({
                message:"User Edited Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"User Not found"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    finally{
        client.close()
    }
}

const deleteUserById = async(req,res)=>{
    await client.connect()
    try {
        const db = await client.db(dbConfig.DB_NAME)
        let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(req.params.id)})
        console.log(user)
        if(user)
        {
            let data = await db.collection('users').deleteOne({_id:new mongodb.ObjectId(req.params.id)})
            res.status(200).send({
                message:"User Deleted Successfully",
                data
            })
        }
        else
        {
            res.status(400).send({
                message:"User Not found"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    finally{
        client.close()
    }
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}