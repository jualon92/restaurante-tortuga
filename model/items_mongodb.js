import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({ //declaro schema de docu
    nombre: String,
    precio: Number,
})

//modelo de docu almacenado en coleccion
const itemsmodel = mongoose.model("items", itemSchema)


export default itemsmodel 
