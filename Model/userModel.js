import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
})

export const user = mongoose.model( "accounts" ,UserSchema)