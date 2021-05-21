const mongoose = require("../db")
const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: String,
        name: String,
        age: Number,
        gender: String,
        isActive: Boolean,
        userType: String,
        //more detailed
        // userType: {
        //     desc: "UserRoles",
        //     trim:true,
        //     type: String,
        //     enum: ["Admin","User","Guest"],
        //     default: "User",
        //     required: true
        // }
    },
    {
        strict: true,
        versionKey: false,
        timestamps: {
            createdAt: "CreatedTime",
            updatedAt: "LastUpdatedTime"
        }
    }
);
module.exports = mongoose.model("Users", schema)
