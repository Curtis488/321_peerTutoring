const {mongoose, Collection} = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
},{
    collection: "userInfo"
})
mongoose.model("userInfo", UserSchema);