let http=require("http") //Server Create->Basic API

let server=http.createServer(
    (req,res)=>{

        if(req.url=="/"){ //http://localhost:8000
            let obj={
                _status:true,
                _message:"Data Found"
             }
            res.end(JSON.stringify(obj)) //JSON ->String
        }
        if(req.url=="/news"){ //http://localhost:8000/news
            let obj={
                _status:true,
                _message:"News Found",
                data:[
                    {
                        newsTitle:"Hello",
                        newsDes:"Ws"
                    },
                    {
                        newsTitle:"Hello1",
                        newsDes:"Ws1"
                    }
                ]
             }
             res.end(JSON.stringify(obj))
        }
        
        if(req.url=="/products"){ //http://localhost:8000/news
            let obj={
                _status:true,
                _message:"News Found",
                data:[
                    {
                        productTitle:"Hello",
                        productDes:"Ws"
                    },
                    {
                        productTitle:"Hello1",
                        productDes:"Ws1"
                    }
                ]
             }
             res.end(JSON.stringify(obj))
        }
        
    }

)

server.listen("8000") //http://localhost:8000 //Express

// let {addData, minData, mulData, divData}=require("./Calculator.js") //default addData

// console.log(addData(10,25)); //addData
// console.log(minData(99,55)); //addData
// console.log(mulData(99,55)); //addData
// console.log(divData(99,55)); //addData