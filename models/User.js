const mongoose = require('mongoose');

const { Schema , model } = mongoose;


const UserSchema = new Schema({
    email : { type:String , required:true},
    name : {type:String},
    username : { type:String , required:true},
    profilePic : {type:String},
    coverPic : {type:String},
    createdAt : { type:Date , default:Date.now},
    updateAt : { type:Date , default:Date.now},
})

const User = model("User" , UserSchema);
export default mongoose.models.User || User;