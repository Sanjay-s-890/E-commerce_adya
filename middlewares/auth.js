const { verifyToken } = require("../functions/jwt");

// user authorization
const auth = (req,res,next) => {
    try {
        const token = req.headers['authorization']?.split(' ')?.[1];
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const payload = verifyToken(token);
        if(!payload.success){
            return res.status(400).json({message:payload})
        }
        console.log("r:", payload.data.id)
        req.user = payload.data.id;
        console.log("asdf", req.user);
        next();
    } catch (err) {
        return res.status(500).json({message:err})
    }
}

module.exports = {auth};