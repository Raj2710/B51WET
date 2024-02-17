import requestModel from '../model/request.js'
import userModel from '../model/user.js'
import emailService from '../utils/emailService.js'
import mongoose from 'mongoose'
const createRequest = async (req,res)=>{
    try {
       let request = await requestModel.create(req.body)

       //email the user
        await emailService.sendConfrimMail(request)

        res.status(201).send({
            message:"Your Request is Submitted",
            srno: request.srno
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const getRequestDetails = async(req,res)=>{
    try {
        let srno = req.params.srno
        let request = await requestModel.findOne({srno:srno})
        if(request)
        {
            res.status(200).send({
                message:"Deatils Fetched Successfully",
                request
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid SR Number"
            })
        }
     } catch (error) {
         res.status(500).send({
             message:error.message || "Internal Server Error",
             error
         })
     }
}

const assignRequest = async(req,res)=>{
    try {
        let userData = req.userData
        let srno = req.params.srno

        let request = await requestModel.findOne({srno:srno})

        if(request && request.status==="Open")
        {
            request.assignedTo = userData.name
            request.assignedToId = userData._id
            request.assignedAt = new Date()
            request.status = "Assigned"
            await request.save()
            await emailService.sendAssignedMail(request)
            res.status(200).send({
                message:"Request Assigned Successfully"
            })

        }
        else
        {
            res.status(400).send({
                message:"Invalid SR Number"
            })
        }

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const closeRequest = async(req,res)=>{
    try {
        let userData = req.userData
        let srno = req.params.srno
        let resolution = req.body.resolution

        let request = await requestModel.findOne({srno:srno})
        console.log(srno)
        console.log(request.assignedToId,userData._id.toString())
        if(request && request.status==="Assigned" && request.assignedToId === userData._id.toString())
        {
            request.closedAt = new Date()
            request.status = "Closed"
            request.resolution = resolution
            await request.save()
            await emailService.sendClossedMail(request)
            res.status(200).send({
                message:"Request Clossed Successfully"
            })

        }
        else
        {
            res.status(400).send({
                message:"Invalid SR Number"
            })
        }

    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}
export default {
    createRequest,
    getRequestDetails,
    assignRequest,
    closeRequest
}