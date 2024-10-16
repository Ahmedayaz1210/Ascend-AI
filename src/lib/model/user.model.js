import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    clerkId:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: false
    },
    avatar:{
        type: String,
        required: false
    },
    
}, {timestamps: true});

const User = mongoose.models.User || mongoose.model('User', userschema);

export default User;