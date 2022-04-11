import express from "express"
import ItemController from "../../controllers/itemControllers.js"
 
const router = express.Router()


 
router.route("/")
    .get(ItemController.getItems)


export default router