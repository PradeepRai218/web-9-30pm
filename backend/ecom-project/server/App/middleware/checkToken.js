let jwt = require("jsonwebtoken");

let checkToken=(req,res,next)=>{

    try{
         let token=req.headers.authorization.split(" ")[1];
         console.log(token);
        var decoded = jwt.verify(token, process.env.TOKENKEY);

        let {id}=decoded
        req.body.userID=id
        next()

    }
    catch{
        res.send({
            _status:false,
            _message:"Invalid Token"
        })
    }
    
   
}

module.exports={checkToken}