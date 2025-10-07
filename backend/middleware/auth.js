import jwt from "jsonwebtoken";


const authUser = async(req,res,next) =>{
    const token = req.headers.token;

    if(!token){
        return res.status(401).json({success:false,message:"Not Authorized"})
    }

    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({success :  false,message : error.message})
    }
}

export default authUser;