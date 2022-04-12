import express from "express"
import ItemController from "../../controllers/itemcontroller.js"  
const router = express.Router()


 
router.route("/")
    .get(ItemController.getItems)


export default router