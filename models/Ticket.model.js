import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const ticketSchema = new Schema({
    _id : {
        type: String,
        default: uuidv4
    },
    issuer: String,
    vendore: String,
    price : {
        type : Number,
        default : 0
    },
    status: {
        String
    },
    issuedDate : {
        type : Date
    },
    email: {
        type : Boolean,
        default : false
    },
    event: {
        type : String,
        ref :'Event'
    }

});

const Ticket = mongoose.model('Ticket', ticketSchema)

export default Ticket;