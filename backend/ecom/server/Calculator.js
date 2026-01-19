let addData=(num1,num2)=>{
    return num1+num2
}

let minData=(num1,num2)=>{
    return num1-num2
}
let mulData=(num1,num2)=>{
    return num1*num2
}
let divData=(num1,num2)=>{
    return num1/num2
}
module.exports={addData,minData,mulData,divData} //Named Export
//  module.exports=addData   //default  //"type": "commonjs"

// export default addData //"type": "module"