import mongoose from './index.js'

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

//create schema
let requestSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        validate:{
            validator: (value)=>validateEmail(value)
        }
    },
    srno:{
        type:String,
        default:'SR'+Math.floor(+ new Date()/1000)
    },
    type:{
        type:String,
        required:[true,'Type is required'],
    },
    title:{
        type:String,
        required:[true,'Title is required'],
    },
    description:{
        type:String,
        required:[true,'Description is required'],
    },
    status:{
        type:String,
        default:"Open"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    assignedTo:{
        type:String,
        default:null
    },
    assignedToId:{
        type:String,
        default:null
    },
    assignedAt:{
        type:Date,
        default:null
    },
    closedAt:{
        type:Date,
        default:null
    },
    resolution:{
        type:String,
        default:null
    }
},{
    collection:'requests',
    versionKey:false
})

//create model
const requestModel = mongoose.model('requests',requestSchema)

export default requestModel