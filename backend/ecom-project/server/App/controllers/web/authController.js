const bcrypt = require("bcrypt");
const { userModal } = require("../../model/userModel");
const saltRounds = 10;
let jwt = require("jsonwebtoken");
const { transporter } = require("../../config/helper");
let register = async (req, res) => {
  let reqObj = { ...req.body };

  const hash = bcrypt.hashSync(req.body.password, saltRounds); //"pradeep123"

  reqObj["password"] = hash;

  try {
    let user = userModal(reqObj); //Error
    let userRes = await user.save();
    res.send({
      _status: true,
      _message: "user Added New",
      userRes,
    });
  } catch (dbError) {
    let errors = [];
    let obj = {};
    for (let errorKey in dbError.errors) {
      obj[errorKey] = dbError.errors[errorKey].message;
      errors.push(obj);
      obj = {};
    }
    res.send({
      _status: false,
      _message: "Error Found",
      errors,
    });
  }
};

let login = async (req, res) => {
  let { email, password } = req.body; //password=pradeep123

  let checkEmail = await userModal.findOne({ email });

  if (checkEmail) {
    let dbPassword = checkEmail.password;
    if (bcrypt.compareSync(password, dbPassword)) {
      //Token Create
      let token = jwt.sign({ id: checkEmail._id }, process.env.TOKENKEY);
      res.send({
        _status: true,
        token,
        _message: "Invalid Password ",
      });
    } else {
      res.send({
        _status: false,
        _message: "Invalid Password ",
      });
    }
  } else {
    res.send({
      _status: false,
      _message: "Invalid Email Id ",
    });
  }
};

let changePassword = async (req, res) => {
  let { oldPassword, newPassword, confirmPassword, userID } = req.body;
  let checkId = await userModal.findOne({ _id: userID });
  console.log(checkId);

  if (checkId) {
    let dbPassword = checkId.password;
    if (bcrypt.compareSync(oldPassword, dbPassword)) {
      if (newPassword == confirmPassword) {
        const hash = bcrypt.hashSync(newPassword, saltRounds);
        let updatePass = await userModal.updateOne(
          {
            _id: userID,
          },
          {
            $set: {
              password: hash,
            },
          },
        );
        res.send({
          _status: true,
          _message: "Password Changed ",
        });
      } else {
        res.send({
          _status: false,
          _message: "New Password or Confirm Password Not Matched ",
        });
      }
    } else {
      res.send({
        _status: false,
        _message: "Invalid Old Password ",
      });
    }
  } else {
    res.send({
      _status: false,
      _message: "Send user data ",
    });
  }
};

let forgotPassword = async (req, res) => {
  let { email } = req.body;
  let checkEmail = await userModal.findOne({ email });

  if (checkEmail) {
    //Mail ->Reset Password Link
    await transporter.sendMail({
      from: '"Online Shop Website" <pradeep.9997@gmail.com>',
      to: email,
      subject: "Forgot Password Mail",
      html: `
        <h1>Reset Your Password</h1>
        <p>Click the link below to reset your password:</p>
        <a href="http://localhost:3000/reset-password/${checkEmail._id}">Reset Password</a>
      `, // HTML version of the message
    });
    res.send({
      _status: true,
      _message: "reset password link shared ",
    });



  } else {
    res.send({
      _status: false,
      _message: "Invalid Email Id ",
    });
  }
};

let resetPassword=(req,res)=>{
  let {id}=req.params
  let {newPassword,confirmPassword}=req.body
  let checkId=userModal.findOne({_id:id})

  if(checkId){
    if(newPassword==confirmPassword){
      const hash = bcrypt.hashSync(newPassword, saltRounds);
      userModal.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: hash,
          },
        }
      ).then((data)=>{
        res.send({
          _status: true,
          _message: "Password Reset Successfully ",
        });
      }).catch((err)=>{
        res.send({
          _status: false,
          _message: "Error Found ",
        });
      })  
    }
    else{
      res.send({
        _status: false,
        _message: "New Password or Confirm Password Not Matched ",
      });
    }
  }
  else{
    res.send({
      _status: false,
      _message: "Invalid User Id ",
    });
  }



}

let updateProfile=async(req,res)=>{
  let {name,address,userID}=req.body
  let image=''
  if(req.file){
    image=req.file.filename
  }
  let updateData=await userModal.updateOne(
    {
      _id:userID
    },
    {
      $set:{
        name:name,
        address:address,
        image:image
      }
    }
  )
  .then((data)=>{
    res.send({
      _status:true,
      _message:"Profile Updated Successfully",
    })    
  })
  .catch((err)=>{
    console.log(err);
     
    res.send({
      _status:false,
      _message:"Error Found",
    })
  })  
  

}

module.exports = {resetPassword,updateProfile, register, login, changePassword, forgotPassword };
