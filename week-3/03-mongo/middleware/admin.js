const express = require("express")
const app = express();

app.use(express.json());

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    app.post("admin/register",async(req,res)=>{
        const{username, password} = req.body;
        if(username === "admin" && password === "admin"){
            res.json({msg:"yes this user is admin"})
        }

    })
}

module.exports = adminMiddleware;