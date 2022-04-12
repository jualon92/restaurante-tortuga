import item from "../model/items_mongoDB.js"
import express from "express"
 

const router = express.Router()
 

const getItems = (req,res) => {
    item.find() //all
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json("error" + err))
    
}
 
 

router.route("/delete/:id").delete()

router.route("/update/:id").put()

export default { getItems } 


