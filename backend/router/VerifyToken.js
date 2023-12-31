import jwt from "jsonwebtoken";
const JWTSEC = "#2@!@$ndja45883 r7##";

const verifyToken = (req, res, next)=> {
    const authHeader = req.headers.token;;
    // console.log(authHeader)
    if(authHeader) {
        const token = authHeader;
        jwt.verify(token, JWTSEC, (error, user)=> {
            if(error) return res.status(400).json("Some error occured...!")
            req.user = user;
            next();
        })
    }
    else {
        return res.status(400).json("Access token is not valid...!")
    }

}

export default verifyToken;