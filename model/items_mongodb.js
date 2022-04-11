import mongoose from 'mongoose'
import Mongo_DB from './DB_mongo.js'

const itemSchema = mongoose.Schema({ //declaro schema de docu
    nombre: String,
    precio: Number,
})

//modelo de docu almacenado en coleccion
const ItemsModel = mongoose.model("items", itemSchema)
 

export default ItemsModel 
