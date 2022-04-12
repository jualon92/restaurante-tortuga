import dotenv from  "dotenv"

// no necesario si se exporta dotenv/config 
dotenv.config() 
console.log("process.env.PORT" , process.env.PORT)  
console.log("process.env.CNX" , process.env.CNX)

const uri = process.env.MONGODB_URI;

export default { // export estas variables 
    PORT : process.env.PORT || 8080, 
    STR_CNX: process.env.ATLAS_URI  || process.env.CNX  

}