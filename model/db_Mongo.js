import mongoose from 'mongoose'
import config from '../config.js'

 
class mongo_db {
    static conexionOk = false

    static async conectarDB() {
 
        try {
            if (!mongo_db.conexionOk) { //no conectar dos veces
                await mongoose.connect( process.env.ATLAS_URI.toString(), {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
                console.log('Base de datos conectada!')
                mongo_db.conexionOk = true
            }

        }
        catch (error) {
            console.log(`MongoDB error en conectar: ${error.message}`)
        }
    }
}

export default mongo_db