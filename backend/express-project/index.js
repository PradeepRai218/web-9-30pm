let express = require("express");
require("dotenv").config(); //
let App = express();
App.use(express.json());

let checkToken = (req, res, next) => {
  if (
    req.query.token == "" ||
    req.query.token == null ||
    req.query.token == undefined
  ) {
    return res.send({
      _status: false,
      _message: "Please Send The Token",
    });
  }

  if(req.query.token!=process.env.TOKEN){
    return res.send({
      _status: false,
      _message: "Please Send The Correct Token",
    });
  }

  // res.send(
  //   {
  //     _status:false,
  //     _message:"Please Send The Token"

  //   }
  // )
  next(); //Next Work //http://localhost:8000/news
};

// App.use(checkToken); //First Time Run

App.get(
  "/news",
  checkToken,
  //http://localhost:8000/news
  (req, res) => {
    let { title, des } = req.query; //W
    let data = [
      {
        title: "Ws",
        des: "IIP",
      },
      {
        title: "Demo",
        des: "Demo",
      },
    ];

    if (title) {
      data = data.filter((obj) =>
        obj.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    console.log(req.query); //Url Data

    let obj = {
      _status: true,
      _message: "News Found",
      data,
    };
    res.send(obj);
  }
);

App.get("/products", checkToken, (req, res) => {
  let obj = {
    _status: true,
    _message: "Product Found",
    data: [
      {
        title: "Ws",
        des: "IIP",
      },
      {
        title: "Demo",
        des: "Demo",
      },
    ],
  };
  res.send(obj);
});

App.post("/login", (req, res) => {
  console.log("hello", req.body); //Object
  let { userEmail, userPassword } = req.body;

  let obj = {
    _status: true,
    _message: "Login Done",
    userEmail,
    userPassword,
  };
  res.send(obj);
});

App.get("/product/:id", (req, res) => {
  console.log(req.params);
  let { id } = req.params;
  let obj = {
    _status: true,
    _message: "Product Done",
    id,
  };
  res.send(obj);
});

App.listen(process.env.PORT, () => {
  console.log(process.env.PORT, "Server Start");
});
